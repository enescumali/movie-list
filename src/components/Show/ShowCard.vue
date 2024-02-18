<script setup lang="ts">
import type { ShowCard } from '@/types/Show';
import ShowRating from '../ShowRating.vue';

defineProps<{
  show: ShowCard;
}>();
</script>

<template>
  <a
    class="show-card-container rounded-lg block cursor-pointer overflow-hidden relative bg-black relative"
    @click="$router.push(`/shows/${show.id}`)"
  >
    <div class="flex items-center justify-center">
      <div class="grid max-w-[370px] flex-col">
        <div class="image-container relative overflow-hidden">
          <span
            v-if="show.ranking"
            class="text-3xl font-bold gap-x-2 text-black-600 absolute z-10 top-0 right-0 p-2 bg-amber-400"
          >
            # {{ show.ranking }}</span
          >
          <img
            :src="`${show.image?.medium}`"
            width="375"
            height="200"
            class="justify-center grid h-80 object-cover"
            :alt="`${show.name}`"
          />
          <div
            v-if="show.summary"
            class="show-summary line-clamp-6 text-sm z-20 absolute text-white text-l opacity-0 top-0 left-0 bottom-0 overflow-hidden w-full p-6"
            v-html="`${show?.summary}`"
          ></div>
        </div>

        <div class="group p-6 grid z-10 show-detail gap-4">
          <h2 class="group-hover:underline font-bold sm:text-l line-clamp-2 text-white h-12">
            {{ show?.name }}
          </h2>

          <div class="flex justify-between items-end">
            <div>
              <span v-if="show?.season" class="text-slate-400 font-semibold line-clamp-1"
                >Season: {{ show.season }}</span
              >
              <span v-if="show?.episodeName" class="text-slate-400 font-semibold line-clamp-1">{{
                show.episodeName
              }}</span>

              <span v-if="show?.airtime" class="text-slate-200 font-semibold line-clamp-1">{{
                show.airtime
              }}</span>
            </div>

            <ShowRating :rating="show?.rating?.average" />
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.show-detail {
  background: var(--primary-gray);
}

.show-card-container:hover .show-summary {
  opacity: 1;
}

.show-card-container:hover img {
  opacity: 0.6;
}

.show-summary {
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s ease-in;
}
</style>
