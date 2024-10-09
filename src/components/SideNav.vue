<script setup>
import logo from "@/assets/images/ndloo-logo.png";
import { RouterLink, RouterView } from 'vue-router';
import RouteButton from "./RouteButton.vue";
import asideImg from "@/assets/images/hero2.png"
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-1/4 text-white bg-[#85002882] bg-opacity-50 bg-no-repeat bg-origin-border bg-center bg-cover p-4 flex flex-col space-y-4"  :style="{ backgroundImage: `url(${asideImg})` }">
      <RouterLink to="/" class="flex items-center mb-6">
        <img :src="logo" class="w-3/5 md:w-3/4" alt="Company logo" />
      </RouterLink>
    
      <!-- Navigation Buttons -->
      <RouteButton 
        text="Home" 
        linkTo="/" 
        textColor="text-white" 
        bgColor="bg-transparent" 
        borderColor="border-white border-2" 
        class="w-full"
      />
      <RouteButton 
        text="Profile" 
        linkTo="/profile" 
        textColor="text-white" 
        bgColor="bg-transparent" 
        borderColor="border-white border-2" 
        class="w-full"
      />
      <RouteButton 
        text="Settings" 
        linkTo="/settings" 
        textColor="text-white" 
        bgColor="bg-transparent" 
        borderColor="border-white border-2" 
        class="w-full"
      />
      <!-- Add more buttons as needed -->
    </aside>

    <!-- Main Content -->
    <main class="w-3/4 p-8">
      <RouterView />
    </main>
  </div>
</template>
