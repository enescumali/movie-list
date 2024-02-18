<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import { provide } from 'vue';
import { countryProvider } from '@/context/countryProvider';

provide('country', countryProvider);
</script>
<template>
  <div class="pt-28">
    <MainHeader />
    <main class="container mx-auto max-w-screen-xl px-4">
      <RouterView />
    </main>
  </div>
</template>
