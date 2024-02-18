<script setup lang="ts">
import type { ShowListGroups } from '@/types/Show';
import ShowListVue from '@/components/Show/ShowList.vue';
import { inject } from 'vue';
import { Genres } from '@/config';
import type { CountryProvider } from '@/context/countryProvider';

const { country } = inject('country') as CountryProvider;
defineProps<{
  groups: ShowListGroups[];
}>();
</script>
<template>
  <div v-if="groups.length > 0">
    <section v-for="group in groups" :key="group.genre" class="show-list-group-container">
      <h2 class="show-list-genre-title text-white text-4xl mb-6">
        {{ group.genre }} {{ group.genre === Genres.MostPopular ? `in ${country}` : '' }}
      </h2>
      <div>
        <ShowListVue :shows="group.items" />
      </div>
    </section>
  </div>
</template>
