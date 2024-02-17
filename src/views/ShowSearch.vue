<script setup lang="ts">
import { type Show } from '@/types/Show';
import { onBeforeMount, ref, watch } from 'vue';
import ShowCardSkeletonVue from '@/components/states/skeletons/ShowCardSkeleton.vue';
import { useRoute } from 'vue-router';
import { findShowByQuery } from '@/services/api';
import ShowCardVue from '@/components/Show/ShowCard.vue';
import ErrorStateVue from '@/components/states/error/ErrorState.vue';
import { DEFAULT_ERROR_MESSAGE } from '@/config';

const route = useRoute();

const show = ref<Show | null>(null);
const errorMessage = ref<string | ''>();
const isLoading = ref<Boolean>(false);

const findShow = async () => {
  const { data, error, loading } = await findShowByQuery(route.query.q as string);

  show.value = data;
  errorMessage.value = error.value ? DEFAULT_ERROR_MESSAGE : ''; // API doesn't return meaningful error messages
  isLoading.value = loading;
};

onBeforeMount(async () => await findShow());
watch(route, async () => await findShow());
</script>

<template>
  <section class="p-8">
    <ShowCardSkeletonVue v-if="isLoading" />
    <ErrorStateVue v-if="errorMessage" :error="errorMessage" />
    <div v-if="show" class="max-w-64">
      <h2 class="text-white text-3xl mb-4">Results:</h2>
      <ShowCardVue :show="show" />
    </div>
  </section>
</template>
