<script setup>



const props = defineProps({
    image: {
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
<div class="flex flex-col space-y-6">
    <img :src="image" alt="title" class="rounded-md shadow-md">
    <h6 class="text-xl font-[550] text-center">{{ title }}</h6>
</div>
</template>