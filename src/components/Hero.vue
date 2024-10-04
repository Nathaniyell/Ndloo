<script setup>
import hero1 from "../assets/images/hero1.png"
import hero2 from "../assets/images/hero2.png"
import hero3 from "../assets/images/hero3.png"
import RouteButton from "./RouteButton.vue"
</script>

<template>
<div class="-z-10 relative">
    <img class="object-contain md:object-cover" :src="hero1" alt="Hero Image" />
    <div class="absolute bottom-16 left-0 right-0 md:w-11/12 mx-auto flex flex-col space-y-6 text-light">
        <h1 class="text-4xl md:text-6xl">Find your spark. <br>Let love Ignite</h1>
        <p>Explore profiles and find your love story.</p>
        <RouteButton 
        text="Get started"
    textColor="text-light"
    bgColor="bg-primary3"
    borderColor="border-none"
    linkTo="/"
    ariaLabel="Get Started"
        />
    </div>
</div>
</template>

