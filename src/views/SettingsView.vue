<script setup>
import ChangeEmail from '@/components/settings/ChangeEmail.vue';
import ChangePassword from '@/components/settings/ChangePassword.vue';
import GeneralSettings from '@/components/settings/GeneralSettings.vue';
import { ref } from 'vue'

const tabs = ['General settings', 'Change password', 'Change Email']
const activeTab = ref('General settings')


</script>


<template>
  

        <div class="flex flex-col space-y-7">
            <div class="flex !border-b-2 border-[#d8d8d8]">
                <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                    class="flex-1 py-2 px-6 text-center focus:outline-none"
                    :class="{ 'border-b-2 border-primary3 font-medium': activeTab === tab }">
                    {{ tab }}
                </button>
            </div>
            <div class="w-11/12 mx-auto md:w-full self-center max-w-md bg-white rounded-lg shadow-md overflow-hidden">

                <div class="p-6">
                    <template v-if="activeTab === 'General settings'">
                        <h2 class="text-2xl font-bold mb-4">General settings</h2>
                        <GeneralSettings />
                    </template>

                    <template v-if="activeTab === 'Change password'">
                        <h2 class="text-2xl font-bold mb-4">Change password</h2>
                        <p class="text-gray-600 mb-6">Fill your info below to change password</p>
                        <ChangePassword />
                    </template>
                    
                    <template v-if="activeTab === 'Change Email'">
                        <h2 class="text-2xl font-bold mb-4">Change Email</h2>
                        <p class="text-gray-600 mb-6">Fill your info below to change email</p>
                        <ChangeEmail />
                    </template>
                </div>
            </div>
        </div>

</template>
