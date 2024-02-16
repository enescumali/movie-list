<script setup lang="ts">
import { onMounted, ref } from 'vue';
import debounce from 'lodash/debounce';
import { useRoute, useRouter } from 'vue-router';
import IconSearch from './icons/IconSearch.vue';

const searchTerm = ref('');

const router = useRouter();
const route = useRoute();

const getUrlQueryParams = async () => {
  await router.isReady();

  return route.query;
};

onMounted(async () => {
  const params = await getUrlQueryParams();

  searchTerm.value = params.q as string;
});

const onInput = debounce(() => {
  if (!searchTerm.value) {
    router.replace('/');
    return;
  }

  router.push(`/search?&q=${searchTerm.value}`);
}, 800);
</script>
<template>
  <div class="w-full max-w-xl">
    <div
      class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden"
    >
      <div class="grid place-items-center h-full w-12 text-gray-300 bg-zinc-900">
        <IconSearch />
      </div>

      <input
        id="search"
        v-model="searchTerm"
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-zinc-900 text-white"
        type="text"
        placeholder="Search shows..."
        @input="onInput"
      />
    </div>
  </div>
</template>
