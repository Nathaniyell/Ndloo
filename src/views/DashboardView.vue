<script setup>
import logo from "@/assets/images/ndloo-logo.png";
import { RouterLink, RouterView, useRoute } from 'vue-router';
import asideImg from "@/assets/images/hero2.png";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faHeart, faMessage, faBan, faGear, faRocket } from '@fortawesome/free-solid-svg-icons';

const route = useRoute();

// Define the navigation items as an array of objects
const navItems = [
  { path: '/dashboard/profile', label: 'Profile', icon: faUser },
  { path: '/dashboard/my-matches', label: 'My Matches', icon: faHeart },
  { path: '/dashboard/messages', label: 'Messages', icon: faMessage },
  { path: '/dashboard/likes', label: 'My Likes', icon: faHeart },
  { path: '/dashboard/who-likes-me', label: 'Who Likes Me', icon: faHeart },
  { path: '/dashboard/dislikes', label: 'My Dislikes', icon: faHeart },
  { path: '/dashboard/blocked', label: 'Blocked Users', icon: faBan },
  { path: '/dashboard/boost-profile', label: 'Boost Profile', icon: faRocket },
  { path: '/dashboard/settings', label: 'Settings', icon: faGear },
];
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside
      class="w-1/4 text-white bg-[#850028] bg-opacity-70 bg-no-repeat bg-center bg-cover p-4 flex flex-col space-y-4"
      :style="{ backgroundImage: `url(${asideImg})` }">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center mb-6">
        <img :src="logo" class="w-2/5" alt="Ndloo Logo" />
      </RouterLink>

      <!-- Sidebar Links -->
      <nav>
        <div v-for="item in navItems" :key="item.path">
          <RouterLink
            :to="item.path"
            :class="[{ 'text-red-500 font-bold': route.path === item.path }, 'flex items-center space-x-2 p-2 rounded hover:bg-gray-700']">
            <FontAwesomeIcon :icon="item.icon" class="w-4 h-4" />
            <span>{{ item.label }}</span>
          </RouterLink>
        </div>
      </nav>

      <!-- Logout Button -->
      <button class="mt-auto p-2 rounded hover:bg-gray-700 flex items-center space-x-2">
        <FontAwesomeIcon icon="sign-out-alt" class="w-4 h-4" />
        <span>Logout</span>
      </button>
    </aside>

    <!-- Main Content -->
    <main class="w-3/4 p-8">
      <RouterView />
    </main>
  </div>
</template>
