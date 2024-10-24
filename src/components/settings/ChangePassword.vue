<script setup>
import { ref } from 'vue'
const oldPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const changePassword = () => {
    // Implement password change logic here
    console.log('Changing password...')
    console.log('Old password:', oldPassword.value)
    console.log('New password:', newPassword.value)
    console.log('Confirm password:', confirmPassword.value)
    // Reset form fields after submission
    oldPassword.value = ''
    newPassword.value = ''
    confirmPassword.value = ''
}
</script>


<template>
    <form @submit.prevent="changePassword">
        <div class="space-y-4">
            <div>
                <label for="old-password" class="sr-only">Old password</label>
                <input id="old-password" v-model="oldPassword" type="password" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="Old password" />
            </div>
            <div>
                <label for="new-password" class="sr-only">New password</label>
                <input id="new-password" v-model="newPassword" type="password" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="New password" />
            </div>
            <div>
                <label for="confirm-password" class="sr-only">Confirm New password</label>
                <input id="confirm-password" v-model="confirmPassword" type="password" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="Confirm New password" />
            </div>
        </div>
        <button type="submit"
            class="w-full mt-6 py-2 px-4 bg-primary4 hover:bg-primary3 text-white font-bold rounded-md transition duration-200">
            Change password
        </button>
    </form>
</template>