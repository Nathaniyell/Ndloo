<script setup>
import ProfileCard from '@/components/ProfileCard.vue';
import profile1 from "@/assets/images/profile1.png"
import profile2 from "@/assets/images/profile2.png"
import virtue from "@/assets/images/virtue.png"
import AsideProfile from '@/components/AsideProfile.vue';

const data = [
    {
        location: "51 Kilometers away from you",
        image: virtue,
        name: "Virtue Andrew",
        age: "23"
    },
    {
        location: "51 Kilometers away from you",
        image: profile1,
        name: "Virtue Andrew",
        age: "22"
    },
    {
        location: "51 Kilometers away from you",
        image: profile2,
        name: "Virtue Andrew",
        age: "25"
    },
    {
        location: "51 Kilometers away from you",
        image: profile1,
        name: "Virtue Andrew",
        age: "22"
    },
    {
        location: "51 Kilometers away from you",
        image: profile2,
        name: "Virtue Andrew",
        age: "25"
    },
    {
        location: "51 Kilometers away from you",
        image: virtue,
        name: "Virtue Andrew",
        age: "23"
    },


]

</script>

<template>
    <div class="grid gap-10 lg:gap-4 lg:grid-cols-[2fr_1fr] px-4 lg:pr-4">
        <div class="grid md:grid-cols-2 gap-6 place-items-center md:gap-4">

            <ProfileCard :cardDetails="data" :dislikes="true" />
        </div>
        <AsideProfile />
    </div>
</template>