<script setup>
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import Filter from "../Filter.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";

const route = useRoute();
const showFilter = ref(false);
const loading = ref(true);

const toggleFilter = () => {
    showFilter.value = !showFilter.value;
};


function handleLoad() {
  loading.value = false;
}
onMounted(() => {
  window.addEventListener('load', handleLoad);

});

onBeforeUnmount(() => {
  window.removeEventListener('load', handleLoad);

});
</script>


<template>
    <main  class="relative w-full md:w-3/4 ml-0 md:ml-auto pb-20 md:pb-0" :class="showFilter ? '' : 'bg-light'"
    :style="showFilter && route.path === '/dashboard/' ? { backgroundImage: `url(${bgDesigned})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}">
      <Header :toggleFilter="toggleFilter" />
      <div v-if="loading"
        class="inset-0 grid place-content-center min-h-screen items-center justify-center z-50 w-full">
        <!-- Loading Spinner -->
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-primary4"
          role="status"></div>
      </div>
      <div v-if="!loading">
        <RouterView v-if="route.path !== '/dashboard/' || !showFilter" />
        <Filter v-if="showFilter && route.path === '/dashboard/'" :closeFilter="toggleFilter" />
      </div>
    </main>
  </template>
  
  <style scoped>
/* Spinner styling */
.spinner-border {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #D40000;
  /* Spinner color */
  border-radius: 50%;
}
</style>

  