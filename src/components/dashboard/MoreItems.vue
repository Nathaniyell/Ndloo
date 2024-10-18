<script setup>
import NavItem from "./NavItem.vue";
import { caretIcon } from "@/store/data"; 
import { useShowMoreStore } from "@/store/state";


const showMoreStore = useShowMoreStore();

const toggleMore = () => {
    showMoreStore.toggleShowMore();
}
const props = defineProps({
    navItems: Array,
    moreItems: Array
});
</script>



<template>
    <div class="flex bg-black h-screen w-full left-0 overflow-y-scroll absolute bottom-0 flex-col p-4 gap-6 md:hidden">

        <header class="w-full flex items-center justify-between">
            <h4 class="text-white text-xl">More</h4>
            <button @click="toggleMore"
                class="bg-white text-primary3 text-2xl  h-8 w-8 flex justify-center items-center rounded-full">x</button>
        </header>
        <section class="w-full flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="bg-light rounded-full h-10 w-10"></div>
                <div>
                    <h4 class="text-light text-xl mb-1">Virtue Andrew</h4>
                    <p class="text-[#767676]">lorem@mail.com</p>
                </div>
            </div>
            <button class="text-white">
                <img class="w-8 h-8" :src="caretIcon" alt="Icon" />
            </button>
        </section>


        <NavItem @click="toggleMore" labelStyle="!block" containerStyle="!justify-start self-start !flex-row" v-for="item in navItems"
            :key="item.label" :item="item" />
        <NavItem @click="toggleMore" labelStyle="!block" containerStyle="!justify-start self-start !flex-row" v-for="item in moreItems"
            :key="item.label" :item="item" />
    </div>
</template>