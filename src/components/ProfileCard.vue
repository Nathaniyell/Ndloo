<script setup>
import picture1 from "@/assets/images/virtue.png"

const pillBtns = ["Dogs", "Tech", "HipHop"]
</script>

<template>
    <div class="relative rounded w-72">
        <img :src="picture1" class="w-fit" alt="">
        <div class="absolute bottom-1 left-1 flex flex-col justify-center items-center gap-4 bg-black bg-opacity-25 p-2 text-white">
            <div class="w-full flex items-center space-x-2 text-2xl text-white">
                <span class="h-3 w-3 rounded-full bg-[#1ED400]"></span>
                <h2>Virtue Andrew</h2>

                <p>23</p>
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
                <p class="text-[14px]">51 Kilometers away from you</p>
            </div>
            <div class="flex items-center justify-center space-x-2">
                <button :class="['rounded-md border border-white px-2 text-center bg-transparent', {'!bg-primary3': index === 0 }]" v-for="(pill, index) in pillBtns" :key="index">
                    {{ pill }}
                </button>
            </div>
        </div>
    </div>
</template>