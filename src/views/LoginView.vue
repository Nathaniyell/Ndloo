<script setup>
import { ref } from "vue"
import logo from "@/assets/images/ndloo-logo.png";
import sectionImg from "@/assets/images/hero2.png"

const loginFormData = ref({
    email: "",
    password: ""
})

const loginFormSubmitHandler = () => {
    console.log(loginFormData)
}
</script>

<template>

    <main class="font-inter md:flex items-center py-20 px-4 md:py-0 md:px-0 h-full justify-center md:justify-between bg-yellow-600">
        <div class="hidden text-white bg-primary3 mb-16 bg-blend-overlay bg-no-repeat md:grid place-items-center bg-cover bg-center md:h-screen w-1/2"
        :style="{ backgroundImage: `url(${sectionImg})` }">
            <img :src="logo" alt="logo" />
        </div>
        <form class="bg-white md:w-1/2 grid place-items-center gap-10" @submit.prevent="loginFormSubmitHandler">
          <div class="flex flex-col space-y-2">
            <h1 class="text-4xl">Login </h1>
            <p class="text-[#6A6A6A] font-thin">Lets continue writing your love story</p>
          </div>
        </form>
    </main>
</template>