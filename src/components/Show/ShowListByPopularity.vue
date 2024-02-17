<script setup lang="ts">
import { type ShowListItem } from '@/types/Show';
import { getMostPopularShows } from '@/services/api';
import { onBeforeMount, ref, watch } from 'vue';
import ShowList from './ShowList.vue';
import ShowCardListSkeleton from '../states/skeletons/ShowCardListSkeleton.vue';
import ErrorStateVue from '@/components/states/error/ErrorState.vue';
import { DEFAULT_ERROR_MESSAGE } from '@/config';

const props = defineProps<{
  country: string;
}>();

const shows = ref<ShowListItem[] | null>([]);
const errorMessage = ref<string | ''>();
const isLoading = ref<boolean>(true);

const fetchShowsByCountry = async () => {
  const { data, error, loading } = await getMostPopularShows(props.country);

  shows.value = data
    .map((showListItem, index) => {
      return {
        ...showListItem,
        ranking: index + 1
      };
    })
    .slice(0, 5); // for now only show 5 shows

  errorMessage.value = error.value ? DEFAULT_ERROR_MESSAGE : ''; // API doesn't return meaningful error messages
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
    <ErrorStateVue v-if="errorMessage" :error="errorMessage" />
    <div v-if="shows && shows.length > 0">
      <h2 class="text-white text-3xl mb-6">Most popular shows in {{ props.country }}</h2>
      <ShowList :shows="shows" />
    </div>
  </section>
</template>

<style scoped></style>
