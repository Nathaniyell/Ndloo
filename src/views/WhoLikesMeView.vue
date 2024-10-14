<script setup>
import ProfileCard from '@/components/ProfileCard.vue';
import profile1 from "@/assets/images/profile1.png"
import profile2 from "@/assets/images/profile2.png"
import virtue from "@/assets/images/virtue.png"

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
    <h1>Who Likes Me</h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">

        <ProfileCard :cardDetails="data" :whoLikesMe="true" />
    </div>
</template>