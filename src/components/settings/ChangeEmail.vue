<script setup>
import { ref } from 'vue'
import FormToast from "@/components/FormToast.vue";
import LoadingSpinner from "@/components/dashboard/LoadingSpinner.vue";
import { passwordChange } from '@/composables/FetchData';
import { useRouter } from 'vue-router';

const errorMessage = ref(null);
const successMessage = ref(null);
const isSubmitting = ref(false);
const isLoading = ref(false);
const changeEmail = reactive({
    email: "",
    paswword: "",

});
const router = useRouter();

const handleEmailChange = () => {

}
</script>


<template>
    <form @submit.prevent="handleEmailChange">
        <div class="space-y-4">
          
            <div>
                <label for="email" class="sr-only">Email</label>
                <input id="email" v-model="changeEmail.email" type="email" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="johndoe@mail.com" />
            </div>
            <div>
                <label for="password" class="sr-only">Password</label>
                <input
                    id="password"
                    v-model="changeEmail.password"
                    type="password"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary3"
                    placeholder="Password"
                />
            </div>
        </div>
        <button type="submit"
            class="w-full mt-6 py-2 px-4 bg-primary4 hover:bg-primary3 text-white font-bold rounded-md transition duration-200">
           Change Email
        </button>
    </form>
</template>