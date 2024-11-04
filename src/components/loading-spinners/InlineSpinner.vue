<script setup lang="ts">
import LoadingSpinner from './LoadingSpinner.vue';

interface Props {
  className?: string;
}

withDefaults(defineProps<Props>(), {
  className: ''
});
</script>

<template>
  <LoadingSpinner 
    size="sm" 
    :className="className"
  />
</template> 