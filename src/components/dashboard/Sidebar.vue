<script setup>
import NavItem from "./NavItem.vue";
import MoreItems from "./MoreItems.vue";
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { logo, moreIcon, settingsIcon, logoutIcon, navItems, moreItems, asideImg } from "@/store/data"; // Import relevant assets
import { useShowMoreStore } from "@/store/state";

const showMoreStore = useShowMoreStore(); 
const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenWidth);
});

const displayedNavItems = computed(() => screenWidth.value >= 768 ? navItems : navItems.slice(0, 4));
const logout = () => {
    // handle logout
};
</script>

<template>
    <aside
        class="w-full z-10 mt-20 md:mt-0 md:w-1/4 fixed bottom-0 md:bottom-auto bg-[#8500288A] bg-blend-overlay bg-opacity-80 bg-no-repeat bg-center bg-cover p-2 md:p-4 flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start md:space-y-6"
        :style="{ backgroundImage: `url(${asideImg})` }">
        <RouterLink to="/">
            <img :src="logo" class="md:w-3/5 hidden md:block mb-4" alt="Ndloo Logo" />
        </RouterLink>

        <nav class="flex justify-around flex-row md:flex-col w-full md:space-y-3 md:justify-start">
            <NavItem v-for="item in displayedNavItems" :key="item.path" :item="item" />

            <button type="button" class="text-light hover:text-white md:hidden" v-if="!showMoreStore.showMore" @click="showMoreStore.toggleShowMore">
            <img class="w-5 h-5 !text-white" :src="moreIcon" alt="Icon" />
            <span class="hidden md:block">More</span>
        </button>
        </nav>

        <MoreItems v-if="showMoreStore.showMore" :navItems="navItems.slice(4, 8)" :moreItems="moreItems" />

       

        <div class="hidden md:flex md:flex-col md:!mt-4">
            <NavItem :item="{ path: '/dashboard/settings', label: 'Settings', icon: settingsIcon }" />

            <button @click="logout" title="Logout"
                class="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-2 p-1 md:p-2 rounded hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white">
                <img class="h-5 w-5" :src="logoutIcon" alt="Logout" /> Logout
            </button>
        </div>
    </aside>
</template>
