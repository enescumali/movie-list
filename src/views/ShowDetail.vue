<script setup lang="ts">
import ShowDetailTemplate from '@/components/Show/ShowDetailTemplate.vue';
import ShowDetailSkeleton from '@/components/states/skeletons/ShowDetailSkeleton.vue';
import { getShowById } from '@/services/api';
import type { Show } from '@/types/Show';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import ErrorStateVue from '@/components/states/error/ErrorState.vue';
import { DEFAULT_ERROR_MESSAGE } from '@/config';

const showId = useRoute().params.id as string; // don't know why vue thinks params.id can also be an array

const show = ref<Show | null>();
const errorMessage = ref<string | ''>();
const isLoading = ref<boolean>(true);

onBeforeMount(async () => {
  const { data, error, loading } = await getShowById(showId);

  show.value = data;
  errorMessage.value = error.value ? DEFAULT_ERROR_MESSAGE : ''; // API doesn't return meaningful error messages
  isLoading.value = loading;
});
</script>

<template>
  <div class="container px-5 py-12 lg:w-4/5 mx-auto">
    <ShowDetailSkeleton v-if="isLoading" />
    <ErrorStateVue v-if="errorMessage" :error="errorMessage" />
    <ShowDetailTemplate v-if="show" :show="show" />
  </div>
</template>
