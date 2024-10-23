<script setup>
defineProps({
    loading: Boolean
})
</script>


<template>
    <div v-if="loading"
        class="inset-0 grid place-content-center min-h-screen items-center justify-center z-50 w-full">
        <!-- Loading Spinner -->
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-primary4"
          role="status"></div>
      </div>
</template>