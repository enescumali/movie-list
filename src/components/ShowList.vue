<script setup lang="ts">
import type { Show } from '@/types/Show';
import ShowCard from './ShowCard.vue';

defineProps<{
  shows: Show[];
}>();
</script>

<template>
  <section
    class="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-6 mt-10 mb-5"
  >
    <div v-for="show in shows" :key="show.id">
      <ShowCard :show="show" />
    </div>
  </section>
</template>

<style scoped></style>
