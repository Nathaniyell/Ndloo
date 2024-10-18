<script setup>
import { filterIcon } from "@/data/data"
const props = defineProps({
    showFilter: Boolean
});
</script>


<template>
    <button @click="$emit('toggleFilter')" class="filter-button">
        <img :src="filterIcon" alt="Icon" />
    </button>
</template>