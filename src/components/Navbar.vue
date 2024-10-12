<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from "@/assets/images/ndloo-logo.png";
import logo2 from "@/assets/images/red-logo.png";
import { RouterLink } from 'vue-router';
import RouteButton from "./RouteButton.vue";


const isScrolled = ref(false);

// Add a scroll event listener to update the isScrolled state
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    :class="['z-10 fixed h-20 w-full overflow-x-hidden flex items-center transition-all ease-in-out duration-200 left-0 right-0', isScrolled ? 'bg-white' : 'bg-transparent']">
    <nav :class="[
      'flex items-center justify-between w-11/12 lg:w-[90%] mx-auto'
    ]">
      <RouterLink to="/">
        <img :src="isScrolled ? logo2 : logo" class="w-3/5 md:w-3/4" alt="Company logo" />
      </RouterLink>
      <aside class="flex w-2/3 items-center justify-end space-x-2">
        <RouteButton text="Sign up"
          :styles="[isScrolled ? 'bg-primary3 border-primary3 text-white hover:bg-transparent hover:text-primary3 hover:border-primary3 ' : 'border-white bg-white text-primary3 hover:text-white hover:bg-primary3 hover:border-primary3']"
          linkTo="signup" ariaLabel="Sign Up" />
        <RouteButton text="Login" linkTo="login"
          :styles="[isScrolled ? 'border-primary3 text-primary3 hover:text-white hover:bg-primary3 hover:border-primary3 ' : 'border-white bg-transparent text-white hover:bg-white hover:text-primary3']"
          ariaLabel="Login" />
      </aside>
    </nav>
  </header>
</template>
