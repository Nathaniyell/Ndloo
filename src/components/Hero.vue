<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';


import RouteButton from './RouteButton.vue';

// Import images
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';

// Hero slide data
const slides = [
    {
        image: hero2,
        title: 'Find your match. Ignite your journey',
        description: 'Connect with people and make memories.',
        buttonText: 'Join Now',
        link: '/signup',
    },
    {
        image: hero1,
        title: 'Find your spark. Let love Ignite',
        description: 'Explore profiles and find your love story.',
        buttonText: 'Get started',
        link: '/signup',
    },

    {
        image: hero3,
        title: 'Discover love. Embrace the future',
        description: 'Your love story begins here.',
        buttonText: 'Explore',
        link: '/signup',
    },
];

</script>

<template>
    <div class="relative overflow-x-hidden">
        <Swiper :slides-per-view="1" :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }" loop
            :modules="[Autoplay, Pagination]" class="h-full w-full">
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <div class="relative h-screen">
                    <img class="size-full object-fill" :src="slide.image" :alt="'Hero Image ' + (index + 1)" />
                    <div
                        class="absolute bottom-12 left-0 right-0 w-11/12 lg:w-[85%] mx-auto flex flex-col space-y-6 text-light">
                        <h1 class="text-4xl md:text-6xl w-4/5 md:w-3/5 lg:w-2/5">{{ slide.title }}</h1>
                        <p>{{ slide.description }}</p>
                        <RouteButton :text="slide.buttonText" :linkTo="slide.link" :ariaLabel="slide.buttonText" styles="bg-primary3 border-primary3 text-white hover:bg-transparent hover:text-primary3 hover:border-white hover:bg-white" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
.swiper-pagination-bullet {
    background-color: #ccc !important;
    cursor: pointer;
}

.swiper-pagination-bullet-active {
    background-color: #000 !important;
}
</style>