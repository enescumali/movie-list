<script setup lang="ts">
import type { Genre, ShowListItem, ShowListItemsByGenres } from '@/types/Show';
import ShowListVue from '@/components/Show/ShowList.vue';
import { computed } from 'vue';

const props = defineProps<{
  groups: ShowListItemsByGenres;
}>();

const showListGroupTitles = computed(() => Object.keys(props.groups)) as unknown as Genre[];
</script>
<template>
  <div>
    <section v-for="showListGroupTitle in showListGroupTitles" :key="showListGroupTitle">
      <h2 class="text-white text-3xl mb-6">{{ showListGroupTitle }}</h2>
      <div v-if="groups">
        <ShowListVue :shows="groups[showListGroupTitle] as ShowListItem[]" />
      </div>
    </section>
  </div>
</template>
