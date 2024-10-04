<script setup>
import logo from "../assets/images/ndloo-logo.png";
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="z-10 bg-transparent flex items-center justify-between md:w-11/12 mx-auto">
    <RouterLink to="/">
      <img :src="logo" alt="Company logo" />
    </RouterLink>
    <aside class="flex space-x-4">
      <button class="bg-white rounded-md text-primary3 px-4 py-2" aria-label="Sign up">
        Sign up
      </button>
      <button class="bg-transparent border border-white rounded-md px-4 py-2" aria-label="Login">
        Login
      </button>
    </aside>
  </nav>
</template>
