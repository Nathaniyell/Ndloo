<script setup>
import { ref, reactive } from 'vue';
import { passwordChange } from '@/composables/FetchData';
import { useRouter } from 'vue-router';

const props = defineProps({
    isResetFlow: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['password-change-success', 'password-change-error']);

const isSubmitting = ref(false);
const changePasswordFields = reactive({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
});
const router = useRouter();

const changePassword = async () => {
    if (changePasswordFields.newPassword !== changePasswordFields.confirmPassword) {
        emit('password-change-error', 'Passwords do not match');
        return;
    }

    isSubmitting.value = true;
    const { oldPassword, newPassword, confirmPassword } = changePasswordFields;
    
    try {
        const response = await passwordChange({
            oldPassword: props.isResetFlow ? undefined : oldPassword,
            password: newPassword,
            password_confirmation: confirmPassword
        });
        
        emit('password-change-success', response.message || "Password change successful!");
        
        setTimeout(async () => {
            await router.push("/login");
        }, 5000);
    } catch (error) {
        console.error("Password change error:", error);
        emit('password-change-error', error?.message || "Password change failed. Please try again.");
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <form @submit.prevent="changePassword" class="flex flex-col space-y-6">
        <div v-if="!isResetFlow" class="relative">
            <input v-model="changePasswordFields.oldPassword" 
                type="password"
                placeholder="Old Password"
                required
                class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
        </div>

        <div class="relative">
            <input v-model="changePasswordFields.newPassword" 
                type="password"
                placeholder="New Password"
                required
                class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
        </div>

        <div class="relative">
            <input v-model="changePasswordFields.confirmPassword" 
                type="password"
                placeholder="Confirm New Password"
                required
                class="text-[#6A6A6A] font-semibold bg-light bg-opacity-20 w-full p-3 border border-[#C9C9C9] outline-none focus:!border-primary3 active:border-primary3 rounded" />
        </div>

        <button type="submit"
            :disabled="isSubmitting"
            class="bg-primary3 text-white p-3 font-semibold w-full text-center grid place-items-center rounded">
            <span v-if="!isSubmitting">Reset Password</span>
            <div v-else class="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </button>
    </form>
</template>
