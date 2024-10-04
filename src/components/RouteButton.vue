<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    default: 'text-white',
  },
  bgColor: {
    type: String,
    default: 'bg-transparent',
  },
  borderColor: {
    type: String,
    default: 'border-transparent',
  },
  linkTo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    :to="linkTo"
    :class="`${bgColor} ${borderColor} ${textColor} border rounded-md px-4 py-2`"
    aria-label="Button link"
  >
    {{ text }}
  </RouterLink>
</template>
