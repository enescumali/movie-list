<script setup lang="ts">
import type { Genre } from '@/types/Show';

defineProps<{
  genres?: Genre[];
}>();
</script>

<template>
  <div class="py-4">
    <span
      v-for="genre in genres"
      :key="genre"
      class="border border-gray-600 mr-2 rounded-2xl p-2 text-white text-xs"
    >
      {{ genre }}
    </span>
  </div>
</template>

<style scoped></style>
