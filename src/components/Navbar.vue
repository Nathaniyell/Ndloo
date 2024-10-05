<script setup>
import logo from "../assets/images/ndloo-logo.png";
import { RouterLink } from 'vue-router';
import RouteButton from "./RouteButton.vue"
</script>

<template>
  <nav class="z-10 absolute top-10 left-0 right-0 flex items-center justify-between w-11/12 mx-auto">
    <RouterLink to="/">
      <img :src="logo" class="w-3/4" alt="Company logo" />
    </RouterLink>
    <aside class="flex space-x-2 md:space-x-4">
             <RouteButton
    text="Sign up"
    textColor="text-primary3"
    bgColor="bg-light"
    borderColor="border-none"
    linkTo="sign-up"
    ariaLabel="Sign Up"
    hoverTextColor="hover:text-light"
    hoverBgColor="hover:bg-primary3"
    hoverBorderColor="hover:border-primary3"
  />
      <RouteButton
    text="Login"
    bgColor="bg-transparent"
    borderColor="border-light border-2"
    linkTo="login"
    ariaLabel="Login"
      hoverTextColor="hover:text-primary3"
    hoverBgColor="hover:bg-light"
       hoverBorderColor="hover:border-light"
       class="md"
  />
   
    </aside>
  </nav>
</template>
