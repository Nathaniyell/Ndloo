<script setup>
import { useRoute } from 'vue-router';
import FilterButton from './FilterButton.vue';
import { getHeaderText } from "@/data/data"
import { ref, watch } from 'vue';
import { profilePicture } from '@/data/data';


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
      <aside class="flex items-center space-x-3">
      <FilterButton v-if="route.path === '/dashboard/'" @click="toggleFilter" />

      <button @click="route.push('/dashboard/profile')" class=""><img class="h-10 w-10" :src="profilePicture"
              alt="Profile Picture">
          </button>
        </aside>
    </header>
  </template>
  
 