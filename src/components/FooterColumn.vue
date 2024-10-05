<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: true,
    default: () => [],
    validator: (val) => val.every(link => 'linkTitle' in link && 'linkTo' in link),
  }
});
</script>

<template>
  <div class="flex flex-col w-fit">
    <h4 class="font-semibold mb-4">{{ header }}</h4>
    <div>
      <RouterLink v-for="(link, index) in links" :key="index" class="block mb-2 hover:underline text-light text-opacity-80 hover:text-opacity-100" :to="link.linkTo">
        {{ link.linkTitle }}
      </RouterLink>
    </div>
  </div>
  
</template>
