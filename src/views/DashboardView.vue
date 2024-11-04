<script setup>
import { RouterView, useRoute } from "vue-router";
import Sidebar from '@/components/dashboard/Sidebar.vue';
import Header from '@/components/dashboard/Header.vue';
import Filter from '@/components/Filter.vue';
import { onMounted, ref, watch } from "vue";
import { useShowFilterStore } from "@/stores/state";
import bgDesigned from "@/assets/images/bg-designed.png";

const showFilterStore = useShowFilterStore()
const route = useRoute();
const loading = ref(true);

watch(
  () => route.path,
  (newPath) => {
    if (newPath !== '/dashboard/' && showFilterStore.showFilter) {
      showFilterStore.toggleShowFilter();
    }
  }
);

onMounted(() => {
  loading.value = false;
});
</script>

<template>
  <div class="flex min-h-screen overflow-hidden font-inter">
    <Sidebar />
    <main  class="relative w-full md:w-3/4 ml-0 md:ml-auto pb-20 md:pb-0" :class="showFilterStore.showFilter ? '' : 'bg-light'"
    :style="showFilterStore.showFilter && route.path === '/dashboard/' ? { backgroundImage: `url(${bgDesigned})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}">

      <Header :toggleFilter="showFilterStore.toggleShowFilter" />
      <div v-if="!loading">
        <RouterView v-if="!showFilterStore.showFilter" />
        <Filter v-if="showFilterStore.showFilter && route.path === '/dashboard/'"
          :closeFilter="showFilterStore.toggleShowFilter" />
      </div>
    </main>
  </div>
</template>


