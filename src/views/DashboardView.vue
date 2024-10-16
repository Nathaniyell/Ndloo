<script setup>
import logo from "@/assets/images/ndloo-logo.png";
import { RouterLink, RouterView, useRoute } from 'vue-router';
import asideImg from "@/assets/images/hero2.png";
import matchesIcon from "@/assets/icons/lovely.png";
import walletIcon from "@/assets/icons/wallet-money.svg";
import lockIcon from "@/assets/icons/lock.svg";
import diamondIcon from "@/assets/icons/diamonds.svg";
import smsIcon from "@/assets/icons/sms-edit.svg";
import whoLikesIcon from "@/assets/icons/like.png";
import disklikesIcon from "@/assets/icons/dislike.png";
import likesIcon from "@/assets/icons/heart.png";
import messageIcon from "@/assets/icons/messages.png";
import blockedIcon from "@/assets/icons/blocked.png";
import boostIcon from "@/assets/icons/boost.png";
import logoutIcon from "@/assets/icons/logout.png";
import settingsIcon from "@/assets/icons/setting.png";
import profilePicture from "@/assets/images/profile-pics.png";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import router from "@/router";
import Filter from "@/components/Filter.vue";
import bgDesigned from "@/assets/images/bg-designed.png";


const route = useRoute();
const loading = ref(true);
const showFilter = ref(false);
const showMore = ref(false);

const screenWidth = ref(window.innerWidth);

// Update screen width on resize
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('load', handleLoad);
  window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('load', handleLoad);
  window.removeEventListener('resize', updateScreenWidth);
});

function handleLoad() {
  loading.value = false;
}


const navItems = [
  { path: '/dashboard/', label: 'My Matches', icon: matchesIcon },
  { path: '/dashboard/messages', label: 'Messages', icon: messageIcon },
  { path: '/dashboard/likes', label: 'My Likes', icon: likesIcon },
  { path: '/dashboard/who-likes-me', label: 'Who Likes Me', icon: whoLikesIcon },
  { path: '/dashboard/dislikes', label: 'My Dislikes', icon: disklikesIcon },
  { path: '/dashboard/blocked', label: 'Blocked Users', icon: blockedIcon },
  { path: '/dashboard/boost-profile', label: 'Boost Profile', icon: boostIcon },
];

const moreItems = [
  { path: '', label: 'Upgrade', icon: diamondIcon },
  { path: '', label: 'Wallet', icon: walletIcon },
  { path: '', label: 'Settings', icon: settingsIcon },
  { path: '', label: 'Change Email', icon: smsIcon },
  { path: '', label: 'Change Password', icon: lockIcon },
]

const setShowFilter = () => {
  showFilter.value = !showFilter.value;
};
const setShowMore = () => {
  showMore.value = !showMore.value;
};

const getHeaderText = (path) => {
  switch (path) {
    case "/dashboard/likes": return "My Likes";
    case "/dashboard/who-likes-me": return "Who Likes Me";
    case "/dashboard/blocked": return "Blocked Users";
    case "/dashboard/settings": return "Settings";
    case "/dashboard/profile": return "Profile";
    case "/dashboard/dislikes": return "My Dislikes";
    case "/dashboard/boost-profile": return "Boost Profile";
    default: return "Welcome Back, Virtue";
  }
};

const displayedNavItems = computed(() => {
  return screenWidth.value >= 768 ? navItems : navItems.slice(0, 4);
});


const headerText = ref(getHeaderText(route.path));

// Watch for changes to route.path to update headerText dynamically
watch(() => route.path, (newPath) => {
  headerText.value = getHeaderText(newPath);
});
</script>
<template>
  <div class="flex min-h-screen overflow-hidden font-inter">
    <!-- Sidebar -->
    <aside
      class="w-full z-10 mt-20 md:mt-0 md:w-1/4 fixed bottom-0 md:bottom-auto bg-[#8500288A] bg-blend-overlay bg-opacity-80 bg-no-repeat bg-center bg-cover p-2 md:p-4 flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start md:space-y-6"
      :style="{ backgroundImage: `url(${asideImg})` }">
      <!-- Logo -->
      <RouterLink to="/">
        <img :src="logo" class="md:w-3/5 hidden md:block mb-4" alt="Ndloo Logo" />
      </RouterLink>

      <!-- Sidebar Links -->
      <nav class="flex justify-between flex-row md:flex-col w-full md:space-y-3 md:justify-start">
        <div v-for="item in displayedNavItems" :key="item.path" class="flex">
          <RouterLink :to="item.path"
            :class="[{ 'bg-[#652436] bg-opacity-60 text-white': route.path === item.path }, 'flex flex-col md:flex-row items-center justify-center md:justify-start space-x-2 p-1 md:p-2 rounded hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white']">
            <img :title="item.label" :src="item.icon" :alt="item.label" class="w-5 h-5" />
            <span class="hidden md:block">{{ item.label }}</span>
          </RouterLink>
        </div>

        <div v-show="showMore"
          class="flex bg-black h-screen w-full left-0 overflow-y-scroll absolute bottom-0 flex-col p-4 gap-6 md:hidden">
          <section class="w-full flex items-center justify-between">
            <h4 class="text-white text-xl">More</h4>
            <button
            @click="setShowMore"
              class="bg-white text-primary3 grid place-items-center text-center text-2xl font-bold h-7 w-8 rounded-full">x</button>
          </section>
          <section class="w-full flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="bg-light rounded-full h-10 w-10"></div>
              <div>
                <h4 class="text-light text-xl mb-1">Virtue Andrew</h4>
                <p class="text-[#767676]">lorem@mail.com</p>
              </div>
            </div>
            <button class="text-white"><svg fill="#fff" width="25px" height="25px" viewBox="0 0 256 256" id="Flat"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M96,212a4,4,0,0,1-2.82861-6.82837L170.34326,128,93.17139,50.82837a4.00009,4.00009,0,0,1,5.65722-5.65674l80,80a4,4,0,0,1,0,5.65674l-80,80A3.98805,3.98805,0,0,1,96,212Z" />
              </svg></button>
          </section>
          <div v-for="item in navItems.slice(4, 8)" :key="item.path">
            <RouterLink @click="setShowMore" :to="item.path"
              :class="[{ 'bg-[#652436] bg-opacity-60 text-white': route.path === item.path }, 'flex items-center justify-start space-x-2 p-1 rounded hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white']">
              <img :title="item.label" :src="item.icon" :alt="item.label" class="w-5 h-5" />
              <span class="">{{ item.label }}</span>
            </RouterLink>
          </div>
          <div v-for="(item, index) in moreItems" :key="index">
            <RouterLink @click="setShowMore" :to="item.path"
              :class="[{ 'bg-[#652436] bg-opacity-60 text-white': route.path === item.path }, 'flex items-center justify-start space-x-2 p-1 rounded hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white']">
              <img :title="item.label" :src="item.icon" :alt="item.label" class="w-5 h-5" />
              <span class="">{{ item.label }}</span>
            </RouterLink>
          </div>
          <button title="Logout"
            class="flex items-center justify-start space-x-2 p-1 rounded hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white">
            <img :src="logoutIcon" alt="Logout" class="w-5 h-5" />
            <span class="">Logout</span>
          </button>

        </div>
        <button @click="setShowMore" v-show="screenWidth < 768" title="More"
          class="mt-auto p-2 hover:translate-x-2 transition-all ease-in-out duration-200 w-fit flex flex-col md:flex-row justify-center md:justify-start items-center md:space-x-2 text-light hover:text-white">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.97"
              d="M16.69 2.5H8.31C4.67 2.5 2.5 4.67 2.5 8.31V16.68C2.5 20.33 4.67 22.5 8.31 22.5H16.68C20.32 22.5 22.49 20.33 22.49 16.69V8.31C22.5 4.67 20.33 2.5 16.69 2.5ZM8.81 16.81C8.09 16.81 7.5 16.22 7.5 15.5C7.5 14.78 8.09 14.19 8.81 14.19C9.53 14.19 10.12 14.78 10.12 15.5C10.12 16.22 9.53 16.81 8.81 16.81ZM12.5 10.81C11.78 10.81 11.19 10.22 11.19 9.5C11.19 8.78 11.78 8.19 12.5 8.19C13.22 8.19 13.81 8.78 13.81 9.5C13.81 10.22 13.22 10.81 12.5 10.81ZM16.19 16.81C15.47 16.81 14.88 16.22 14.88 15.5C14.88 14.78 15.47 14.19 16.19 14.19C16.91 14.19 17.5 14.78 17.5 15.5C17.5 16.22 16.91 16.81 16.19 16.81Z"
              fill="#fff" />
          </svg>
          <span class="hidden md:block">More</span>
        </button>
      </nav>

      <div class="hidden md:flex md:flex-col md:!mt-4">
        <RouterLink to="/dashboard/settings"
          :class="[{ 'bg-[#652436] bg-opacity-60 text-white': route.path === '/dashboard/settings' }, 'flex items-center md:space-x-2 p-2 hover:translate-x-2 transition-all ease-in-out duration-200 text-light hover:text-white']">
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
    <main class="relative w-full md:w-3/4 ml-0 md:ml-auto pb-20 md:pb-0" :class="showFilter ? '' : 'bg-light'"
      :style="showFilter && route.path === '/dashboard/' ? { backgroundImage: `url(${bgDesigned})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}">
      <div v-if="loading"
        class="inset-0 grid place-content-center min-h-screen items-center justify-center z-50 w-full">
        <!-- Loading Spinner -->
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-primary4"
          role="status"></div>
      </div>

      <header class="w-full px-4 h-20 flex items-center justify-between">
        <div>
          <p v-if="route.path === '/dashboard/'" class="text-[#767676]">Good morning,</p>
          <p class="text-dark text-xl font-semibold">{{ headerText }}</p>
        </div>
        <aside class="flex items-center space-x-3">
          <button v-show="route.path === '/dashboard/'" @click="setShowFilter" class="">
            <svg width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32.8533 11.6783C32.2483 11.5316 31.6066 11.4583 30.9466 11.4583C26.1433 11.4583 22.2383 15.3633 22.2383 20.1666C22.2383 21.7983 22.6966 23.3383 23.5033 24.6583C24.1816 25.7949 25.1166 26.7666 26.2533 27.4633C27.6099 28.3616 29.2233 28.8749 30.9466 28.8749C34.1366 28.8749 36.905 27.1699 38.4083 24.6583C39.215 23.3383 39.6549 21.7983 39.6549 20.1666C39.6549 16.0233 36.7583 12.5399 32.8533 11.6783ZM34.5216 19.3783L30.0666 23.8333C29.9016 23.9983 29.5533 24.1633 29.3149 24.1999L27.6099 24.4383C26.9866 24.5299 26.5649 24.0899 26.6566 23.4849L26.8949 21.7799C26.9316 21.5416 27.0966 21.2116 27.2616 21.0283L31.075 17.2149L31.7166 16.5733C32.4866 15.8033 33.3849 15.4366 34.5033 16.5733C35.6216 17.7099 35.2916 18.6083 34.5216 19.3783Z"
                fill="#585858" />
              <path
                d="M37.73 7.37008V9.13008C37.73 9.88175 36.8684 10.3401 36.19 9.99175C35.3467 9.55175 34.4484 9.22175 33.495 9.00175C32.6884 8.80008 31.8267 8.70841 30.9467 8.70841C24.6217 8.70841 19.4884 13.8417 19.4884 20.1667C19.4884 22.2567 20.0567 24.3101 21.1384 26.0701C22.055 27.6101 23.3384 28.8934 24.7317 29.7551C25.0434 29.9567 25.3734 30.1401 25.685 30.3234C25.9967 30.4884 26.2167 30.8184 26.2167 31.1667V34.9617C26.2167 36.0801 25.4834 37.5651 24.5667 38.1151L22 39.7834C19.6167 41.2684 16.335 39.6001 16.335 36.6301V26.8217C16.335 25.5201 15.6017 23.8517 14.8684 22.9351L7.92002 15.5284C7.00335 14.5934 6.27002 12.9251 6.27002 11.8251V7.55341C6.27002 5.33508 7.92002 3.66675 9.91835 3.66675H34.0817C36.08 3.66675 37.73 5.33508 37.73 7.37008Z"
                fill="#585858" />
            </svg>
          </button>
          <button @click="router.push('/dashboard/profile')" class=""><img class="h-10 w-10" :src="profilePicture"
              alt="Profile Picture">
          </button>
        </aside>
      </header>
      <div v-if="!loading">
        <RouterView v-if="route.path !== '/dashboard/' || !showFilter" />
        <Filter v-if="showFilter && route.path === '/dashboard/'" :closeFilter="setShowFilter" />
      </div>
    </main>
  </div>
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