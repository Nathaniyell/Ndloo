<script setup>
import { ref, reactive } from 'vue';
import FormToast from "@/components/FormToast.vue";
import LoadingSpinner from "@/components/dashboard/LoadingSpinner.vue";
import { passwordChange } from '@/composables/FetchData';
import { useRouter } from 'vue-router';

const errorMessage = ref(null);
const successMessage = ref(null);
const isSubmitting = ref(false);
const isLoading = ref(false);
const changePasswordFields = reactive({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
});
const router = useRouter();

const changePassword = async () => {
    isSubmitting.value = true;
    const { oldPassword, newPassword, confirmPassword } = changePasswordFields; // Access directly
    try {
        const response = await passwordChange({
            oldPassword,
            password: newPassword,
            password_confirmation: confirmPassword
        });
        successMessage.value = response.message || "Password change successful!";
        isLoading.value = true;

        setTimeout(async () => {
            await router.push("/dashboard");
            isLoading.value = false; // Set loading to false after navigation
        }, 5000);
    } catch (error) {
        console.error("Password change error:", error); // Changed log message to be more specific
        errorMessage.value = error?.message || "Password change failed. Please try again.";
    } finally {
        isSubmitting.value = false; // Reset submitting state
    }

    // Implement password change logic here
    console.log('Changing password...', changePasswordFields);
};
</script>

<template>
    <FormToast :error="errorMessage" :success="successMessage" />
    <LoadingSpinner :loading="isLoading" />
    <form v-if="!isLoading" @submit.prevent="changePassword">
        <div class="space-y-4">
            <div>
                <label for="old-password" class="sr-only">Old password</label>
                <input
                    id="old-password"
                    v-model="changePasswordFields.oldPassword"
                    type="password"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="Old password"
                />
            </div>
            <div>
                <label for="new-password" class="sr-only">New password</label>
                <input
                    id="new-password"
                    v-model="changePasswordFields.newPassword"
                    type="password"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="New password"
                />
            </div>
            <div>
                <label for="confirm-password" class="sr-only">Confirm New password</label>
                <input
                    id="confirm-password"
                    v-model="changePasswordFields.confirmPassword"
                    type="password"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="Confirm New password"
                />
            </div>
        </div>
        <button type="submit"
            class="w-full mt-6 py-2 px-4 bg-primary4 hover:bg-primary3 text-white font-bold rounded-md transition duration-200">
            Change password
        </button>
    </form>
</template>
