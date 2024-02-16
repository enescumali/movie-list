<script setup lang="ts">
import { type Genre, type ShowListItemResponse } from '@/types/Show';
import { getShowsByGenre } from '@/services/api';
import { onBeforeMount, ref } from 'vue';
import ShowList from './ShowList.vue';

const props = defineProps<{
  genre: Genre;
}>();

const shows = ref<ShowListItemResponse[] | null>([]);
const showError = ref<String | ''>();

onBeforeMount(async () => {
  const { data, error } = await getShowsByGenre(props.genre);

  shows.value = data.slice(0, 5); // for now only show 5 shows
  showError.value = error?.value?.message;
});
</script>

<template>
  <section>
    <p v-if="showError">Something went wrong</p>
    <div v-if="shows && shows.length > 0">
      <ShowList :shows="shows" />
    </div>
  </section>
</template>

<style scoped></style>
