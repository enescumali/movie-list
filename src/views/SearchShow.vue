<script setup lang="ts">
import { type Show, type ShowListItem } from '@/types/Show';
import { onBeforeMount, ref, watch } from 'vue';
import ShowCardListSkeletonVue from '@/components/skeletons/ShowCardListSkeleton.vue';
import { useRoute } from 'vue-router';
import { findShowByQuery } from '@/services/api';
import ShowCardVue from '@/components/ShowCard.vue';

const route = useRoute();

const show = ref<ShowListItem[] | null>([]);
const showError = ref<String | ''>();

const findShow = async () => {
  const { data, error } = await findShowByQuery(route.query.q);

  show.value = data;
  showError.value = error?.value?.message;
};

onBeforeMount(async () => findShow);

watch(route, () => {
  console.log(route.query.q);
  findShow();
});
</script>

<template>
  <main class="p-8">
    <section>
      <h2 class="text-white text-3xl">Results</h2>
      <Suspense>
        <div class="text-white">
          <p>results go here</p>
          <p>{{ show?.name }}</p>
          <ShowCardVue :show="show" />
        </div>

        <template #fallback>
          <ShowCardListSkeletonVue />
        </template>
      </Suspense>
    </section>
  </main>
</template>
