<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import logo from "@/assets/images/ndloo.png";
import loginBg from "@/assets/images/loginBg.png";
import { verifyEmailOtp, verifyLoginOtp, verifyRecoverOtp, userLoginWithOtp } from "@/composables/FetchData";
import { useSignUpEmailStore } from "@/store/state";
import FormToast from "@/components/FormToast.vue";
import LoadingSpinner from "@/components/dashboard/LoadingSpinner.vue";

// Access route and router
const router = useRouter();
const route = useRoute();

// Store and OTP
const signUpEmailStore = useSignUpEmailStore();
const otp = ref(["", "", "", ""]);
const countDown = ref(60);
let timer = null;
const isButtonDisabled = ref(false);
const errorMessage = ref(null);
const successMessage = ref(null);
const isSubmitting = ref(false);
const isLoading = ref(false);

// Check previous route to determine page
const loginPage = route.query.from === "login";
const signupPage = route.query.from === "signup"; 
const recoverPage = route.query.from === "forgot-password";

// Countdown logic
const startCountdown = async () => {
  try {
    // Send new OTP based on the page type
    if (loginPage) {
      await userLoginWithOtp({ email: signUpEmailStore.email });
    } else if (recoverPage) {
      await sendRecoverOtp({ email: signUpEmailStore.email });
    } else {
      await verifyEmailOtp({ email: signUpEmailStore.email });
    }

    // Start countdown after successful OTP send
    isButtonDisabled.value = true;
    countDown.value = 60;
    
    timer = setInterval(() => {
      if (countDown.value > 0) {
        countDown.value--;
      } else {
        clearInterval(timer);
        isButtonDisabled.value = false;
      }
    }, 1000);

    successMessage.value = "New OTP sent!";
  } catch (error) {
    console.error("Resend OTP error:", error);
    errorMessage.value = error.message || "Failed to resend OTP";
    isButtonDisabled.value = false;
  }
};

onMounted(() => {
  startCountdown(); // Start countdown when component mounts

  // Verify email exists in store
  if (!signUpEmailStore.email) {
    console.error("No email found in store")
    router.push('/login')
    return
  }
});

// OTP Input logic
const otpInputRefs = ref([]);

const handleInput = async (index) => {
  const currentInput = otpInputRefs.value[index];
  if (currentInput && otp.value[index].length === 1 && index < otp.value.length - 1) {
    currentInput.classList.add("bounce"); // Add bounce animation
    await nextTick(); // Wait for the DOM to update
    setTimeout(() => currentInput.classList.remove("bounce"), 300); // Remove bounce class

    // Focus the next input box
    const nextInput = otpInputRefs.value[index + 1];
    if (nextInput) nextInput.focus();
  }
};

const movePrev = (index) => {
  const currentInput = otpInputRefs.value[index];
  if (currentInput && otp.value[index] === "" && index > 0) {
    const prevInput = otpInputRefs.value[index - 1];
    if (prevInput) prevInput.focus();
  }
};

// OTP Verification logic
const verifyOTP = async () => {
  // Clear previous messages
  errorMessage.value = null;
  successMessage.value = null;

  // Validate OTP is complete
  const otpCode = otp.value.join("");
  if (otpCode.length !== 4) {
    errorMessage.value = "Please enter all 4 digits";
    return;
  }

  isSubmitting.value = true;
  
  try {
    let response;
    
    // Route checks
    const currentPath = route.path
    const isRecoveryFlow = route.query.type === 'forgot-password' // Add this query parameter to your routes

    if (isRecoveryFlow) {
      response = await verifyRecoverOtp({
        email: signUpEmailStore.email,
        token: otpCode
      });
    } else if (currentPath === '/otp-login') {
      response = await verifyLoginOtp({
        email: signUpEmailStore.email,
        token: otpCode
      });
    } else {
      response = await verifyEmailOtp({
        email: signUpEmailStore.email,
        token: otpCode
      });
    }

    successMessage.value = response?.message || "Verification successful!";
    
    // Navigate based on flow type
    setTimeout(() => {
      if (isRecoveryFlow) {
        router.push("/reset-password");
      } else {
        router.push("/dashboard");
      }
    }, 2000);

  } catch (error) {
    console.error("OTP error:", error);
    errorMessage.value = error.message;
  } finally {
    isSubmitting.value = false;
  }
};

// Cleanup timer on component unmount
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <main class="font-inter md:flex items-stretch px-4 md:px-0 h-fit justify-center md:justify-between">
    <div
      class="hidden text-white bg-[#85002882] bg-opacity-50 bg-no-repeat bg-origin-border bg-center bg-cover bg-blend-multiply items-center justify-center flex-1 md:flex"
      :style="{ backgroundImage: `url(${loginBg})` }">
      <img :src="logo" alt="logo" />
    </div>
    <FormToast v-if="!isLoading" :error="errorMessage" :success="successMessage" />
    <LoadingSpinner :loading="isLoading" />
    <form v-if="!isLoading" class="h-screen bg-white md:w-1/2 py-4 md:py-2 grid place-items-center" @submit.prevent="verifyOTP">
      <div class="w-11/12 lg:w-[75%] mx-auto flex flex-col py-6 lg:py-4 gap-14 lg:gap-20">

        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-4xl font-semibold">Input Code</h1>
          <p class="text-[#6A6A6A]">Please check your mail for the code</p>
        </div>

        <div class="grid space-y-8 md:space-y-10">
          <div class="flex space-x-6 justify-center">
            <input
              v-for="(value, index) in otp"
              :key="index"
              v-model="otp[index]"
              type="text"
              maxlength="1"
              class="otp-input w-12 h-12 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary3 transform transition-transform duration-200 ease-out"
              @input="handleInput(index)"
              @keydown.backspace="movePrev(index)"
              ref="otpInputRefs[index]"
            />
          </div>

          <div class="flex flex-col space-y-6">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="bg-primary3 text-white p-3 font-semibold w-full text-center grid place-items-center rounded disabled:opacity-70"
            >
              <div v-if="isSubmitting" class="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span v-else>Done</span>
            </button>

            <button
              @click="startCountdown"
              type="button"
              :disabled="isButtonDisabled || isSubmitting"
              :class="`${isButtonDisabled ? 'text-[#6A6A6A]' : 'text-primary3'} bg-transparent p-3 font-semibold w-full text-center flex items-center justify-center text-sm disabled:opacity-50`"
            >
              Resend code &nbsp;
              <span :class="isButtonDisabled ? 'text-primary3' : 'text-gray-400 hidden'">({{ countDown }})</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>
