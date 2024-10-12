<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
 
  styles: {
    type: String,
    required: true,
  },
 
  linkTo: {
    type: String,
    required: true,
  },
  ariaLabel: String
});
</script>

<template>
  <RouterLink
    :to="linkTo"
    :class="`${styles} border-2 rounded-md h-10 px-4 w-fit grid place-items-center transition-all ease-linear duration-150`"
    :aria-label="ariaLabel"
  >
    {{ text }}
  </RouterLink>
</template>
