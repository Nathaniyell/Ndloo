<template>
  <div class="fixed bottom-4 right-4 bg-green-50 p-4 rounded-md shadow-lg">
    <div class="flex">
      <div class="flex-shrink-0">
        <!-- Add icon if needed -->
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-green-800">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true
  }
})
</script> 
