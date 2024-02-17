<script setup lang="ts">
import { Genres } from '@/types/Show';
import { inject, onBeforeMount, ref, watch } from 'vue';
import type { CountryProvider } from '@/context/countryProvider';
import { getShowsByGenre } from '@/services/api';
import ShowListVue from '@/components/Show/ShowList.vue';
import ShowCardListSkeleton from '@/components/states/skeletons/ShowCardListSkeleton.vue';
import ErrorStateVue from '@/components/states/error/ErrorState.vue';
import ShowListByPopularity from '@/components/Show/ShowListByPopularity.vue';

const { country } = inject('country') as CountryProvider;

interface ShowListItemsByGenres {
  [key: string]: ShowListItemsByGenres[];
}
[];

const showLists = ref<ShowListItemsByGenres[][] | null>([]);
const errorMessage = ref<string | ''>();
const isLoading = ref<boolean>(true);

const fetchShowsByGenre = async () => {
  const { data, error, loading } = await getShowsByGenre(Object.values(Genres), country.value);

  showLists.value = Object.entries(data);
  errorMessage.value = error?.value?.message;
  isLoading.value = loading;
};

onBeforeMount(async () => {
  //todo: remove this timeout
  await new Promise((resolve) => setTimeout(resolve, 2000));
  fetchShowsByGenre();
});

watch(
  () => country.value,
  () => {
    fetchShowsByGenre();
  }
);
</script>

<template>
  <div class="gap-12 flex-col flex">
    <section>
      <ShowListByPopularity :country="country" />
    </section>

    <ShowCardListSkeleton v-if="isLoading" />
    <ErrorStateVue v-if="errorMessage" :error="errorMessage" />
    <section v-for="showList in showLists" :key="showList[0]">
      <h2 class="text-white text-3xl mb-6">{{ showList[0] }}</h2>
      <ShowListVue :shows="showList[1]" />
    </section>
  </div>
</template>
