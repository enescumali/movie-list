<script setup lang="ts">
import IconRatingVue from '@/components/icons/IconRating.vue';
defineProps<{
  rating?: number | null;
}>();
</script>

<template>
  <div class="font-black text-l flex gap-x-1 items-center text-white">
    <span class="min-w-4">{{
      (rating && (Math.round(rating * 100) / 100).toFixed(1)) || '--'
    }}</span>
    <IconRatingVue />
  </div>
</template>
