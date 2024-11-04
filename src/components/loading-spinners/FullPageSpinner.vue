<script setup lang="ts">
import LoadingSpinner from './LoadingSpinner.vue';

interface Props {
  text?: string;
}

withDefaults(defineProps<Props>(), {
  text: 'Loading...'
});
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
    <div class="flex flex-col items-center">
      <LoadingSpinner 
        size="lg" 
        variant="primary"
        :text="text"
      />
    </div>
  </div>
</template> 