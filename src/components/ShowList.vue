<script setup lang="ts">
import type { ShowListItemResponse } from '@/types/Show';
import ShowCard from './ShowCard.vue';
import { computed } from 'vue';

const props = defineProps<{
  shows: ShowListItemResponse[];
}>();

const showDetails = computed(() =>
  props.shows.map((show) => {
    return {
      ...show.show,
      season: show.season,
      episodeName: show.name
    };
  })
);
</script>

<template>
  <section
    class="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-6"
  >
    <div v-for="showDetail in showDetails" :key="showDetail.id">
      <ShowCard :show="showDetail" />
    </div>
  </section>
</template>
