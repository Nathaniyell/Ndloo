<script setup>
import AsideProfile from '@/components/AsideProfile.vue';
import UserProfile from '@/components/profile/UserProfile.vue';
import { getProfile } from '@/composables/FetchData';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import FullPageSpinner from '@/components/loading-spinners/FullPageSpinner.vue';

const userStore = useUserStore();
const isLoading = ref(true);
const profileInfo = ref(null);
const error = ref(null);

async () => {
  if (!userStore.user?.id) {
    error.value = "User not authenticated";
    isLoading.value = false;
    return;
  }

  try {
    const response = await getProfile(userStore.user?.id);
    console.log('Profile data:', response);
    profileInfo.value = response;
  } catch (err) {
    console.error('Error fetching profile:', err);
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <!-- Loading State -->
  <FullPageSpinner v-if="isLoading" text="Loading profile..." />

  <!-- Error State -->
  <div v-else-if="error" class="flex items-center justify-center min-h-[50vh]">
    <div class="text-center">
      <p class="text-red-500 mb-2">{{ error }}</p>
      <button 
        @click="window.location.reload()" 
        class="text-primary3 hover:underline"
      >
        Try again
      </button>
    </div>
  </div>

  <!-- Content State -->
  <div 
    v-else 
    class="grid grid-cols-1 place-items-center md:place-items-start lg:grid-cols-[1fr_2fr] px-4 pb-6 lg:gap-4 gap-10"
  >
    <AsideProfile :profile-data="profileInfo" />
    <UserProfile :profile-data="profileInfo" />
  </div>
</template>