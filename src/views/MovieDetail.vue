<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const movieId = useRoute().params.id;

onMounted(() => {
  console.log('movieId', movieId);
});
</script>

<template>
  <div class="about">
    <h1>Movie {{ movieId }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
