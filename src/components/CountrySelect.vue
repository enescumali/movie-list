<script setup lang="ts">
import type { CountryProvider } from '@/context/countryProvider';
import { inject } from 'vue';
import { SUPPORTED_COUNTRIES } from '@/config';
import router from '@/router';

const { country, updateCountry } = inject('country') as CountryProvider;

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;

  updateCountry(target.value);
  router.push('/');
};
</script>
<template>
  <select
    id="countries"
    v-model="country"
    class="max-w-24 bg-zinc-900 text-gray-200 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
    @change="handleChange"
  >
    <option
      v-for="supportedCountry in SUPPORTED_COUNTRIES"
      :key="supportedCountry"
      :value="supportedCountry"
      :selected="supportedCountry === country"
    >
      {{ supportedCountry }}
    </option>
  </select>
</template>
