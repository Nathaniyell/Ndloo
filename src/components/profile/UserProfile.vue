<script setup>
import { ref } from 'vue'

const tabs = ['Appearance', 'General', 'Personality', 'Life style', 'Favorites']
const activeTab = ref('Appearance')

const appearanceDetails = {
    'Height': '5\'5"',
    'Body type': 'Super model',
    'Hair color': 'Black'
}
const generalDetails = {
    'Gender': 'Male',
    'Preferred language': 'French',
    'Working Status': 'Finding',
    'Education': 'College',
    'Relationship status': 'Single'
}
const lifeStyle = {
    'Religion': 'Christian',
    'Live With': 'Alone',
    'Car': 'Yes',
    'Smoke': 'No',
    'Drink': 'No'
}
const favouriteDetails = {
    'Music Genre': 'Hiphop',
    'Song': 'Alone',
    'Hobby': 'Yes',
    'Sport': 'No',
    'Show': 'No',
    'Movie': 'No',
    'Colour': 'No',
    'Dish': 'No',
}

const gifts = [
    { credits: 250 },
    { credits: 200 },
    { credits: 50 }
]

const sellGift = (credits) => {
    console.log(`Selling gift worth ${credits} credits`)
}
</script>



<template>
    <div class="bg-white h-fit shadow rounded-lg p-6 max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Details</h2>

        <div class="mb-6">
            <nav class="flex space-x-4">
                <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                    class="px-3 py-2 rounded-md text-sm font-medium"
                    :class="activeTab === tab ? 'bg-red-800 text-white' : 'text-gray-700 hover:bg-gray-100'">
                    {{ tab }}
                </button>
            </nav>
        </div>

        <div v-if="activeTab === 'Appearance'" class="space-y-4">
            <div v-for="(value, key) in appearanceDetails" :key="key" class="flex justify-between">
                <span class="font-medium">{{ key }}</span>
                <span>{{ value }}</span>
            </div>
        </div>
        <div v-if="activeTab === 'General'" class="space-y-4">
            <div v-for="(value, key) in generalDetails" :key="key" class="flex justify-between">
                <span class="font-medium">{{ key }}</span>
                <span>{{ value }}</span>
            </div>
        </div>
        <div v-if="activeTab === 'Life style'" class="space-y-4">
            <div v-for="(value, key) in lifeStyle" :key="key" class="flex justify-between">
                <span class="font-medium">{{ key }}</span>
                <span>{{ value }}</span>
            </div>
        </div>
        <div v-if="activeTab === 'Favorites'" class="space-y-4">
            <div v-for="(value, key) in favouriteDetails" :key="key" class="flex justify-between">
                <span class="font-medium">{{ key }}</span>
                <span>{{ value }}</span>
            </div>
        </div>

        <h3 class="text-xl font-semibold mt-8 mb-4">My gifts</h3>
        <div class="grid md:grid-cols-3 gap-4">
            <div v-for="gift in gifts" :key="gift.credits" class="bg-red-800 rounded-lg p-4 text-white text-center">
                <div class="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-800" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                </div>
                <p class="font-bold mb-2">{{ gift.credits }} credits</p>
                <button @click="sellGift(gift.credits)"
                    class="bg-white text-red-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Sell
                </button>
            </div>
        </div>
    </div>
</template>