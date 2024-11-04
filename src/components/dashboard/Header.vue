<script setup>
import { useRoute, useRouter } from 'vue-router';
import FilterButton from './FilterButton.vue';
import { getHeaderText } from "@/stores/data"
import { ref, watch } from 'vue';
import { profilePicture } from '@/stores/data';
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';



defineProps({
    toggleFilter: Function,
    showFilter: Boolean
})

const route = useRoute();
const router = useRouter();
const headerText = ref(getHeaderText(route.path));
const userStore = useUserStore();

// Computed property for avatar
const userAvatar = computed(() => {
    return userStore.user?.avatar || profilePicture;
});


// Watch for changes to route.path to update headerText dynamically
watch(() => route.path, (newPath) => {
    headerText.value = getHeaderText(newPath);
});




</script>



<template>
    <header class="w-full px-4 h-[4rem] flex items-center justify-between">
        <div>
            <p class="text-[#767676]" v-if="route.path === '/dashboard/'">Good morning,</p>
            <p class="text-dark text-xl font-semibold">{{ headerText }}</p>
        </div>
        <aside class="flex items-center space-x-3">
            <FilterButton v-if="route.path === '/dashboard/'" @click="toggleFilter" />
            <button 
                @click="router.push('/dashboard/profile')" 
                class="h-10 w-10 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center"
            >
                <img 
                    :src="userAvatar" 
                    :alt="`${userStore.user?.firstname || 'User'}'s Profile Picture`"
                    class="h-full w-full object-cover"
                    @error="$event.target.src = profilePicture"
                />
            </button>
        </aside>
    </header>
</template>