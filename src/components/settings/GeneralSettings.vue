  
  <script setup>
  import { ref } from 'vue'
  
  const isOn = ref(false)
  
  const toggle = () => {
    isOn.value = !isOn.value
    console.log('Notifications are now', isOn.value ? 'on' : 'off')
  }
  </script>



<template>
    <div class="flex items-center justify-between">
      <label for="notifications" class="text-sm font-medium text-gray-700">
        Turn on notifications
      </label>
      <button 
        role="switch"
        :aria-checked="isOn"
        @click="toggle"
        class="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary3"
        :class="isOn ? 'bg-primary4' : 'bg-gray-200'"
      >
        <span class="sr-only"> Turn on notifications</span>
        <span 
          class="inline-block w-4 h-4 transform bg-white rounded-full transition-transform"
          :class="isOn ? 'translate-x-6' : 'translate-x-1'"
        ></span>
      </button>
    </div>
  </template>

  
