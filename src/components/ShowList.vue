<script setup lang="ts">
import type { ShowListItemResponse } from '@/types/Show';
import ShowCard from './ShowCard.vue';

defineProps<{
  shows: ShowListItemResponse[];
}>();
</script>

<template>
  <section
    class="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-6"
  >
    <div v-for="showListItem in shows" :key="showListItem.id">
      <ShowCard :show="showListItem.show" />
    </div>
  </section>
</template>

<style scoped></style>
