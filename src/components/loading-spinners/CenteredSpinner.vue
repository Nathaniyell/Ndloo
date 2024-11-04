<script setup lang="ts">
import LoadingSpinner from './LoadingSpinner.vue';  

interface Props {
  text?: string;
  variant?: 'default' | 'primary' | 'secondary';
}

withDefaults(defineProps<Props>(), {
  text: '',
  variant: 'default'
});
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <LoadingSpinner 
      size="lg" 
      :variant="variant"
      :text="text"
    />
  </div>
</template> 