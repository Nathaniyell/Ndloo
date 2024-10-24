<script setup>
import { ref } from 'vue'



const oldEmail = ref('')
const newEmail = ref('')
const confirmEmail = ref('')

const changeEmail = () => {
    // Implement email change logic here
    console.log('Changing email...')
    console.log('Old email:', oldEmail.value)
    console.log('New email:', newEmail.value)
    console.log('Confirm email:', confirmEmail.value)
    // Reset form fields after submission
    oldEmail.value = ''
    newEmail.value = ''
    confirmEmail.value = ''
}
</script>


<template>
    <form @submit.prevent="changeEmail">
        <div class="space-y-4">
            <div>
                <label for="old-email" class="sr-only">Old email</label>
                <input id="old-email" v-model="oldEmail" type="email" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="Old email" />
            </div>
            <div>
                <label for="new-email" class="sr-only">New email</label>
                <input id="new-email" v-model="newEmail" type="email" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="New email" />
            </div>
            <div>
                <label for="confirm-email" class="sr-only">Confirm New email</label>
                <input id="confirm-email" v-model="confirmEmail" type="email" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="Confirm New email" />
            </div>
        </div>
        <button type="submit"
            class="w-full mt-6 py-2 px-4 bg-primary4 hover:bg-primary3 text-white font-bold rounded-md transition duration-200">
           Change Email
        </button>
    </form>
</template>