<script setup lang="ts">
import { type ShowListItemResponse } from '@/types/Show';
import { getMostPopularShows } from '@/services/api';
import { onBeforeMount, ref, watch } from 'vue';
import ShowList from './ShowList.vue';
import ShowCardListSkeleton from './skeletons/ShowCardListSkeleton.vue';

const props = defineProps<{
  country: string;
}>();

const shows = ref<ShowListItemResponse[] | null>([]);
const showError = ref<String | ''>();
const isLoading = ref<boolean>(true);

const fetchShowsByCountry = async () => {
  const { data, error, loading } = await getMostPopularShows(props.country);

  shows.value = data.slice(0, 5); // for now only show 5 shows
  showError.value = error?.value?.message;
  isLoading.value = loading;
};

onBeforeMount(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  fetchShowsByCountry();
});

watch(
  () => props.country,
  () => {
    fetchShowsByCountry();
  }
);
</script>

<template>
  <section>
    <ShowCardListSkeleton v-if="isLoading" />
    <p v-if="showError">Something went wrong</p>
    <div v-if="shows && shows.length > 0">
      <h2 class="text-white text-3xl mb-6">Most popular shows</h2>
      <ShowList :shows="shows" />
    </div>
  </section>
</template>

<style scoped></style>
