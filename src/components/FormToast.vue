<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface ToastProps {
  error?: string;
  success?: string;
}

const props = defineProps<ToastProps>();

// Local reactive state to control toast visibility and content
const toastMessage = ref<string>('');
const toastType = ref<'error' | 'success' | null>(null);
const isVisible = ref(false);

// Watch props for changes to display toast messages
watch(
  () => props.error,
  (newError) => {
    if (newError) {
      toastMessage.value = newError;
      toastType.value = 'error';
      showToast();
    }
  }
);

watch(
  () => props.success,
  (newSuccess) => {
    if (newSuccess) {
      toastMessage.value = newSuccess;
      toastType.value = 'success';
      showToast();
    }
  }
);

// Function to show toast and hide after timeout
const showToast = () => {
  isVisible.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, 10000); // Toast will disappear after 3 seconds
};

const toastClasses = computed(() => [
  'fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out text-white p-4 rounded-md shadow-lg max-w-lg w-10/12 mx-auto text-center',
  isVisible.value ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
  toastType.value === 'error' ? 'bg-red-600' : 'bg-green-600',
]);
</script>

<template>
  <transition name="slide-fade">
    <div v-if="isVisible" :class="toastClasses">
      {{ toastMessage }}
    </div>
  </transition>
</template>

<style scoped>
/* Add custom transition for slide-fade */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
