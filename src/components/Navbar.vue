<script setup>
import logo from "../assets/images/ndloo-logo.png";
import { RouterLink } from 'vue-router';
import RouteButton from "../components/RouteButton.vue"
</script>

<template>
  <nav class="z-10 absolute top-8 left-0 right-0 flex items-center justify-between md:w-11/12 mx-auto">
    <RouterLink to="/">
      <img :src="logo" class="w-3/4" alt="Company logo" />
    </RouterLink>
    <aside class="flex space-x-4">
             <RouteButton
    text="Sign up"
    textColor="text-primary3"
    bgColor="bg-white"
    borderColor="border-none"
    linkTo="/sign-up"
  />
      <RouteButton
    text="Login"
    textColor="text-white"
    bgColor="bg-transparent"
    borderColor="border-white"
    linkTo="/login"
  />
   
    </aside>
  </nav>
</template>
