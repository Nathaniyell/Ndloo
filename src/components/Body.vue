<script setup>
import feature1 from "@/assets/images/feature1.png"
import feature2 from "@/assets/images/feature2.png"
import feature3 from "@/assets/images/feature3.png"
import sectionImg from "@/assets/images/hero2.png"
import support from "@/assets/icons/24-support.png"
import security from "@/assets/icons/security-safe.png"
import bitcoin from "@/assets/icons/bitcoin-card.png"
import profile from "@/assets/icons/profile-tick.png"
import phone from "@/assets/icons/phone.png"
import report from "@/assets/icons/report.png"
import Card from "./Card.vue"
import ServiceCard from "./ServiceCard.vue"

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
const serviceData = [
    {
        image: support,
        title: "24/7 Support Service"
    },
    {
        image: security,
        title: "Secured Connection"
    },
    {
        image: phone,
        title: "Easy user interface"
    },
    {
        image: bitcoin,
        title: "Crypto payment method"
    },
    {
        image: profile,
        title: "Custom profile fields"
    },
    {
        image: report,
        title: "Abuse report facility"
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
            <Card v-for="(feature, index) in featuresData" :key="index" :title="feature.title" :image="feature.image" />
        </div>
    </div>
    <div class="text-white bg-primary3 mb-16 bg-blend-overlay bg-no-repeat grid place-items-center bg-cover bg-center md:h-screen"
        :style="{ backgroundImage: `url(${sectionImg})` }">
        <div class="w-11/12 lg:w-[85%] mx-auto flex flex-col justify-center items-center gap-16 py-20 text-center">
            <h5 class="text-5xl">What our users say</h5>
            <p class="text-2xl">
                Other dating apps were like shooting fish in a barrel. But my girlfriend and I clicked right away on
                Ndloo, and the conversation was effortless. We’ve been together for over a year.
            </p>
            <p class="text-5xl">V. Peter</p>
        </div>
    </div>
    <div class="bg-light">
        <div class="w-11/12 lg:w-[85%] mx-auto py-20 leading-8">
            <h3 class="text-4xl mb-10">
                Why use<span class="text-primary2 ml-1">Ndloo</span> to find <br> your perfect match?
            </h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:place-items-center md:items-stretch">
                <ServiceCard v-for="(service, index) in serviceData" :key="index" :title="service.title"
                    :icon="service.image" />
            </div>
        </div>
        <div class="flex flex-col items-center pb-10">
            <h1 class="text-3xl capitalize">get the app now!</h1>
        </div>
    </div>

</template>
