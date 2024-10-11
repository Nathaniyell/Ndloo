<script setup>
import logo from "@/assets/images/ndloo-logo.png";
import { RouterLink, RouterView, useRoute } from 'vue-router';
import asideImg from "@/assets/images/hero2.png";
import matchesIcon from "@/assets/icons/lovely.png"
import whoLikesIcon from "@/assets/icons/like.png"
import disklikesIcon from "@/assets/icons/dislike.png"
import likesIcon from "@/assets/icons/heart.png"
import messageIcon from "@/assets/icons/messages.png"
import blockedIcon from "@/assets/icons/blocked.png"
import boostIcon from "@/assets/icons/boost.png"
import logoutIcon from "@/assets/icons/logout.png"
import settingsIcon from "@/assets/icons/setting.png"

const route = useRoute();

// Define the navigation items as an array of objects
const navItems = [
  // { path: '/dashboard', label: 'Profile', icon: settingsIcon },
  { path: '/dashboard/', label: 'My Matches', icon: matchesIcon },
  { path: '/dashboard/messages', label: 'Messages', icon: messageIcon },
  { path: '/dashboard/likes', label: 'My Likes', icon: likesIcon },
  { path: '/dashboard/who-likes-me', label: 'Who Likes Me', icon: whoLikesIcon },
  { path: '/dashboard/dislikes', label: 'My Dislikes', icon: disklikesIcon },
  { path: '/dashboard/blocked', label: 'Blocked Users', icon: blockedIcon },
  { path: '/dashboard/boost-profile', label: 'Boost Profile', icon: boostIcon },
  // { path: '/dashboard/settings', label: 'Settings', icon: settingsIcon },
];
</script>

<template>
  <div class="flex min-h-screen overflow-hidden font-inter">
    <!-- Sidebar -->
    <aside
      class="w-full mt-20 md:mt-0 md:w-1/4 fixed md:relative bottom-0 md:bottom-auto bg-[#8500288A] bg-blend-overlay bg-opacity-80 bg-no-repeat bg-center bg-cover p-2 md:p-4 flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start md:space-y-6"
      :style="{ backgroundImage: `url(${asideImg})` }">
      <!-- Logo -->
      <RouterLink to="/" class="">
        <img :src="logo" class="md:w-3/5 hidden md:block mb-8" alt="Ndloo Logo" />
      </RouterLink>

      <!-- Sidebar Links -->
      <nav class="flex justify-between flex-row md:flex-col w-full md:space-y-3 md:justify-start">
        <div v-for="item in navItems" :key="item.path" class="flex">
          <RouterLink :to="item.path"
            :class="[{ 'bg-[#652436] bg-opacity-60 text-white': route.path === item.path }, 'flex items-center justify-center md:justify-start space-x-2 p-1 md:p-2 rounded hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white']">
            <img :title="item.label" :src="item.icon" :alt="item.label" class="w-5 h-5" />
            <span class="hidden md:block">{{ item.label }}</span>
          </RouterLink>
        </div>
      </nav>

      <div class="hidden md:flex md:flex-col md:!mt-10">
        <RouterLink to="/dashboard/settings" :class="[
          { 'bg-[#652436] bg-opacity-60 text-white': route.path === '/dashboard/settings' },
          'flex items-center md:space-x-2 p-2 hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white'
        ]">
          <img :src="settingsIcon" alt="Settings" class="md:w-5 md:h-5" />
          <span class="hidden md:block">Settings</span>
        </RouterLink>

        <button title="Logout"
          class="mt-auto p-2 hover:translate-x-2 transition-all ease-in-out duration-200 flex justify-center md:justify-start items-center md:space-x-2 text-light hover:text-white">
          <img :src="logoutIcon" alt="Logout" class="md:w-5 md:h-5" />
          <span class="hidden md:block">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="w-full md:w-3/4 -z-10 p-4 md:p-8 ml-0 md:ml-auto">
      <RouterView />
    </main>
  </div>
</template>
