<script setup lang="ts">
import GenreBadgesVue from '@/components/GenreBadges.vue';
import IconIMDB from '@/components/icons/IconIMDB.vue';
import ShowDetailSkeleton from '@/components/skeletons/ShowDetailSkeleton.vue';
import { getShowById } from '@/services/api';
import type { ShowResponse } from '@/types/Show';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const showId = useRoute().params.id as string; // don't know why vue thinks params.id can also be an array

const show = ref<ShowResponse | null>();
const showError = ref<String | ''>();
const isLoading = ref<boolean>(true);

onBeforeMount(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { data, error, loading } = await getShowById(showId);

  show.value = data;
  showError.value = error?.value?.message;
  isLoading.value = loading;
});
</script>

<template>
  <div>
    <section class="text-gray-700 body-font overflow-hidden">
      <ShowDetailSkeleton v-if="isLoading" />
      <p v-if="showError">Error</p>
      <div v-if="show" class="container px-5 py-12 lg:w-4/5 mx-auto">
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
          <div class="sm:w-2/3 w-full pl-10 lg:py-6 mt-6 lg:mt-0">
            <p class="text-white" v-html="show?.summary"></p>
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
    </section>
  </div>
</template>
