<script setup lang="ts">
import { Genres } from '@/types/Show';
import ShowListByGenreVue from '@/components/ShowListByGenre.vue';
</script>

<template>
  <div class="gap-12 flex-col flex">
    <section>
      <ShowListByGenreVue :genre="Genres.Drama" />
    </section>
    <section>
      <ShowListByGenreVue :genre="Genres.Action" />
    </section>
    <section>
      <ShowListByGenreVue :genre="Genres.Comedy" />
    </section>
    <section>
      <ShowListByGenreVue :genre="Genres.Family" />
    </section>
  </div>
</template>
