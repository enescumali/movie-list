<script setup lang="ts">
import type { ShowDetail } from '@/types/Show';
import ShowRating from './ShowRating.vue';

defineProps<{
  show: ShowDetail;
}>();
</script>

<template>
  <a
    class="show-card-container rounded-lg block cursor-pointer overflow-hidden relative bg-black relative"
    @click="$router.push(`/shows/${show.id}`)"
  >
    <div class="flex items-center justify-center">
      <div class="grid max-w-[370px] flex-col">
        <div class="image-container">
          <img
            :src="`${show.image?.medium}`"
            width="375"
            height="200"
            class="justify-center grid h-80 object-cover"
            :alt="`${show.name}`"
          />
          <div class="show-summary line-clamp-6 text-sm" v-html="`${show?.summary}`"></div>
        </div>

        <div class="group p-6 grid z-10 show-detail gap-4">
          <h2 class="group-hover:underline font-bold sm:text-l line-clamp-2 text-white h-12">
            {{ show?.name }}
          </h2>

          <div class="flex justify-between">
            <span class="text-slate-400 font-semibold"
              >S.{{ show?.season }} - {{ show.episodeName }}</span
            >
            <ShowRating :rating="show?.rating?.average" />

            <!-- <div class="flex flex-col items-end">
              <div class="h-7" />
              <span class="text-3xl font-bold gap-x-2 text-slate-300"> # 8 </span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.show-card-container:hover img {
  opacity: 0.2;
}

.show-detail {
  background: var(--primary-gray);
}

.show-card-container:hover .show-summary {
  opacity: 0.9;
}

.show-summary {
  position: absolute;
  opacity: 0;
  color: white;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  background: rgba(var(--primary-gray), 0.1);
  transition: opacity 0.3s ease-in;
  padding: 1rem;
}
</style>
