<script setup lang="ts">
import IconRatingVue from '@/components/icons/IconRating.vue';
defineProps<{
  rating?: number | null;
}>();
</script>

<template>
  <div class="font-black text-l flex gap-x-1 items-center text-white">
    <span>{{ rating || '--' }}</span>
    <IconRatingVue />
  </div>
</template>

<style scoped></style>
