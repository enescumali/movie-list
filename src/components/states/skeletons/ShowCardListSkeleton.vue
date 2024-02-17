<script setup lang="ts">
import ShowCardSkeletonVue from './ShowCardSkeleton.vue';
</script>
<template>
  <section
    class="animate-pulse w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-6 mt-10 mb-5"
  >
    <ShowCardSkeletonVue />
    <ShowCardSkeletonVue />
    <ShowCardSkeletonVue />
    <ShowCardSkeletonVue />
    <ShowCardSkeletonVue />
  </section>
</template>
<style scoped>
.show-card-container {
  background: #000;
  position: relative;
}

.image-container {
  background-color: #333;
}
img {
  opacity: 0;
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
