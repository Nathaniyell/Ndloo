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
    default: 'text-light',
  },
  bgColor: {
    type: String,
    default: 'bg-transparent',
  },
  borderColor: {
    type: String,
    default: 'border-transparent',
  },
  hoverBgColor:String,
  
  hoverTextColor: String,
   
  hoverBorderColor: String,
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
    :class="`${bgColor} ${borderColor} ${textColor} ${hoverBgColor} ${hoverBorderColor} ${hoverTextColor} border rounded-md h-10 px-4 w-fit grid place-items-center transition-all ease-linear duration-150`"
    :aria-label="ariaLabel"
  >
    {{ text }}
  </RouterLink>
</template>
