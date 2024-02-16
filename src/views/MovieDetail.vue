<script setup lang="ts">
import { getShowById } from '@/services/api';
import type { ShowResponse } from '@/types/Show';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const showId = useRoute().params.id as string; // don't know why vue thinks params.id can also be an array

const show = ref<ShowResponse | null>();
const showError = ref<String | ''>();

onBeforeMount(async () => {
  const { data, error } = await getShowById(showId);

  show.value = data;
  showError.value = error?.value?.message;
});
</script>

<template>
  <div>
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            :src="`${show?.image?.medium}`"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-white text-3xl title-font font-medium mb-1">
              {{ show?.name }}
            </h1>

            <p class="text-white" v-html="show?.summary"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
