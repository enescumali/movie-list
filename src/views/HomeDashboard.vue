<script setup lang="ts">
import ShowListByGenreVue from '@/components/ShowListByGenre.vue';
import { Genres } from '@/types/Show';
</script>

<template>
  <main class="p-8">
    <section>
      <h2 class="text-white text-xl">Actions</h2>
      <ShowListByGenreVue :genre="Genres.Action" />
    </section>
    <section>
      <h2 class="text-white text-xl">Drama</h2>
      <ShowListByGenreVue :genre="Genres.Drama" />
    </section>
    <section>
      <h2 class="text-white text-xl">Comedy</h2>
      <ShowListByGenreVue :genre="Genres.Comedy" />
    </section>
    <section>
      <h2 class="text-white text-xl">Family</h2>
      <ShowListByGenreVue :genre="Genres.Family" />
    </section>
  </main>
</template>
