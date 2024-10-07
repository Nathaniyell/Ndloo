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

    <main
        class="font-inter md:flex items-stretch py-20 px-4 md:py-0 md:px-0 h-full justify-center md:justify-between bg-yellow-600">
        <div class="hidden text-white bg-primary3 mb-16 bg-blend-overlay bg-no-repeat md:grid place-items-center bg-cover bg-center md:h-screen w-1/2"
            :style="{ backgroundImage: `url(${sectionImg})` }">
            <img :src="logo" alt="logo" />
        </div>
        <form class="h-screen bg-white md:w-1/2" @submit.prevent="loginFormSubmitHandler">
            <div class="w-11/12 lg:w-[85%] mx-auto flex flex-col gap-2">


                <div class="flex flex-col space-y-2">
                    <h1 class="text-4xl font-semibold text-center">Login </h1>
                    <p class="text-[#6A6A6A]">Lets continue writing your love story</p>
                </div>
                <div class="grid space-y-3">
                    <input v-model="loginFormData.email" type="email" placeholder="Email"
                        class="bg-light w-full mb-4 p-2 border focus:!border-primary3 active:border-primary3 rounded" />
                        <div class="relative">

                            <input v-model="loginFormData.password" type="password" placeholder="Password"
                                class="bg-light w-full mb-4 p-2 border focus:!border-primary3 active:border-primary3 rounded" />
                                <font-awesome-icon icon="fa-regular fa-eye" class="absoute top-1/2 left-1/2 -translate-x-1/2" />
                                <font-awesome-icon icon="fa-regular fa-eye-slash" />
                        </div>
                </div>
            </div>
        </form>
    </main>
</template>