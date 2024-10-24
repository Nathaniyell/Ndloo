<script setup>
import { ref } from 'vue'
import profile2 from "@/assets/images/profile2.png"
const props = defineProps({
  name: { type: String, default: 'Virtue Andrew' },
  age: { type: Number, default: 23 },
  location: { type: String, default: 'Uyo, Nigeria' },
  phone: { type: String, default: '08140434023' },
  birthdate: { type: String, default: '5th January 2001' },
  mainImage: { type: String, default: profile2 },
  thumbnails: { 
    type: Array, 
    default: () => [
      profile2,
      profile2,
      profile2
    ]
  }
})

const showNotification = ref(true)

const messageUser = () => {
  console.log('Messaging user...')
}

const buyGift = () => {
  console.log('Buying a gift...')
}
</script>

<template>
  <div class="w-full p-6 mx-auto bg-white rounded-lg overflow-hidden h-fit shadow-lg space-y-8 flex flex-col justify-between">
    <div class="relative space-y-4">
      <img :src="mainImage" alt="Profile picture" class="w-full h-48 object-cover rounded-md" />
      <div class="absolute top-2 right-2 flex space-x-2">
        <span class="bg-primary3 text-white rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
        </span>
        <span v-if="showNotification" class="bg-primary3 text-white rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </span>
      </div>
      <div class="w-full justify- items-center flex">
        <div v-for="(thumbnail, index) in thumbnails" :key="index" class="w-1/3 pr-2">
          <img :src="thumbnail" alt="Thumbnail" class="w-full h-16 object-cover rounded" />
        </div>
      </div>
    </div>
    <div class="space-y-4">
      <h2 class="text-xl flex items-center !space-x-6 font-semibold">{{ name }} <span class="mx-2 w-2 h-2 bg-green-500 rounded-full ml-2"></span> {{ age }}</h2>
      <div class=" space-y-3">
        <p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>{{ location }}</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>{{ phone }}</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>{{ birthdate }}</p>
      </div>
    </div>
    <div class="space-y-7">
      <button @click="messageUser" class="w-full bg-primary3 text-white py-2 rounded hover:bg-red-600 transition duration-200">Message me</button>
      <button @click="buyGift" class="w-full border border-primary3 text-primary3 py-2 rounded hover:bg-red-50 transition duration-200">Buy me a gift</button>
    </div>
  </div>
</template>