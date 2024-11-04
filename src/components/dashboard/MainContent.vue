<script setup>
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import Filter from "../Filter.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useShowFilterStore } from "@/stores/state";
import LoadingSpinner from "../loading-spinners/LoadingSpinner.vue";

const showFilterStore = useShowFilterStore()
const route = useRoute();
const loading = ref(true);



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
  <main class="relative w-full md:w-3/4 ml-0 md:ml-auto pb-20 md:pb-0"
    :class="showFilterStore.showFilter ? '' : 'bg-light'"
    :style="showFilterStore.showFilter && route.path === '/dashboard/' ? { backgroundImage: `url(${bgDesigned})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}">
    <Header :toggleFilter="showFilterStore.toggleShowFilter" />
    <!-- <LoadingSpinner :loading="loading" /> -->
    <div v-if="!loading">
      <RouterView v-if="route.path !== '/dashboard/' || !showFilterStore.showFilter" />
      <Filter v-if="showFilterStore.showFilter && route.path === '/dashboard/'"
        :closeFilter="showFilterStore.toggleShowFilter" />
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