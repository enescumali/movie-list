<script setup lang="ts">
import { type Show, type ShowListItemResponse } from '@/types/Show';
import { onBeforeMount, ref, watch } from 'vue';
import ShowCardSkeletonVue from '@/components/skeletons/ShowCardSkeleton.vue';
import { useRoute } from 'vue-router';
import { findShowByQuery } from '@/services/api';
import ShowCardVue from '@/components/ShowCard.vue';

const route = useRoute();

const show = ref<ShowListItemResponse[] | null>([]);
const showError = ref<String | ''>();
const isLoading = ref<Boolean>(false);

const findShow = async () => {
  const { data, error, loading } = await findShowByQuery(route.query.q as string);
  console.log(loading);
  isLoading.value = loading;
  show.value = data;
  showError.value = error?.value?.message;
};

onBeforeMount(async () => await findShow());
watch(route, async () => await findShow());
</script>

<template>
  <main class="p-8">
    <section>
      <div v-if="isLoading" class="max-w-52">
        <ShowCardSkeletonVue />
      </div>

      <div class="text-white">
        <p v-if="showError" class="mx-auto max-w-64 text-center">
          Unfortunately we couldn't find what you are looking for.
        </p>

        <div v-else class="max-w-52">
          <h2 class="text-white text-3xl mb-4">Results:</h2>
          <ShowCardVue :show="show" />
        </div>
      </div>
    </section>
  </main>
</template>
