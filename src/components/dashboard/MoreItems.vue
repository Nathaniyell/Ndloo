<script setup>
import NavItem from "./NavItem.vue";
import { caretIcon } from "@/data/data"



const props = defineProps({
    navItems: Array,
    moreItems: Array
});
</script>



<template>
    <div class="flex bg-black h-screen w-full left-0 overflow-y-scroll absolute bottom-0 flex-col p-4 gap-6 md:hidden">
        <section class="w-full flex items-center justify-between">
            <header>
                <h4 class="text-white text-xl">More</h4>
                <button @click="$emit('toggleMore')"
                    class="bg-white text-primary3 text-2xl  h-8 w-8 flex justify-center items-center rounded-full">x</button>
            </header>
        </section>
        <section class="w-full flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="bg-light rounded-full h-10 w-10"></div>
                <div>
                    <h4 class="text-light text-xl mb-1">Virtue Andrew</h4>
                    <p class="text-[#767676]">lorem@mail.com</p>
                </div>
            </div>
            <button class="text-white">
                <img :src="caretIcon" alt="Icon" />
            </button>
        </section>
        <NavItem v-for="item in navItems" :key="item.label" :item="item" />
        <NavItem v-for="item in moreItems" :key="item.label" :item="item" />
    </div>
</template>