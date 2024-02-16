<script setup lang="ts">
import SearchBarVue from '@/components/SearchBar.vue';
import IconTV from './icons/IconTV.vue';
import CountrySelectVue from './CountrySelect.vue';
</script>
<template>
  <header class="text-white p-4 fixed w-full bg-black z-50 top-0 left-0">
    <div
      class="container max-w-screen-xl mx-auto align-center flex align-center justify-between gap-6"
    >
      <a class="w-12 cursor-pointer" @click="$router.push('/')">
        <IconTV />
      </a>

      <SearchBarVue />

      <CountrySelectVue />
    </div>
  </header>
</template>
