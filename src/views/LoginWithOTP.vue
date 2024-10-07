<script setup>
import { ref } from "vue"
import logo from "@/assets/images/ndloo.png";
import loginBg from "@/assets/images/loginBg.png"
import { RouterLink } from 'vue-router';

const loginFormData = ref({
    email: "",

})

const loginFormSubmitHandler = () => {
        console.log({
        email: loginFormData.value.email,

    });

    // Reset the form data
    loginFormData.value.email = "";

}

</script>

<template>

    <main class="font-inter md:flex items-stretch px-4 md:px-0 h-fit justify-center md:justify-between">
        <div class="hidden text-white bg-[#85002882] bg-opacity-50 bg-no-repeat bg-origin-border bg-center bg-cover bg-blend-multiply items-center justify-center flex-1 md:flex"
            :style="{ backgroundImage: `url(${loginBg})` }">
            <img :src="logo" alt="logo" />
        </div>
        <form class="h-screen bg-white md:w-1/2 py-4 md:py-2 grid place-items-center"
            @submit.prevent="loginFormSubmitHandler">
            <div class="w-11/12 lg:w-[85%] mx-auto flex flex-col py-6 lg:py-4 gap-14 lg:gap-20">


                <div class="flex flex-col space-y-2 text-center">
                    <h1 class="text-4xl font-semibold">Login with OTP </h1>
                    <p class="text-[#6A6A6A]">Please input your used email below</p>
                </div>
                <div class="grid space-y-8 md:space-y-10">
                    <div class="relative">

                        <input v-model="loginFormData.email" required type="email" placeholder="Email"
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3  pr-10 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                        <button
                            class="pointer-events-none  absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                            <svg width="24" height="24" viewBox="0 0 36 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.5 4.5H10.5C6 4.5 3 6.75 3 12V22.5C3 27.75 6 30 10.5 30H15.855C16.74 30 17.46 29.22 17.34 28.335C17.19 27.27 17.22 26.16 17.445 25.02C18.24 21.12 21.45 18.015 25.38 17.37C27.345 17.055 29.22 17.325 30.87 18.045C31.875 18.48 33 17.79 33 16.695V12C33 6.75 30 4.5 25.5 4.5ZM26.205 12.885L21.51 16.635C20.52 17.43 19.26 17.82 18 17.82C16.74 17.82 15.465 17.43 14.49 16.635L9.795 12.885C9.315 12.495 9.24 11.79 9.615 11.295C10.005 10.815 10.71 10.725 11.19 11.115L15.885 14.865C17.025 15.78 18.96 15.78 20.1 14.865L24.795 11.115C25.275 10.725 25.995 10.8 26.37 11.295C26.76 11.79 26.685 12.495 26.205 12.885Z"
                                    fill="#E68D8D" />
                                <path
                                    d="M27 19.5C22.86 19.5 19.5 22.845 19.5 27C19.5 31.14 22.86 34.5 27 34.5C31.155 34.5 34.5 31.14 34.5 27C34.5 22.845 31.155 19.5 27 19.5ZM30.075 26.325L29.52 26.865L26.25 30.15C26.1 30.285 25.815 30.435 25.605 30.465L24.135 30.675C23.61 30.75 23.235 30.375 23.31 29.85L23.52 28.38C23.55 28.17 23.685 27.885 23.835 27.735L27.105 24.48L27.645 23.925C28.005 23.565 28.41 23.325 28.83 23.325C29.19 23.325 29.595 23.49 30.045 23.925C31.05 24.9 30.735 25.665 30.075 26.325Z"
                                    fill="#E68D8D" />
                            </svg>
                        </button>
                    </div>



                    <button type="submit"
                        class="bg-primary3 text-white p-3 font-semibold w-full text-center grid place-items-center rounded ">
                        Get Code
                    </button>


                </div>
            </div>
        </form>
    </main>
</template>