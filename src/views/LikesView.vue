<script setup>
import ProfileCard from '@/components/ProfileCard.vue';
import profile1 from "@/assets/images/profile1.png"
import profile2 from "@/assets/images/profile2.png"
import virtue from "@/assets/images/virtue.png"
import RouteButton from '@/components/RouteButton.vue';
import emptyMatch from "@/assets/images/empty match.png"

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
    <div class="grid place-items-center">
        <!-- <h1>Likes</h1> -->
        <div :class="[
            'grid gap-6 place-items-center w-full',
            data.length > 0 ? 'md:grid-cols-2 lg:grid-cols-3' : 'w-full flex justify-center items-center'
        ]">
            <ProfileCard :cardDetails="data" />
            <!-- Message and image for empty state -->
            <div v-if="data.length < 1" class="flex flex-col items-center justify-center gap-10 w-full md:w-1/2">
                <img :src="emptyMatch" alt="Empty Match">
                <div class="text-center flex flex-col gap-5 items-center">
                    <p class="font-semibold">Oops, you haven't found one yet</p>
                    <!-- <RouterLink to="/dashbboard" class="bg-primary3 border-primary3 text-white cursor-pointer hover:bg-transparent hover:text-primary3 hover:border-primary3" >Find Matche</RouterLink> -->
                    <RouteButton text="Find Match"
                        styles="bg-primary3 border-primary3 text-white cursor-pointer hover:bg-transparent hover:text-primary3 hover:border-primary3"
                        linkTo="/dashboard" ariaLabel="Find Match" />
                </div>
            </div>
        </div>


    </div>

</template>