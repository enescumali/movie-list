<script setup lang="ts">
import { Genres, type ShowListItemsByGenres } from '@/types/Show';
import { inject, onBeforeMount, ref, watch } from 'vue';
import type { CountryProvider } from '@/context/countryProvider';
import { getShowsByGenre } from '@/services/api';
import ShowCardListSkeleton from '@/components/states/skeletons/ShowCardListSkeleton.vue';
import ErrorStateVue from '@/components/states/error/ErrorState.vue';
import ShowListByPopularity from '@/components/Show/ShowListByPopularity.vue';
import ShowListGroups from '@/components/Show/ShowListGroups.vue';

const { country } = inject('country') as CountryProvider;

const showListGroups = ref<ShowListItemsByGenres | null>({});

const errorMessage = ref<string | ''>();
const isLoading = ref<boolean>(true);

const fetchShowsByGenre = async () => {
  const { data, error, loading } = await getShowsByGenre(Object.values(Genres), country.value);

  showListGroups.value = data;

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
    <ShowListGroups v-if="showListGroups" :groups="showListGroups" />
  </div>
</template>
