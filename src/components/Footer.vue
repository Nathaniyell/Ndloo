<script setup>
import { RouterLink } from 'vue-router';
import RouteButton from "./RouteButton.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import logo from "../assets/images/ndloo-logo.png"
import FooterColumn from "./FooterColumn.vue"


const footerColumns = [
    {
        header: 'Product',
        links: [
            { linkTitle: 'Features', linkTo: '/features' },
            { linkTitle: 'Pricing', linkTo: '/pricing' },
            { linkTitle: 'Case studies', linkTo: '/case-studies' },
            { linkTitle: 'Reviews', linkTo: '/reviews' },
            { linkTitle: 'Updates', linkTo: '/updates' },
        ]
    },
    {
        header: 'Company',
        links: [
            { linkTitle: 'About', linkTo: '/about' },
            { linkTitle: 'Contact us', linkTo: '/contact' },
            { linkTitle: 'Careers', linkTo: '/careers' },
            { linkTitle: 'Culture', linkTo: '/culture' },
            { linkTitle: 'Blog', linkTo: '/blog' },
        ]
    },
    {
        header: 'Support',
        links: [
            { linkTitle: 'Getting started', linkTo: '/getting-started' },
            { linkTitle: 'Help center', linkTo: '/help-center' },
            { linkTitle: 'Server status', linkTo: '/server-status' },
            { linkTitle: 'Report a bug', linkTo: '/report-bug' },
            { linkTitle: 'Chat support', linkTo: '/chat-support' },
        ]
    }
];

</script>

<template>
    <footer
        class="bg-primary3 h-screen w-full text-light p-10">
    <div class="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-5 place-items-center items-stretch space-y-8 md:space-y-0 md:space-x-2 mt-14">
        <section class="flex flex-col space-y-6">
            <img :src="logo" class="w-3/5" alt="Logo">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores est tenetur, distinctio quos </p>
            <div class="flex space-x-4 items-center">
                <RouterLink to="">

                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </RouterLink>

                <RouterLink to="">

                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </RouterLink>
                <RouterLink to="">

                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </RouterLink>
                <RouterLink to="">

                    <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </RouterLink>



            </div>
        </section>
        <FooterColumn v-for="(column, index) in footerColumns" :key="index" :header="column.header"
            :links="column.links" />

        <div>
            <h4 class="font-semibold">Contacts us</h4>
            <div class="mt-4 flex flex-col space-y-2 text-light text-opacity-80">
  <a href="mailto:contact@company.com">
    <FontAwesomeIcon icon="fa-regular fa-envelope" />&nbsp;
    <span>contact@company.com</span>
  </a>
  
  <a href="tel:+14146875892">
    <FontAwesomeIcon icon="fa-solid fa-phone" />&nbsp;
    <span>(414) 687 - 5892</span>
  </a>
  
  <p>
    <FontAwesomeIcon icon="fa-solid fa-location-dot" />&nbsp;
    <span>Akwa Ibom, Nigeria</span>
  </p>
</div>
    </div>
    </div>
    </footer>
</template>