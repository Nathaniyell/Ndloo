<script setup>
import { ref } from 'vue'

const mainBalance = ref(123000)
const creditBalance = ref(45)

const transactions = ref([
    { id: '123457898', date: 'Jan, 20th 2023', status: 'Paid', amount: 45 },
    { id: '123457898', date: 'Jan, 20th 2023', status: 'Paid', amount: 45 },
    { id: '123457898', date: 'Jan, 20th 2023', status: 'Paid', amount: 45 },
    { id: '123457898', date: 'Jan, 20th 2023', status: 'Paid', amount: 45 },
])

const deposit = () => {
    console.log('Deposit action')
}

const withdraw = () => {
    console.log('Withdraw action')
}

const buyCredits = () => {
    console.log('Buy credits action')
}

const sellCredit = () => {
    console.log('Sell credit action')
}
</script>



<template>
    <div class="pb-10">
        <div class="w-11/12 max-w-4xl mx-auto">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div class="col-span-2 bg-gradient-to-r from-primary4 to-primary3 rounded-lg p-6 text-white">
                    <h2 class="text-xl font-semibold mb-2">Credit balance</h2>
                    <p class="text-4xl font-bold mb-4">{{ mainBalance.toLocaleString() }}</p>
                    <div class="flex flex-wrap gap-4">
                        <button @click="deposit"
                            class="bg-white text-primary3 px-4 py-2 rounded-full font-medium flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Deposit
                        </button>
                        <button @click="withdraw"
                            class="bg-white text-primary3 px-4 py-2 rounded-full font-medium flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Withdraw
                        </button>
                    </div>
                </div>
                <div class="bg-secondary6 rounded-lg p-6">
                    <h2 class="text-xl font-semibold mb-2 text-gray-600">Credit balance</h2>
                    <p class="text-2xl font-bold mb-4">{{ creditBalance }} Credits</p>
                    <button @click="buyCredits"
                        class="w-full bg-primary4 text-white md:px-4 py-2 rounded-full font-medium">
                        Buy credits
                    </button>
                </div>
                <div class="bg-secondary6 rounded-lg p-6">
                    <h2 class="text-xl font-semibold mb-2 text-gray-600">Credit balance</h2>
                    <p class="text-2xl font-bold mb-4">{{ creditBalance }} Credits</p>
                    <button @click="sellCredit"
                        class="w-full bg-primary4 text-white md:px-4 py-2 rounded-full font-medium">
                        Sell Credit
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-lg p-6  overflow-x-auto">
                <h2 class="text-2xl font-semibold mb-4">Transaction history</h2>
                <table class="w-full min-w-[640px]">
                    <thead>
                        <tr class="text-left text-gray-600">
                            <th class="pb-2 pr-4">Type</th>
                            <th class="pb-2 pr-4">Transaction ID</th>
                            <th class="pb-2 pr-4">Date</th>
                            <th class="pb-2 pr-4">Status</th>
                            <th class="pb-2 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transaction in transactions" :key="transaction.id" class="border-t border-gray-200">
                            <td class="py-3">
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-primary4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                                            clip-rule="evenodd"></path>
                                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                                    </svg>
                                    Gift
                                </div>
                            </td>
                            <td class="py-3">{{ transaction.id }}</td>
                            <td class="py-3">{{ transaction.date }}</td>
                            <td class="py-3">
                                <span class="bg-secondary6 text-secondary px-2 py-1 rounded-full text-sm">
                                    {{ transaction.status }}
                                </span>
                            </td>
                            <td class="py-3 text-right">{{ transaction.amount }} Credits</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>



<style scoped>
@media (max-width: 640px) {
    table {
        font-size: 0.875rem;
    }
}
</style>