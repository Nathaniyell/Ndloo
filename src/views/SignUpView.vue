<script setup>
import { ref } from "vue"
import logo from "@/assets/images/ndloo.png";
import loginBg from "@/assets/images/loginBg.png"
import { RouterLink } from 'vue-router';

const loginFormData = ref({
    firstName: "",
    lastName: "",
    username: "",
    mobileNo: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    password1: "",
    password2: "",
    termsAndConditions: false
})

const loginFormSubmitHandler = () => {
    // Log the current values before resetting
    console.log({
        email: loginFormData.value.firstName,
        password: loginFormData.value.lastName,
        password: loginFormData.value.username,
        password: loginFormData.value.mobileNo,
        password: loginFormData.value.gender,
        password: loginFormData.value.dateOfBirth,
        password: loginFormData.value.email,
        password: loginFormData.value.password1,
        password: loginFormData.value.password2,
        rememberMe: loginFormData.value.termsAndConditions
    });

    // Reset the form data
    loginFormData.value.firstName = ""
    loginFormData.value.lastName = ""
    loginFormData.value.username = ""
    loginFormData.value.mobileNo = ""
    loginFormData.value.gender = ""
    loginFormData.value.dateOfBirth = ""
    loginFormData.value.email = ""
    loginFormData.value.password1 = ""
    loginFormData.value.password2 = ""
    loginFormData.value.termsAndConditions = ""

}
// Toggle visibility of the password
const isPasswordVisible = ref(false)
const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>

    <main class="font-inter md:flex items-stretch px-4 md:px-0 h-fit justify-center md:justify-between">
        <div class="hidden text-white bg-[#85002882] bg-opacity-50 bg-no-repeat bg-origin-border bg-center bg-cover bg-blend-multiply items-center justify-center flex-1 md:flex"
            :style="{ backgroundImage: `url(${loginBg})` }">
            <img :src="logo" alt="logo" />
        </div>
        <form class="h-screen bg-white md:w-1/2 py-4 md:py-2" @submit.prevent="loginFormSubmitHandler">
            <div class="w-11/12 lg:w-[75%] mx-auto flex flex-col py-6 lg:py-4 gap-14 lg:gap-12">


                <div class="flex flex-col space-y-2 text-center">
                    <h1 class="text-4xl font-semibold">Create an account </h1>
                    <p class="text-[#6A6A6A]">Let the love journey begin now</p>
                </div>
                <div class="grid space-y-8 md:space-y-5">
                    <div class="grid space-y-4 md:space-y-0 md:space-x-6 md:grid-cols-2">

                        <input v-model="loginFormData.firstName" required type="firstName" placeholder="First Name"
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3  pr-10 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                        <input v-model="loginFormData.firstName" required type="firstName" placeholder="First Name"
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3  pr-10 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />

                    </div>
                    <div class="relative">
                        <input v-model="loginFormData.password" :type="isPasswordVisible ? 'text' : 'password'"
                            placeholder="Password" required
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 pr-10 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                        <button @click="togglePasswordVisibility" type="button"
                            class="pointer-events-none  absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                            <font-awesome-icon v-if="isPasswordVisible" icon="fa-regular fa-eye-slash"
                                class="text-[#E68D8D]" />
                            <font-awesome-icon v-else icon="fa-regular fa-eye" class="text-[#E68D8D]" />
                        </button>

                        <div class="flex w-full justify-between items-center mt-4 absolute">
                            <div class="flex items-center space-x-3">

                                <input class="checked:!bg-primary4" v-model="loginFormData.rememberMe" type="checkbox"
                                    id="rememberMe">
                                <label for="rememberMe" class="text-[#6A6A6A] font-semibold text-sm">Remember me</label>
                            </div>
                            <RouterLink to="/forgot-password" class="text-primary3 font-semibold text-sm">Forgot
                                password?</RouterLink>
                        </div>
                    </div>
                </div>
                <section class="flex flex-col space-y-5 items-center text-[#6A6A6A]">
                    <div class="flex gap-3 items-center w-full">
                        <span class="flex-1 bg-[#656565] h-[0.1rem]"></span>
                        or
                        <span class="flex-1 bg-[#656565] h-[0.1rem]"></span>
                    </div>


                    <RouterLink
                        class="bg-transparent text-[#656565] p-3 font-semibold !border w-full text-center grid place-items-center rounded border-[#C9C9C9]"
                        to="/otp-login">
                        Login with OTP
                    </RouterLink>
                </section>
                <section class="flex flex-col space-y-3 items-center text-[#6A6A6A]">

                    <button type="submit"
                        class="bg-primary3 text-white p-3 font-semibold w-full text-center grid place-items-center rounded ">
                        Login
                    </button>
                    <label class="text-sm">Don't have an account? <RouterLink to="/signup"
                            class="text-primary3 font-semibold text-base">Sign up</RouterLink></label>
                </section>
            </div>
        </form>
    </main>
</template>