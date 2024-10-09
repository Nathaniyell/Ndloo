<script setup>
import logo from "@/assets/images/ndloo-logo.png";
import { RouterLink } from 'vue-router';
import RouteButton from "./RouteButton.vue"
</script>

<template>

    <aside class="flex w-2/3 items-center justify-end space-x-2">
        <RouterLink to="/">
          <img :src="logo" class="w-3/5 md:w-3/4" alt="Company logo" />
        </RouterLink>


    </aside>

</template>
