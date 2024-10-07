<script setup>
import logo from "@/assets/images/ndloo.png";
import loginBg from "@/assets/images/loginBg.png"
import { RouterLink } from 'vue-router';
import { ref, nextTick } from 'vue';

const otp = ref(['', '', '', '']);

const handleInput = async (index) => {
    if (otp.value[index].length === 1 && index < otp.value.length - 1) {
        otpInputRefs.value[index].classList.add('bounce'); // Add bounce animation
        await nextTick(); // Wait for the DOM to update
        setTimeout(() => otpInputRefs.value[index].classList.remove('bounce'), 300); // Remove bounce class

        // Focus the next input box
        const nextInput = otpInputRefs.value[index + 1];
        if (nextInput) nextInput.focus();
    }
};

const movePrev = (index) => {
    if (otp.value[index] === '' && index > 0) {
        const prevInput = otpInputRefs.value[index - 1];
        if (prevInput) prevInput.focus();
    }
};

const verifyOTP = () => {
    const otpCode = otp.value.join('');
    alert(`Entered OTP: ${otpCode}`);
};

// Access individual refs for each input box
const otpInputRefs = ref([]);
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
                    <h1 class="text-4xl font-semibold">Input Code </h1>
                    <p class="text-[#6A6A6A]">Please check your mail for code</p>
                </div>
                <div class="grid space-y-8 md:space-y-10">
                    <div class="flex space-x-6 justify-center">

                        <input v-for="(value, index) in otp" :key="index" v-model="otp[index]" type="text" maxlength="1"
                            class="otp-input w-12 h-12 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary3 transform transition-transform duration-200 ease-out"
                            @input="handleInput(index)" @keydown.backspace="movePrev(index)" ref="otpInput" />
                    </div>


                    <div>

                        <button @click="verifyOTP" type="submit"
                            class="bg-primary3 text-white p-3 font-semibold w-full text-center grid place-items-center rounded ">
                            Done
                        </button>
                        <button type="button"
                            class="bg-transparent text-[#6A6A6A] p-3 font-semibold w-full text-center flex items-center justify-center text-sm">
                            Resend code ( <span class="text-primary3">60</span> )
                        </button>

                    </div>


                </div>
            </div>
        </form>
    </main>
</template>

<style scoped>
@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}

.otp-input:focus {
    transform: scale(1.1);
}

.bounce {
    animation: bounce 0.3s ease;
}
</style>