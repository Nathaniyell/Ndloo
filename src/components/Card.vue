<script setup>
import { defineProps } from 'vue';


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

</template>