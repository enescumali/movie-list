<script setup lang="ts">
import type { Show } from '@/types/Show';
import IconIMDB from '@/components/icons/IconIMDB.vue';
import GenreBadgesVue from '@/components/GenreBadges.vue';

defineProps<{ show: Show }>();
</script>
<template>
  <div>
    <div class="mb-10">
      <h1 class="text-white text-4xl title-font font-medium">
        {{ show?.name }}
      </h1>
      <GenreBadgesVue :genres="show?.genres" />
      <p class="font-bold text-gray-400">{{ show?.network?.name }}</p>
    </div>

    <div class="flex flex-wrap">
      <img
        alt="ecommerce"
        class="sm:w-1/3 w-full object-cover object-center rounded border border-gray-200"
        :src="`${show?.image?.medium}`"
      />
      <div class="sm:w-2/3 w-full sm:pl-10 lg:py-6 mt-6 lg:mt-0">
        <p v-if="show?.summary" class="text-white" v-html="show?.summary"></p>
        <a
          v-if="show?.externals?.imdb"
          target="_blank"
          class="w-16 block mt-4"
          :href="`https://www.imdb.com/title/${show?.externals?.imdb}`"
        >
          <IconIMDB />
        </a>
      </div>
    </div>
  </div>
</template>
