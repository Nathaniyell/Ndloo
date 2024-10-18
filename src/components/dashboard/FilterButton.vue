<script setup>
import { filterIcon } from "@/store/data"
const props = defineProps({
    showFilter: Boolean
});
</script>


<template>
    <button @click="$emit('toggleFilter')" class="h-8 w-8">
        <img :src="filterIcon" alt="Icon" />
    </button>
</template>