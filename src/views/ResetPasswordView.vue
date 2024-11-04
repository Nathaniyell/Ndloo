<script setup>
import { ref } from 'vue';
import FormToast from '@/components/FormToast.vue';
import LoadingSpinner from '@/components/loading-spinners/LoadingSpinner.vue';
import logo from "@/assets/images/ndloo.png";
import logo2 from "@/assets/images/red-logo.png";
import loginBg from "@/assets/images/loginBg.png";
import ChangePassword from '@/components/settings/ChangePassword.vue';

const errorMessage = ref(null);
const successMessage = ref(null);
const isLoading = ref(false);

// Add handlers for child component events if needed
const handlePasswordChangeSuccess = (message) => {
    successMessage.value = message;
    isLoading.value = true;
    // Reset loading state after navigation (matches SignupView behavior)
    setTimeout(() => {
        isLoading.value = false;
    }, 5000);
};

const handlePasswordChangeError = (error) => {
    errorMessage.value = error;
    isLoading.value = false;
};
</script>

<template>
    <main class="font-inter md:flex md:items-stretch px-4 md:px-0 h-fit justify-center md:justify-between">
        <div class="hidden text-white bg-[#85002882] bg-opacity-50 bg-no-repeat bg-origin-border bg-center bg-cover bg-blend-multiply items-center justify-center flex-1 md:flex"
            :style="{ backgroundImage: `url(${loginBg})` }">
            <img :src="logo" alt="logo" />
        </div>

        <LoadingSpinner :loading="isLoading" />
        <FormToast v-if="!isLoading" :error="errorMessage" :success="successMessage" />
        
        <div class="h-screen grid place-items-center bg-white md:w-1/2 py-4 md:py-2">
            <div class="w-11/12 lg:w-[75%] mx-auto flex flex-col py-6 lg:py-4 gap-10 lg:gap-8">
                <div class="flex flex-col space-y-2 text-center">
                    <img class="md:hidden mx-auto" :src="logo2" alt="logo" />
                    <h1 class="text-4xl font-semibold">Reset Password</h1>
                    <p class="text-[#6A6A6A]">Enter your new password</p>
                </div>

                <ChangePassword 
                    :isResetFlow="true"
                    @password-change-success="handlePasswordChangeSuccess"
                    @password-change-error="handlePasswordChangeError"
                />
            </div>
        </div>
    </main>
</template>
