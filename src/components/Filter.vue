
<script setup>
import { ref } from 'vue';
import bgDesigned from "@/assets/images/bg-designed.png"

// Set up filter data
const filters = ref({
  name: '',
  location: '',
  distance: '',
  age: '',
  gender: 'both'
});

// Method to handle filter application
const applyFilter = () => {
  // Here you could emit an event or directly handle the filters object
  console.log('Applied Filters:', filters.value);
};
</script>

<template>
     <div 
    class="flex justify-center items-center min-h-screen"
    :style="{ backgroundImage: `url(${bgDesigned})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
      <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 class="text-2xl font-semibold text-center mb-4">Filter Options</h2>
        
        <!-- Name Input -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" v-model="filters.name" placeholder="Enter name" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary"/>
        </div>
  
        <!-- Location Select -->
        <div>
          <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
          <select id="location" v-model="filters.location" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary">
            <option disabled value="">Select location</option>
            <option value="Location 1">Location 1</option>
            <option value="Location 2">Location 2</option>
            <option value="Location 3">Location 3</option>
          </select>
        </div>
  
        <!-- Distance Select -->
        <div>
          <label for="distance" class="block text-sm font-medium text-gray-700">Distance</label>
          <select id="distance" v-model="filters.distance" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary">
            <option disabled value="">Select distance</option>
            <option value="5">Within 5 km</option>
            <option value="10">Within 10 km</option>
            <option value="20">Within 20 km</option>
          </select>
        </div>
  
        <!-- Age Input -->
        <div>
          <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
          <input type="number" id="age" v-model="filters.age" placeholder="Enter age" class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary"/>
        </div>
  
        <!-- Gender Radio Buttons -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Gender</label>
          <div class="mt-1 space-y-2">
            <label class="flex items-center">
              <input type="radio" value="both" v-model="filters.gender" class="text-primary3 focus:ring-primary"/>
              <span class="ml-2">Both</span>
            </label>
            <label class="flex items-center">
              <input type="radio" value="male" v-model="filters.gender" class="text-primary3 focus:ring-primary"/>
              <span class="ml-2">Male</span>
            </label>
            <label class="flex items-center">
              <input type="radio" value="female" v-model="filters.gender" class="text-primary3 focus:ring-primary"/>
              <span class="ml-2">Female</span>
            </label>
          </div>
        </div>
  
        <!-- Submit Button -->
        <div class="text-center">
          <button @click="applyFilter" class="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary3">Apply Filter</button>
        </div>
      </div>
    </div>
  </template>
  


  