<script setup>
  import { computed } from 'vue';
import { useRoute } from 'vue-router';
  
  const props = defineProps({
    item: Object
  });
  
  const route = useRoute();
  const activeClass = computed(() => ({
    'bg-[#652436] bg-opacity-60 text-white': route.path === props.item.path,
    'flex flex-col md:flex-row items-center justify-center md:justify-start space-x-2 p-1 md:p-2 rounded hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white': true
  }));
  </script>



<template>
    <RouterLink :to="item.path" :class="activeClass">
      <img class="w-5 h-5 !text-white"  :src="item.icon" alt="Icon" />
      <span class="hidden md:block">{{ item.label }}</span>
    </RouterLink>
  </template>
  

  