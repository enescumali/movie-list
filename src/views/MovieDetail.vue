<script setup lang="ts">
import { getShowById } from '@/services/api';
import type { Show } from '@/types/Show';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const showId = useRoute().params.id;

const show = ref<Show | null>();
const showError = ref<String | ''>();

onBeforeMount(async () => {
  const { data, error } = await getShowById(showId);

  show.value = data;
  showError.value = error?.value?.message;
});
</script>

<template>
  <div class="about">
    <h1 class="text-white">{{ show?.name }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
