<script setup>
import AsideProfile from '@/components/AsideProfile.vue';
import UserProfile from '@/components/profile/UserProfile.vue';


</script>

<template>
  <div class="grid grid-cols-1 place-items-center md:place-items-start lg:grid-cols-[1fr_2fr] px-4 pb-6 lg:gap-4 gap-10">
<AsideProfile  />
<UserProfile />
  </div>
</template>