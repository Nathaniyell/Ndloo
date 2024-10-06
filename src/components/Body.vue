<script setup>
import feature1 from "@/assets/images/feature1.png"
import feature2 from "@/assets/images/feature2.png"
import feature3 from "@/assets/images/feature3.png"
import sectionImg from "@/assets/images/hero2.png"
import Card from "./Card.vue"

const featuresData = [
    {
        image: feature1,
        title: "Secure and safe connection between you and your partner"
    },
    {
        image: feature2,
        title: "Advanced matching algorithms"
    },
    {
        image: feature3,
        title: "Easy communication and best user interface"
    },
]
</script>

<template>
    <div class="w-11/12 lg:w-[85%] mx-auto py-20 leading-8">
        <h3 class="text-4xl mb-10">
            Make the best use of <br>
            <span class="text-primary2">Ndloo</span> today
        </h3>
        <div class="grid md:grid-cols-3 gap-8 md:place-items-center md:items-stretch">
            <Card v-for="(data, index) in featuresData" :key="index" :title="data.title" :image="data.image" />
        </div>
    </div>
    <div
        class="text-white bg-primary3 mb-16 bg-blend-overlay bg-no-repeat grid place-items-center bg-cover bg-center md:h-screen"
        :style="{ backgroundImage: `url(${sectionImg})` }"
    >
        <div class="w-11/12 lg:w-[85%] mx-auto flex flex-col justify-center items-center gap-16 py-20 text-center">
            <h5 class="text-5xl">What our users say</h5>
            <p class="text-2xl">
                Other dating apps were like shooting fish in a barrel. But my girlfriend and I clicked right away on Ndloo, and the conversation was effortless. We’ve been together for over a year.
            </p>
            <p class="text-5xl">V. Peter</p>
        </div>
    </div>
</template>
