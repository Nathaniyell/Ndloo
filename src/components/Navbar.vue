<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from "@/assets/images/ndloo-logo.png";
import { RouterLink } from 'vue-router';
import RouteButton from "./RouteButton.vue";


const isScrolled = ref(false);

// Add a scroll event listener to update the isScrolled state
const handleScroll = () => {
  isScrolled.value = window.scrollY > 70;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'z-10 fixed p-3 md:py-3 md:px-5 transition-all ease-in-out duration-200 left-0 right-0 flex items-center justify-between w-11/12 lg:w-[90%] mx-auto',
      isScrolled ? 'bg-primary3' : 'bg-transparent'
    ]"
  >
    <RouterLink to="/">
      <img :src="logo" class="w-3/5 md:w-3/4" alt="Company logo" />
    </RouterLink>
    <aside class="flex w-2/3 items-center justify-end space-x-2">
      <RouteButton text="Sign up" textColor="text-primary3" bgColor="bg-light" borderColor="border-none" linkTo="signup"
        ariaLabel="Sign Up" hoverTextColor="hover:text-light" hoverBgColor="hover:bg-primary3"
        hoverBorderColor="hover:border-primary3" class="" />
      <RouteButton text="Login" bgColor="bg-transparent" borderColor="border-light border-2" linkTo="login"
        ariaLabel="Login" hoverTextColor="hover:text-primary3" hoverBgColor="hover:bg-light"
        hoverBorderColor="hover:border-light" class="" />
    </aside>
  </nav>
</template>
