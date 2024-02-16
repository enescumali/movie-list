<script setup lang="ts">
import { Genres } from '@/types/Show';
import ShowListByGenreVue from '@/components/ShowListByGenre.vue';
import ShowListByPopularity from '@/components/ShowListByPopularity.vue';
import { inject } from 'vue';
import type { CountryProvider } from '@/context/countryProvider';

const { country } = inject('country') as CountryProvider;
</script>

<template>
  <div class="gap-12 flex-col flex">
    <section>
      <ShowListByPopularity :country="country" />
    </section>
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
    <section>
      <ShowListByGenreVue :genre="Genres.Fantasy" />
    </section>
  </div>
</template>
