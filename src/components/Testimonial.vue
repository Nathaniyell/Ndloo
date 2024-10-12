<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import sectionImg from "@/assets/images/hero2.png";

const testimonials = [
    {
        name: "V. Peter",
        testimonial: "Other dating apps were like shooting fish in a barrel. But my girlfriend and I clicked right away on Ndloo, and the conversation was effortless. We’ve been together for over a year."
    },
    {
        name: "Daniel B.",
        testimonial: "Ndloo's unique features, like virtual dates and detailed profiles, made my online dating experience much more enjoyable."
    },
    {
        name: "Tony S.",
        testimonial: "Finding a match on Ndloo was easy and fun. I appreciate the effort they put into creating a positive dating environment."
    }
];
</script>

<template>
    <div 
        class="text-white bg-primary3 mb-16 bg-blend-overlay bg-no-repeat grid place-items-center bg-cover bg-center md:h-screen overflow-x-hidden"
        :style="{ backgroundImage: `url(${sectionImg})` }"
    >
        <div class="w-11/12 lg:w-[85%] mx-auto flex flex-col justify-center items-center gap-16 py-20 text-center">
            <h5 class="text-5xl">What our users say</h5>
            
            <Splide
            :options="{ 
                    type: 'fade',  // Enable fade effect
                    arrows: false,
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: true,
                    pagination: true,
                    perPage: 1,
                    rewind: true,
                    speed: 800 // Adjust the speed of the fade effect
                  
                }"
                class="w-fit"
                
            >
                <SplideSlide v-for="(testimonial, index) in testimonials" :key="index">
                    <p class="text-2xl md:w-1/2 mx-auto">{{ testimonial.testimonial }}</p>
                    <p class="text-3xl mt-4">{{ testimonial.name }}</p>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>
<style scoped>

</style>