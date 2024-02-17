<script setup lang="ts">
import { type Genre, type ShowListItemResponse } from '@/types/Show';
import { getShowsByGenre } from '@/services/api';
import { inject, onBeforeMount, ref, watch } from 'vue';
import ShowList from './ShowList.vue';
import ShowCardListSkeleton from './skeletons/ShowCardListSkeleton.vue';
import type { CountryProvider } from '@/context/countryProvider';

const { country } = inject('country') as CountryProvider;

const props = defineProps<{
  genre: Genre;
}>();

const shows = ref<ShowListItemResponse[] | null>([]);
const showError = ref<String | ''>();
const isLoading = ref<boolean>(true);

const fetchShowsByGenre = async () => {
  const { data, error, loading } = await getShowsByGenre(props.genre, country.value);

  shows.value = data.slice(0, 5); // for now only show 5 shows
  showError.value = error?.value?.message;
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
  <section>
    <ShowCardListSkeleton v-if="isLoading" />
    <p v-if="showError">Something went wrong</p>
    <div v-if="shows && shows.length > 0">
      <h2 class="text-white text-3xl mb-6">{{ genre }}</h2>
      <ShowList :shows="shows" />
    </div>
  </section>
</template>

<style scoped></style>
