<script setup>
import logo from "@/assets/images/ndloo-logo.png";
import { RouterLink, RouterView, useRoute } from 'vue-router';
import asideImg from "@/assets/images/hero2.png";
import matchesIcon from "@/assets/icons/lovely.png"
import whoLikesIcon from "@/assets/icons/like.png"
import likesIcon from "@/assets/icons/heart.png"
import messageIcon from "@/assets/icons/messages.png"
import blockedIcon from "@/assets/icons/blocked.png"
import boostIcon from "@/assets/icons/boost.png"
import logoutIcon from "@/assets/icons/logout.png"
import settingsIcon from "@/assets/icons/setting.png"

const route = useRoute();

// Define the navigation items as an array of objects
const navItems = [
  { path: '/dashboard', label: 'Profile', icon: settingsIcon },
  { path: '/dashboard/my-matches', label: 'My Matches', icon: matchesIcon },
  { path: '/dashboard/messages', label: 'Messages', icon: messageIcon },
  { path: '/dashboard/likes', label: 'My Likes', icon: likesIcon },
  { path: '/dashboard/who-likes-me', label: 'Who Likes Me', icon: whoLikesIcon },
  { path: '/dashboard/dislikes', label: 'My Dislikes', icon: whoLikesIcon },
  { path: '/dashboard/blocked', label: 'Blocked Users', icon: blockedIcon },
  { path: '/dashboard/boost-profile', label: 'Boost Profile', icon: boostIcon },
];
</script>

<template>
  <div class="flex min-h-screen font-inter">
    <!-- Sidebar -->
    <aside
      class="w-full md:w-1/4 fixed md:relative bottom-0 md:bottom-auto bg-[#8500288A] bg-blend-overlay bg-opacity-80 bg-no-repeat bg-center bg-cover p-4 flex flex-col justify-between"
      :style="{ backgroundImage: `url(${asideImg})` }">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center mb-6 md:mb-0">
        <img :src="logo" class="hidden md:block md:w-2/5" alt="Ndloo Logo" />
      </RouterLink>

      <!-- Sidebar Links -->
      <nav class="flex flex-col w-full justify-center">
        <div v-for="item in navItems" :key="item.path" class="flex">
          <RouterLink :to="item.path"
            :class="[{ 'bg-[#652436] bg-opacity-60 text-white': route.path === item.path }, 'flex items-center justify-center md:justify-start space-x-2 p-2 rounded hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white']">
            <img :title="item.label" :src="item.icon" :alt="item.label" class="size-full md:w-5 md:h-5" />
            <span class="hidden md:block">{{ item.label }}</span>
          </RouterLink>
        </div>
      </nav>

      <!-- Settings and Logout Buttons -->
      <div class="flex flex-col items-center md:items-start">
        <RouterLink to="/dashboard/settings" :class="[
          { 'bg-[#652436] bg-opacity-60 text-white': route.path === '/dashboard/settings' },
          'flex items-center space-x-2 p-2 hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white'
        ]">
          <img :src="settingsIcon" alt="Settings" class="w-5 h-5" />
          <span class="hidden md:inline">Settings</span>
        </RouterLink>

        <button title="Logout"
          class="mt-2 p-2 hover:translate-x-2 transition-all ease-in-out duration-200 flex items-center space-x-2 text-light hover:text-white">
          <img :src="logoutIcon" alt="Logout" class="size-full md:w-5 md:h-5" />
          <span class="hidden md:block">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="w-full md:w-3/4 p-8 ml-0 md:ml-auto">
      <RouterView />
    </main>
  </div>
</template>
