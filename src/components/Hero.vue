<script setup>
import hero1 from "../assets/images/hero1.png"
import hero2 from "../assets/images/hero2.png"
import hero3 from "../assets/images/hero3.png"
</script>

<template>
<div class="-z-10 relative">
    <img :src="hero1" alt="Hero Image" />
    <div class="absolute bottom-8 md:w-11/12 mx-auto text-light">
        <h1>Find your spark. <br>Let love Ignite</h1>
        <p>Explore profiles and find your love story.</p>
        <button class="bg-primary3"></button>
    </div>
</div>
</template>

