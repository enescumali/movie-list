<script setup lang="ts">
import type { Show } from '@/types/Show';
import { onBeforeMount, ref } from 'vue';
import { useFetch } from './hooks/useFetch';
import MostPopularShowsVue from '@/components/MostPopularShows.vue';

const movies = ref<Show[] | null>([]);
const movieError = ref<String | ''>();

onBeforeMount(async () => {
  const { data, error } = await useFetch<Show[]>('https://api.tvmaze.com/schedule');

  movies.value = data.value;

  movieError.value = error.value?.message;
});
</script>

<template>
  <main class="p-8">
    <section>
      <h2 class="text-white text-xl">Most popular</h2>
      <MostPopularShowsVue />
    </section>
  </main>
</template>
