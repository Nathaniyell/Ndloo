<script setup>
import feature1 from "@/assets/images/feature1.png"
import feature2 from "@/assets/images/feature2.png"
import feature3 from "@/assets/images/feature3.png"
import Card from "./Card.vue"


const featuresData = [
    {
        image: feature1,
        title: "Secure and safe  connection between you and your partner"
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
    <div class="w-11/12 mx-auto py-10 leading-8">
<h3 class="text-4xl mb-3">Make the best use of <br><span class="text-primary2">Ndloo</span> today </h3>
<div class="grid md:grid-cols-3 gap-8 md:place-items-center">
    <Card v-for="(data, index) in featuresData" :title="data.title" :image="data.image" />
</div>
    </div>
</template>