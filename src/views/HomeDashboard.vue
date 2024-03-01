<script setup lang="ts">
import { type ShowListGroups as ShowListGroupsType } from '@/types/Show';
import { inject, onBeforeMount, ref, watch } from 'vue';
import type { CountryProvider } from '@/context/countryProvider';
import { getShowsByGenre } from '@/services/api';
import ShowCardListSkeleton from '@/components/states/skeletons/ShowCardListSkeleton.vue';
import ErrorStateVue from '@/components/states/error/ErrorState.vue';
import ShowListGroups from '@/components/Show/ShowListGroups.vue';
import { Genres } from '@/config';
import EmptyStateVue from '@/components/states/empty/EmptyState.vue';

const { country } = inject('country') as CountryProvider;

const showListGroups = ref<ShowListGroupsType[] | []>([]);

const errorMessage = ref<string | ''>();
const isLoading = ref<boolean>(true);

const fetchShowsByGenre = async () => {
  const { data, error, loading } = await getShowsByGenre(Object.values(Genres), country.value);

  showListGroups.value = data;

  errorMessage.value = error?.value?.message;
  isLoading.value = loading;
};

onBeforeMount(async () => {
  fetchShowsByGenre();
});

watch(
  () => country.value,
  () => {
    fetchShowsByGenre();
  }
);
</script>

<template>
  <div class="gap-12 flex-col flex">
    <ShowCardListSkeleton v-if="isLoading" />
    <ErrorStateVue v-if="errorMessage" :error="errorMessage" />
    <EmptyStateVue v-if="showListGroups.length === 0" />
    <ShowListGroups v-else :groups="showListGroups" />
  </div>
</template>
