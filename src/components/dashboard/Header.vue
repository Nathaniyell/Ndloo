<script setup>
import { useRoute } from 'vue-router';
import FilterButton from './FilterButton.vue';
import { getHeaderText } from "@/data/data"
import { ref, watch } from 'vue';


defineProps({
    toggleFilter: Function,
    showFilter: Boolean
})

const route = useRoute();
const headerText = ref(getHeaderText(route.path));


// Watch for changes to route.path to update headerText dynamically
watch(() => route.path, (newPath) => {
  headerText.value = getHeaderText(newPath);
});




</script>



<template>
    <header class="w-full px-4 h-20 flex items-center justify-between">
      <div>
        <p class="text-[#767676]" v-if="route.path === '/dashboard/'">Good morning,</p>
        <p class="text-dark text-xl font-semibold">{{ headerText }}</p>
      </div>
      <FilterButton v-if="route.path === '/dashboard/'" @click="toggleFilter">Filter</FilterButton>
    </header>
  </template>
  
 