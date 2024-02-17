<script setup lang="ts">
import IconNoResults from '@/components/icons/IconNoResults.vue';
import { DEFAULT_ERROR_MESSAGE } from '@/config';

defineProps<{
  error: string;
}>();
</script>
<template>
  <div class="text-gray-400 max-w-64 text-center flex flex-col items-center mx-auto">
    <div class="w-24 h-24 mb-6">
      <IconNoResults />
    </div>
    <p>{{ error || DEFAULT_ERROR_MESSAGE }}</p>
  </div>
</template>
