<script setup>
import { ref } from "vue"
import logo from "@/assets/images/ndloo.png";
import loginBg from "@/assets/images/loginBg.png"
import { RouterLink } from 'vue-router';

const formData = ref({
    firstName: "",
    lastName: "",
    username: "",
    mobileNo: { phoneNumber: "", countryCode: "" },
    gender: "",
    dateOfBirth: "",
    email: "",
    password1: "",
    password2: "",
    termsAndConditions: false
})
const currentStep = ref(1);
const totalSteps = 2;

const nextStep = () => {
    if (currentStep.value < totalSteps) {
        currentStep.value += 1;
    }
};

const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value -= 1;
    }
};

const signUpFormSubmitHandler = () => {

    // Log the current values before resetting
    console.log({
        email: formData.value.firstName,
        password: formData.value.lastName,
        password: formData.value.username,
        password: formData.value.mobileNo,
        password: formData.value.gender,
        password: formData.value.dateOfBirth,
        password: formData.value.email,
        password: formData.value.password1,
        password: formData.value.password2,
        rememberMe: formData.value.termsAndConditions
    });
    formData.value = {
        firstName: "",
        lastName: "",
        username: "",
        mobileNo: { phoneNumber: "", countryCode: "" },
        gender: "",
        dateOfBirth: "",
        email: "",
        password1: "",
        password2: "",
        termsAndConditions: false
    }
    // Reset the form data
    // formData.value.firstName = ""
    // formData.value.lastName = ""
    // formData.value.username = ""
    // formData.value.mobileNo = ""
    // formData.value.gender = ""
    // formData.value.dateOfBirth = ""
    // formData.value.email = ""
    // formData.value.password1 = ""
    // formData.value.password2 = ""
    // formData.value.termsAndConditions = ""
    currentStep.value = 1;
    const isPasswordVisible = ref(false)
    const togglePasswordVisibility = () => {
        isPasswordVisible.value = !isPasswordVisible.value
    }
}
</script>

<template>

    <main class="font-inter md:flex items-stretch px-4 md:px-0 h-fit justify-center md:justify-between">
        <div class="hidden text-white bg-[#85002882] bg-opacity-50 bg-no-repeat bg-origin-border bg-center bg-cover bg-blend-multiply items-center justify-center flex-1 md:flex"
            :style="{ backgroundImage: `url(${loginBg})` }">
            <img :src="logo" alt="logo" />
        </div>
        <form class="h-screen bg-white md:w-1/2 py-4 md:py-2" @submit.prevent="signUpFormSubmitHandler">
            <div class="w-11/12 lg:w-[75%] mx-auto flex flex-col py-6 lg:py-4 gap-10 lg:gap-8">


                <div class="flex flex-col space-y-2 text-center">
                    <h1 class="text-4xl font-semibold">Create an account </h1>
                    <p class="text-[#6A6A6A]">Let the love journey begin now</p>
                </div>
                <div v-if="currentStep === 1" class="grid space-y-6 md:space-y-4">
                    <div class="flex flex-col space-y-4 md:space-y-0 md:items-center md:space-x-6 md:flex-row">

                        <input v-model="formData.firstName" required type="firstName" placeholder="First name"
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                        <input v-model="formData.lastName" required type="lastName" placeholder="Last name"
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />

                    </div>
                    <div class="relative">
                        <input v-model="formData.username" type="text" placeholder="Username" required
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                    </div>
                    <div class="flex items-center space-x-2 w-full">
                        <!-- Country Code Select -->
                        <select v-model="formData.mobileNo.countryCode"
                            class="w-[30%] text-[#6A6A6A] font-semibold bg-light bg-opacity-20 p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded">
                            <option value="">+234 </option>
                            <option value="+1">+234 (NGA)</option>
                            <option value="+1">+1 (US)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+91">+91 (IN)</option>
                            <option value="+234">+234 (NG)</option>
                            <option value="+61">+61 (AU)</option>
                            <option value="+81">+81 (JP)</option>
                            <!-- Add more country codes as needed -->
                        </select>

                        <input type="text" v-model="formData.mobileNo.phoneNumber" placeholder="Mobile Number"
                            class="w-[70%] text-[#6A6A6A] font-semibold bg-light bg-opacity-20 p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                    </div>

                    <div class="w-full">
                        <select v-model="formData.gender"
                            class="w-full text-[#6A6A6A] font-semibold bg-light bg-opacity-20 p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded">
                            <option value="">Select gender </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="w-full">
                        <input type="date" v-model="formData.dateOfBirth"
                            class="w-full text-[#6A6A6A] font-semibold bg-light bg-opacity-20 p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />

                    </div>
                </div>

                <div v-if="currentStep === 2" class="flex flex-col space-y-6">
                    <input v-model="formData.email" type="email" placeholder="Email" required
                        class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                    <div class="relative">
                        <input v-model="formData.password1" type="password" placeholder="Password" required
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                        <button @click="togglePasswordVisibility" type="button"
                            class="pointer-events-none  absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                            <font-awesome-icon v-if="isPasswordVisible" icon="fa-regular fa-eye-slash"
                                class="text-[#E68D8D]" />
                            <font-awesome-icon v-else icon="fa-regular fa-eye" class="text-[#E68D8D]" />
                        </button>
                    </div>
                    <div class="relative">
                        <input v-model="formData.password2" type="password" placeholder="Confirm Password" required
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                        <button @click="togglePasswordVisibility" type="button"
                            class="pointer-events-none  absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                            <font-awesome-icon v-if="isPasswordVisible" icon="fa-regular fa-eye-slash"
                                class="text-[#E68D8D]" />
                            <font-awesome-icon v-else icon="fa-regular fa-eye" class="text-[#E68D8D]" />
                        </button>
                    </div>
                    <div class="flex items-center space-x-3">

                        <input class="checked:!bg-primary4" v-model="formData.termsAndConditions" type="checkbox"
                            id="rememberMe">
                        <label for="rememberMe" class="text-[#6A6A6A] font-semibold text-sm">I accept all <span
                                class="text-primary3"> terms and conditions</span> and <span
                                class="text-primary3">privacy
                                and policy</span></label>
                    </div>
                </div>
                <section class="flex flex-col space-y-3 items-center text-[#6A6A6A]">

                    <button v-if="currentStep < totalSteps" @click="nextStep" type="button"
                        class="bg-primary3 text-white p-3 font-semibold w-full text-center grid place-items-center rounded ">
                        Next
                    </button>
                    <button v-if="currentStep === 2" @click="prevStep" type="button"
                        class="bg-white text-primary3 p-3 font-semibold w-full text-center grid place-items-center border border-[#C9C9C9] outline-none rounded ">
                        Previous
                    </button>
                    <button v-if="currentStep === 2" type="submit" class="bg-primary3 text-white p-3 font-semibold w-full text-center grid place-items-center rounded ">
                       Sign Up
                    </button>
                    <label class="text-sm">Already have an account? <RouterLink to="/login"
                            class="text-primary3 font-semibold text-base">Login</RouterLink></label>
                            <div class="flex justify-center mt-4 space-x-2">
                                <span v-for="step in totalSteps" :key="step"
                                    :class="{ 'bg-primary3': currentStep === step, 'bg-gray-300 h-2 w-2': currentStep !== step }"
                                    class="h-2 w-8 rounded-lg"></span>
                            </div>
                </section>
            </div>
        </form>
    </main>
</template>