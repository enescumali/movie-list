<script setup lang="ts">
import { Genres } from '@/types/Show';
import { defineAsyncComponent } from 'vue';
import ShowCardListSkeletonVue from '@/components/skeletons/ShowCardListSkeleton.vue';

const ShowListByGenre = defineAsyncComponent({
  loader: () => import('../components/ShowListByGenre.vue')
});
</script>

<template>
  <main>
    <section>
      <h2 class="text-white text-3xl">Drama</h2>
      <Suspense>
        <ShowListByGenre :genre="Genres.Drama" />

        <template #fallback>
          <ShowCardListSkeletonVue />
        </template>
      </Suspense>
    </section>
    <section>
      <h2 class="text-white text-3xl">Actions</h2>
      <Suspense>
        <ShowListByGenre :genre="Genres.Action" />

        <template #fallback>
          <ShowCardListSkeletonVue />
        </template>
      </Suspense>
    </section>
    <section>
      <h2 class="text-white text-3xl">Comedy</h2>
      <Suspense>
        <ShowListByGenre :genre="Genres.Comedy" />

        <template #fallback>
          <ShowCardListSkeletonVue />
        </template>
      </Suspense>
    </section>
    <section>
      <h2 class="text-white text-3xl">Family</h2>
      <Suspense>
        <ShowListByGenre :genre="Genres.Family" />

        <template #fallback>
          <ShowCardListSkeletonVue />
        </template>
      </Suspense>
    </section>
  </main>
</template>
