<script setup>
import { onMounted, ref } from "vue"
import logo from "@/assets/images/ndloo.png";
import logo2 from "@/assets/images/red-logo.png";
import loginBg from "@/assets/images/loginBg.png"
import { RouterLink } from 'vue-router';
import { getCountries, registerUser } from "@/composables/FetchData";
import FormToast from "@/components/FormToast.vue";

const formData = ref({
  firstName: "",
  lastName: "",
  phone: "",
  country: "",
  gender: "",
  age: "",
  email: "",
  password1: "",
  password2: "",
  termsAndConditions: false
});
const currentStep = ref(1);
const countries = ref([]);
const totalSteps = 2;
const errorMessage = ref(null);
const successMessage = ref(null);

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

// Fetch countries and extract iso3 and phonecode
onMounted(async () => {
  try {
    const countriesData = await getCountries();
    if (countriesData.status === "success" && countriesData.data) {
      countries.value = countriesData.data.countries.map(country => ({
        iso3: country.iso3,
        phonecode: country.phonecode
      }));
    //   console.log(countries.value); 
      successMessage.value = "Successfully fetched Countries data"
    }
  } catch (error) {
    console.error("Error fetching countries:", error);
    errorMessage.value = error.message
  }
});

const signUpFormSubmitHandler = async () => {
  const { firstName, lastName, phone, gender, age, email, password1, password2, country } = formData.value;

  // Check if geolocation is available
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          // Attempt to register the user
          const response = await registerUser({
            email: email,
            firstname: firstName,
            lastname: lastName,
            age: age,
            country: country,
            phone: `+${country}${phone}`,
            gender: gender,
            latitude: `${latitude}`,
            longitude: `${longitude}`,
            password: password1,
            password_confirmation: password2
          });

          // Success handling
          successMessage.value = response.message
                 // Log the details and reset the form
          console.log({
            email,
            firstname: firstName,
            lastname: lastName,
            age,
            country,
            phone: `+${country}${phone}`,
            gender,
            latitude,
            longitude,
            password: password1,
            password_confirmation: password2
          });

          formData.value = {
            firstName: "",
            lastName: "",
            phone: "",
            country: "",
            gender: "",
            age: "",
            email: "",
            password1: "",
            password2: "",
            termsAndConditions: false
          };
          currentStep.value = 1;
        } catch (error) {
          // Handle any errors during the registration process
          console.error("Registration error:", error);
          errorMessage.value = error?.message || "Registration failed. Please try again.";
        }
      },
      (error) => {
        // Handle location errors
        console.error("Error getting location:", error);
        errorMessage.value = "Unable to retrieve location. Please enable location services and try again.";
        alert(errorMessage.value);
      }
    );
  } else {
    // Geolocation not supported
    errorMessage.value = "Geolocation is not supported by your browser.";
    alert(errorMessage.value);
  }
};


const isPasswordVisible = ref(false)
const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>

    <main class="font-inter md:flex md:items-stretch px-4 md:px-0 h-fit justify-center md:justify-between">
        <div class="hidden text-white bg-[#85002882] bg-opacity-50 bg-no-repeat bg-origin-border bg-center bg-cover bg-blend-multiply items-center justify-center flex-1 md:flex"
        :style="{ backgroundImage: `url(${loginBg})` }">
        <img :src="logo" alt="logo" />
    </div>
    
    
    <FormToast :error="errorMessage" :success="successMessage" />
        <form class="h-screen bg-white md:w-1/2 py-4 md:py-2" @submit.prevent="signUpFormSubmitHandler">
            <div class="w-11/12 lg:w-[75%] mx-auto flex flex-col py-6 lg:py-4 gap-10 lg:gap-8">


                <div class="flex flex-col space-y-2 text-center">
                    <img class="md:hidden mx-auto" :src="logo2" alt="logo" />
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
                        <input v-model="formData.email" type="email" placeholder="Email" required
                            class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
                    </div>
                    <div class="flex items-center space-x-2 w-full">
                        <!-- Country Code Select -->
                        <select v-model="formData.country"
                            class="w-[30%] text-[#6A6A6A] font-semibold bg-light bg-opacity-20 p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded">
                            <option value="">Country Code</option>
                            <option v-for="country in countries" :key="country.phonecode" :value="country.phonecode">
                                {{ country.iso3 }} (+{{ country.phonecode }})
                            </option>
                        </select>


                        <input type="text" v-model="formData.phone" placeholder="Mobile Number"
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

                        <input type="number" v-model="formData.age"
                            class="w-full text-[#6A6A6A] font-semibold bg-light bg-opacity-20 p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded"
                            placeholder="Age" />

                    </div>
                </div>

                <div v-if="currentStep === 2" class="flex flex-col space-y-6">
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
                    <p v-if="formData.password1 !== formData.password2" class="text-blue-600 text-sm">Passwords do not
                        match please check and try again</p>
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
                    <button v-if="currentStep === 2" type="submit"
                        class="bg-primary3 text-white p-3 font-semibold w-full text-center grid place-items-center rounded ">
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