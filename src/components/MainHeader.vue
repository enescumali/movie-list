<script setup lang="ts">
import SearchBarVue from '@/components/SearchBar.vue';
import IconTV from './icons/IconTV.vue';
</script>
<template>
  <header
    class="gap-6 text-white p-8 fixed w-full bg-black z-50 top-0 left-0 align-center flex align-center justify-between"
  >
    <a class="w-12 cursor-pointer" @click="$router.push('/')">
      <IconTV />
    </a>

    <SearchBarVue />
  </header>
</template>
<style scoped>
header {
  box-shadow: 0 0 30px 1px #333;
}
</style>
