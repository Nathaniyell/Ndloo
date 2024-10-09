<script setup>
import logo from "@/assets/images/ndloo-logo.png";
import { RouterLink, RouterView } from 'vue-router';
import RouteButton from "@/components/RouteButton.vue";
import asideImg from "@/assets/images/hero2.png"
</script>

<template>
    <div class="flex min-h-screen">
        <!-- Sidebar -->
        <aside
            class="w-1/4 text-white !bg-[#85002882] bg-opacity-50 bg-no-repeat bg-origin-border bg-center bg-cover p-4 flex flex-col space-y-4"
            :style="{ backgroundImage: `url(${asideImg})` }">
            <RouterLink to="/" class="flex items-center mb-6">
                <img :src="logo" class="w-3/5 md:w-3/4" alt="Company logo" />
            </RouterLink>

            <RouterLink to="/dashboard/profile" class="p-2 rounded hover:bg-gray-700">Profile</RouterLink>
            <RouterLink to="/dashboard/my-matches" class="p-2 rounded hover:bg-gray-700">My Matches</RouterLink>
            <RouterLink to="/dashboard/messages" class="p-2 rounded hover:bg-gray-700">Messages</RouterLink>
            <RouterLink to="/dashboard/likes" class="p-2 rounded hover:bg-gray-700">My likes</RouterLink>
            <RouterLink to="/dashboard/who-likes-me" class="p-2 rounded hover:bg-gray-700"> Who likes me
            </RouterLink>
            <RouterLink to="/dashboard/dislikes" class="p-2 rounded hover:bg-gray-700"> My dislike</RouterLink>
            <RouterLink to="/dashboard/blocked" class="p-2 rounded hover:bg-gray-700"> Blocked users</RouterLink>
            <RouterLink to="/dashboard/boost-profile" class="p-2 rounded hover:bg-gray-700">Boost Profile</RouterLink>
            <RouterLink to="/dashboard/settings" class="p-2 rounded hover:bg-gray-700">Settings</RouterLink>
            <button class="block self-start justify-end">Logout</button>





        </aside>

        <!-- Main Content -->
        <main class="w-3/4 p-8">
            <RouterView />
        </main>
    </div>
</template>
