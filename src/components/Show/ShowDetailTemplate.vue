<script setup lang="ts">
import type { Show } from '@/types/Show';
import IconIMDB from '@/components/icons/IconIMDB.vue';
import GenreBadgesVue from '@/components/GenreBadges.vue';
import ShowRating from '../ShowRating.vue';

defineProps<{ show: Show }>();
</script>
<template>
  <div>
    <div class="mb-10">
      <div class="flex items-center justify-between mt-4">
        <h1 class="text-white text-4xl title-font font-medium">
          {{ show?.name }}
        </h1>

        <div class="flex gap-2">
          <ShowRating :rating="show?.rating?.average" />
          <a
            v-if="show?.externals?.imdb"
            target="_blank"
            class="w-12 block"
            :href="`https://www.imdb.com/title/${show?.externals?.imdb}`"
          >
            <IconIMDB
          /></a>
        </div>
      </div>
      <p class="text-gray-400 mt-2 mb-2">
        {{ show.premiered.slice(0, 4) }} - {{ show.ended && `${show.ended.slice(0, 4)}` }}
      </p>
      <GenreBadgesVue :genres="show?.genres" />
      <p class="text-gray-400 text-sm">
        {{ show?.schedule?.days.join(', ') }} at {{ show?.schedule?.time }}
      </p>

      <p class="font-bold text-gray-400 network-name mb-4">{{ show?.network?.name }}</p>
    </div>

    <div class="flex flex-wrap">
      <img
        alt="ecommerce"
        class="sm:w-1/3 w-full object-cover object-center rounded border border-gray-200"
        :src="`${show?.image?.medium}`"
      />
      <div class="sm:w-2/3 w-full sm:pl-10 lg:py-6 mt-6 lg:mt-0">
        <p v-if="show?.summary" class="text-white show-summary" v-html="show?.summary"></p>

        <div class="flex text-gray-400 text-sm my-4">
          <p class="">Language: {{ show?.language }}</p>
          <span class="mx-2">/</span>
          <a class="underline" :href="show?.officialSite" target="_blank">Official website</a>
        </div>
      </div>
    </div>
  </div>
</template>
