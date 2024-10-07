<script setup>
import { RouterView, useRoute } from 'vue-router';
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();
</script>

<template>
  <div class="font-sans">
    <Navbar v-if="route.meta.showNavbarAndFooter" />
    <RouterView />
    <Footer v-if="route.meta.showNavbarAndFooter" />
  </div>
</template>
