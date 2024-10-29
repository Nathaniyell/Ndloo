<script setup>
import { ref } from 'vue';


const filters = ref({
    name: '',
    location: '',
    distance: '',
    age: '',
    gender: 'both'
});

const { closeFilter } = defineProps({
    closeFilter: {
        type: Function,
        required: true
    }
});

const applyFilter = async () => {
    
    console.log('Applied Filters:', filters.value);
   await closeFilter()
    filters.value = {
        name: '',
        location: '',
        distance: '',
        age: '',
        gender: 'both'
    }
};
</script>

<template>
    <div class="flex justify-center items-center min-h-screen pb-6 mt-2">
        <div class="bg-white p-6 rounded-lg shadow-md w-10/12 max-w-md space-y-4">
            <div class="flex items-center justify-between">

                <h2 class="text-xl text-[#767676] font-semibold mb-4">Filter </h2>
                <button @click="closeFilter" class="text-primary4 hover:text-primary3">
                    Close
                </button>
            </div>

            <form class="flex flex-col space-y-4" @submit.prevent="applyFilter">
                <!-- Name Input -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input required type="text" id="name" v-model="filters.name" placeholder="Enter name"
                        class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary" />
                </div>

                <!-- Location Select -->
                <div>
                    <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                    <select id="location" v-model="filters.location"
                        class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary">
                        <option disabled value="">Select location</option>
                        <option value="Location 1">Location 1</option>
                        <option value="Location 2">Location 2</option>
                        <option value="Location 3">Location 3</option>
                    </select>
                </div>

                <!-- Distance Select -->
                <div>
                    <label for="distance" class="block text-sm font-medium text-gray-700">Distance</label>
                    <select required id="distance" v-model="filters.distance"
                        class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary">
                        <option disabled value="">Select distance</option>
                        <option value="5">Within 5 km</option>
                        <option value="10">Within 10 km</option>
                        <option value="20">Within 20 km</option>
                    </select>
                </div>

                <!-- Age Input -->
                <div>
                    <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
                    <input required type="text" id="age" v-model="filters.age" placeholder="Enter age"
                        class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary" />
                </div>

                <!-- Gender Radio Buttons -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Gender</label>
                    <div class="mt-1 space-y-2">
                        <label class="flex items-center">
                            <input type="radio" value="both" v-model="filters.gender"
                                class="text-primary3 focus:ring-primary" />
                            <span class="ml-2">Both</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" value="male" v-model="filters.gender"
                                class="text-primary3 focus:ring-primary" />
                            <span class="ml-2">Male</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" value="female" v-model="filters.gender"
                                class="text-primary3 focus:ring-primary" />
                            <span class="ml-2">Female</span>
                        </label>
                    </div>
                </div>

                <!-- Submit Button -->
                <div class="text-center">
                    <button type="submit"
                        class="w-full bg-primary3 text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-primary3">Apply
                        Filter</button>
                </div>
            </form>
        </div>
    </div>
</template>