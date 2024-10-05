<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
// import SwiperCore, { Pagination } from "swiper";
import RouteButton from './RouteButton.vue';

// Import images
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';

// Hero slide data
const slides = [
    {
        image: hero1,
        title: 'Find your spark. Let love Ignite',
        description: 'Explore profiles and find your love story.',
        buttonText: 'Get started',
        link: '/sign-up',
    },
    {
        image: hero2,
        title: 'Find your match. Ignite your journey',
        description: 'Connect with people and make memories.',
        buttonText: 'Join Now',
        link: '/sign-up',
    },
    {
        image: hero3,
        title: 'Discover love. Embrace the future',
        description: 'Your love story begins here.',
        buttonText: 'Explore',
        link: '/sign-up',
    },
];
</script>

<template>
    <div class="-z-10 relative overflow-x-hidden">
        <Swiper :slides-per-view="1" :space-between="50"  :pagination="{ clickable: true }" :loop="true" class="h-screen w-full">
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <div class="relative h-screen">
                    <img class="w-full h-full" :src="slide.image" :alt="'Hero Image ' + (index + 1)" />
                    <div
                        class="absolute bottom-12 left-0 right-0 w-11/12 mx-auto flex flex-col space-y-6 text-light">
                        <h1 class="text-4xl md:text-6xl w-4/5 md:w-3/5 lg:w-2/5">{{ slide.title }}</h1>
                        <p>{{ slide.description }}</p>
                        <RouteButton :text="slide.buttonText" textColor="text-light" bgColor="bg-primary3"
                            borderColor="border-primary3" :linkTo="slide.link" :ariaLabel="slide.buttonText"
                            hoverBgColor="hover:bg-light" hoverTextColor="hover:text-primary3"
                            hoverBorderColor="hover:border-light" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div>Lorem20000</div>
</template>
