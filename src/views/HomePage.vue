<script setup lang="ts">
import { ref } from 'vue';

const products = ref(null);

fetch('https://api.tvmaze.com/shows/1')
    .then(response => response.json())
    .then(data => {products.value = data});

</script>

<template>
  <main>
    <div class="w-full">movie list goes here</div>
  </main>
</template>
