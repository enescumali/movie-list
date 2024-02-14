<script setup lang="ts">
import { Genres, type Show } from '@/types/Show';
import { getShowsByGenre } from '@/services/api';
import { onBeforeMount, ref } from 'vue';
import ShowList from './ShowList.vue';

const movies = ref<Show[] | null>([]);
const movieError = ref<String | ''>();

onBeforeMount(async () => {
  const { data, error } = await getShowsByGenre(Genres.Drama);

  movies.value = data.value?.slice(0, 3);
  movieError.value = error.value?.message;
});
</script>

<template>
  <section>
    <p v-if="movieError">Something went wrong</p>
    <div v-if="movies && movies.length > 0">
      <ShowList :movies="movies" />
    </div>
  </section>
</template>

<style scoped></style>
@/types/Show
