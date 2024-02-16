<script setup lang="ts">
import type { ShowResponse } from '@/types/Show';
import { onMounted } from 'vue';
import IconRatingVue from './icons/IconRating.vue';

const props = defineProps<{
  show: ShowResponse;
}>();
onMounted(() => {
  console.log(props.show);
});
</script>

<template>
  <a
    class="show-card-container rounded-lg block cursor-pointer"
    @click="$router.push(`/movies/${show.id}`)"
  >
    <div class="flex items-center justify-center rounded-lg">
      <div class="grid max-w-[370px] bg-black bg-slate-100 flex-col rounded-lg">
        <div class="image-container rounded-lg">
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
            <span class="text-slate-400 font-semibold"> {{ show?.season }} </span>
            <div class="font-black text-l flex gap-x-1 items-center text-white">
              <span>{{ show?.rating?.average || '--' }}</span>
              <IconRatingVue />
            </div>

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
.show-card-container {
  background: #000;
  position: relative;
}

.show-card-container:hover img {
  opacity: 0.2;
}

.show-detail {
  bottom: 0%;
  background: var(--primary-gray);
  width: 100%;
}
.show-card-container:hover .show-detail {
  display: grid;
}

.show-card-container:hover .show-summary {
  opacity: 0.5;
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
