<script setup>
import picture1 from "@/assets/images/virtue.png"
import likedHeart from "@/assets/icons/heart.png"

const profileCardProps = defineProps({
    whoLikesMe: {
        type: Boolean,
        default: false,
    },
    dislikes: {
        type: Boolean,
        default: false,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    cardDetails: {
        type: Array,
        required: true,
        default: () => [{
            name: String,
            age: String,
            location: String,
            image: [String, Object]
        }]
    }
})

const pillBtns = ["Dogs", "Tech", "Hiphop"]
</script>

<template>
    <div v-for="(detail, index) in cardDetails" :key="index" class="relative w-[250px] rounded">
        <img :src="detail.image" class="w-full" alt="Profile Image">

        <div
            :class="['flex absolute top-2 px-2 text-white w-full items-center justify-between', isBlocked && 'flex-row-reverse']">
            <svg v-if="whoLikesMe" width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.827 27.7466C16.3737 27.9066 15.627 27.9066 15.1737 27.7466C11.307 26.4266 2.66699 20.92 2.66699 11.5866C2.66699 7.46663 5.98699 4.1333 10.0803 4.1333C12.507 4.1333 14.6537 5.30663 16.0003 7.11997C17.347 5.30663 19.507 4.1333 21.9203 4.1333C26.0137 4.1333 29.3337 7.46663 29.3337 11.5866C29.3337 20.92 20.6937 26.4266 16.827 27.7466Z"
                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else-if="dislikes" width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M29.3332 11.5866C29.3332 13.1733 29.0798 14.64 28.6398 16C26.5332 22.6667 20.0398 26.6533 16.8265 27.7467C16.3732 27.9067 15.6265 27.9067 15.1732 27.7467C14.3198 27.4533 13.2398 26.96 12.0798 26.2667C11.3332 25.8267 11.2132 24.7866 11.8265 24.1733L26.8665 9.13332C27.5865 8.41332 28.8532 8.71998 29.1065 9.70665C29.2532 10.3067 29.3332 10.9333 29.3332 11.5866Z"
                    fill="white" />
                <path
                    d="M30.0399 1.96004C29.6533 1.57338 29.0133 1.57338 28.6266 1.96004L25.5066 5.08004C24.4533 4.48004 23.2266 4.13338 21.9199 4.13338C19.5066 4.13338 17.3466 5.30671 15.9999 7.10671C14.6533 5.30671 12.4933 4.13338 10.0799 4.13338C5.98659 4.13338 2.66659 7.46671 2.66659 11.5867C2.66659 13.1734 2.91992 14.64 3.35992 16C4.22659 18.76 5.85326 21.0667 7.69326 22.8934L1.95992 28.6267C1.57326 29.0134 1.57326 29.6534 1.95992 30.04C2.15992 30.24 2.41326 30.3334 2.66659 30.3334C2.91992 30.3334 3.17326 30.24 3.37326 30.04L30.0399 3.37338C30.4266 2.98671 30.4266 2.34671 30.0399 1.96004Z"
                    fill="white" />
            </svg>
            <p v-else-if="isBlocked"
                class="grid place-items-center px-2 py-1 font-[550] rounded-md text-primary3 bg-white">Unblock</p>
            <img v-else :src="likedHeart" alt="Liked">
            <p>3 days ago</p>
        </div>

        <div
            class="absolute bottom-1 right-0 left-0 text-center rounded flex flex-col justify-between items-center gap-4 bg-black bg-opacity-25 p-2 pb-6 text-white">
            <div class="w-full flex items-center space-x-2 text-2xl text-white">
                <span class="h-3 w-3 rounded-full bg-[#1ED400]"></span>
                <h2>{{ detail.name }}</h2>
                <p>{{ detail.age }}</p>
            </div>

            <div class="flex items-center space-x-2">
                <svg width="20" height="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.56282 6.88347C5.52691 6.88347 4.68066 6.0421 4.68066 5.00132C4.68066 3.96054 5.52691 3.12402 6.56282 3.12402C7.59874 3.12402 8.44498 3.9654 8.44498 5.00618C8.44498 6.04696 7.59874 6.88347 6.56282 6.88347ZM6.56282 3.85354C5.93057 3.85354 5.41018 4.36907 5.41018 5.00618C5.41018 5.64329 5.92571 6.15882 6.56282 6.15882C7.19993 6.15882 7.71546 5.64329 7.71546 5.00618C7.71546 4.36907 7.19507 3.85354 6.56282 3.85354Z"
                        fill="white" />
                    <path
                        d="M6.56224 11.0611C5.84245 11.0611 5.11779 10.7888 4.55363 10.2489C3.11891 8.86773 1.53343 6.66458 2.13163 4.04318C2.67148 1.66495 4.74817 0.599854 6.56224 0.599854C6.56224 0.599854 6.56224 0.599854 6.5671 0.599854C8.38117 0.599854 10.4579 1.66495 10.9977 4.04804C11.5911 6.66945 10.0056 8.86773 8.57085 10.2489C8.00669 10.7888 7.28203 11.0611 6.56224 11.0611ZM6.56224 1.32937C5.14698 1.32937 3.32804 2.08321 2.84656 4.20367C2.32131 6.49436 3.76089 8.46892 5.0643 9.71883C5.90567 10.531 7.22367 10.531 8.06505 9.71883C9.36359 8.46892 10.8032 6.49436 10.2876 4.20367C9.8013 2.08321 7.97751 1.32937 6.56224 1.32937Z"
                        fill="white" />
                </svg>
                <p class="text-[14px]">{{ detail.location }}</p>
            </div>

            <div class="flex items-center justify-center space-x-2">
                <button
                    :class="[{ '!bg-primary3 !border-primary3': index === 0 }, 'rounded-xl border-[1.8px] border-white px-2 text-center bg-transparent']"
                    v-for="(pill, index) in pillBtns" :key="index">
                    {{ pill }}
                </button>
            </div>
        </div>
    </div>
</template>
