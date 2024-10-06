<script setup>
import { defineProps } from 'vue';


const props = defineProps({
    icon: {
    type: [String, Object],
    required: true,
  },
  title:{
    type: String,
    required: true
  }
})
</script>

<template>
<div class="flex flex-col space-y-6 items-center justify-center p-8 bg-white rounded-md shadow">
    <img :src="icon" alt="title" class="w-1/3 mx-auto">
    <h6 class="text-xl font-[550] text-center">{{ title }}</h6>
</div>
</template>