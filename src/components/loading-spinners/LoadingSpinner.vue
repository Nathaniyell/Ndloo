<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default',
  className: '',
  text: ''
});

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16'
};

const variantClasses = {
  default: 'text-gray-400',
  primary: 'text-stykiteBlue',
  secondary: 'text-gray-700'
};

const spinnerClasses = computed(() => {
  return [
    'animate-spin',
    sizeClasses[props.size],
    variantClasses[props.variant],
    props.className
  ].join(' ');
});

const textClasses = computed(() => {
  return [
    'mt-2 text-sm font-medium',
    variantClasses[props.variant]
  ].join(' ');
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Replace Loader2 with an SVG spinner -->
    <svg 
      :class="spinnerClasses"
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        class="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        stroke-width="4"
      />
      <path 
        class="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <p v-if="text" :class="textClasses">
      {{ text }}
    </p>
  </div>
</template>