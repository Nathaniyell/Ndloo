<script setup>
import logo from "../assets/images/ndloo-logo.png";
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="z-10 absolute top-8 left-0 right-0 bg-dark flex items-center justify-between md:w-11/12 mx-auto">
    <RouterLink to="/">
      <img :src="logo" class="w-1/2" alt="Company logo" />
    </RouterLink>
    <aside class="flex space-x-4">
      <RouterLink to="/sign-up" class="bg-white rounded-md text-primary3 px-4 py-2" aria-label="Sign up">
        Sign up
      </RouterLink>
      <RouterLink to="/login" class="bg-transparent border text-white border-white rounded-md px-4 py-2" aria-label="Login">
        Login
      </RouterLink>
    </aside>
  </nav>
</template>
