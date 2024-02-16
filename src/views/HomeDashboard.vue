<script setup lang="ts">
import { Genres } from '@/types/Show';
import { defineAsyncComponent } from 'vue';
import ShowCardListSkeletonVue from '@/components/skeletons/ShowCardListSkeleton.vue';

const ShowListByGenre = defineAsyncComponent({
  loader: () => import('../components/ShowListByGenre.vue')
});
</script>

<template>
  <div class="gap-12 flex-col flex">
    <section>
      <h2 class="text-white text-3xl mb-6">Drama</h2>
      <Suspense>
        <ShowListByGenre :genre="Genres.Drama" />

        <template #fallback>
          <ShowCardListSkeletonVue />
        </template>
      </Suspense>
    </section>
    <section>
      <h2 class="text-white text-3xl mb-6">Action</h2>
      <Suspense>
        <ShowListByGenre :genre="Genres.Action" />

        <template #fallback>
          <ShowCardListSkeletonVue />
        </template>
      </Suspense>
    </section>
    <section>
      <h2 class="text-white text-3xl mb-6">Comedy</h2>
      <Suspense>
        <ShowListByGenre :genre="Genres.Comedy" />

        <template #fallback>
          <ShowCardListSkeletonVue />
        </template>
      </Suspense>
    </section>
    <section>
      <h2 class="text-white text-3xl mb-6">Family</h2>
      <Suspense>
        <ShowListByGenre :genre="Genres.Family" />

        <template #fallback>
          <ShowCardListSkeletonVue />
        </template>
      </Suspense>
    </section>
  </div>
</template>
