<script setup lang="ts">
import type { CountryProvider } from '@/context/countryProvider';
import { inject } from 'vue';

const { country, updateCountry } = inject('country') as CountryProvider;

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;

  updateCountry(target.value);
};
</script>
<template>
  <select
    id="countries"
    v-model="country"
    class="max-w-24 bg-zinc-900 text-gray-200 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
    @change="handleChange"
  >
    <option selected value="US">US</option>
    <option value="NL">NL</option>
    <option value="TR">TR</option>
    <option value="FR">FR</option>
  </select>
</template>
