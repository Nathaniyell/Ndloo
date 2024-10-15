<script setup>
import { ref } from 'vue';
import boostIcon from "@/assets/icons/boost-pp.png"
const boostOptions = ref("")

const applyBoost = () => {
    
    console.log('Boost:', boostOptions.value);
   
 filters.value = ""
};

</script>

<template>
    <div class="flex justify-center items-center pb-6 ">
        <div class="bg-white p-6 rounded-lg shadow-md w-[95%] max-w-md space-y-6">
            <h2 class="text-xl text-[#212121] mb-4">Boost Profile </h2>

            <div class="grid place-items-center p-10 w-fit h-fit mx-auto bg-[#D9D9D9] rounded-full">
                <img class="" :src="boostIcon" alt="Boost">
            </div>
            <form @submit.prevent="applyBoost" class="mt-1 space-y-6 text-[#212121]">
                <div class="flex items-center justify-between gap-8 w-full">
                    <label class="flex items-center">
                        <input type="radio" value="3" v-model="boostOptions" class="text-primary3 focus:ring-primary" />
                        <span class="ml-2">Boost for 3 days</span>
                    </label>
                    <p>$ 400</p>
                </div>
                <div class="flex items-center justify-between gap-8 w-full">
                    <label class="flex items-center">
                        <input type="radio" value="30" v-model="boostOptions" class="text-primary3 focus:ring-primary" />
                        <span class="ml-2">Boost for 30 days</span>
                    </label>
                    <p>$ 16,000</p>
                </div>
                <div class="flex items-center justify-between gap-8 w-full">
                    <label class="flex items-center">
                        <input type="radio" value="120" v-model="boostOptions" class="text-primary3 focus:ring-primary" />
                        <span class="ml-2">Boost for 120 days</span>
                    </label>
                    <p>$ 120,000</p>
                </div>
                <div class="text-center">
                    <button type="submit"
                        class="w-full bg-primary3 text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-primary3">Boost</button>
                </div>
            </form>
        </div>
    </div>
</template>