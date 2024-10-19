<script setup>

</script>

<template>
 <span class="loading-spinner"></span>
</template>

<style scoped>
.loading-spinner {
    border: 2px solid #f3f3f3;
    border-top: 2px solid black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>