<script setup>
import ProfileCard from '@/components/ProfileCard.vue';
import emptyMatch from "@/assets/images/empty match.png"
import RouteButton from '@/components/RouteButton.vue';
import { getMatches } from '@/composables/FetchData';
import { ref } from 'vue';
import FullPageSpinner from '@/components/loading-spinners/FullPageSpinner.vue';

const data = ref([])
const isLoading = ref(true)

const matchesArray = async () => {
  isLoading.value = true
  try {
    const response = await getMatches()
    console.log('Raw response:', response)

    const matchesData = response.data.matches || [];

    data.value = matchesData.map(match => ({
      cardDetails: [{
        name: `${match.profile.firstname} ${match.profile.lastname}`,
        age: calculateAge(match.profile.dob),
        location: match.profile.country.name,
        image: match.profile.images[0].image,
        distance: `${Math.round(match.distance / 1000)}km away`
      }]
    }))
    console.log('Transformed matches:', data.value)
  } catch (error) {
    console.error('Error fetching matches:', error)
  } finally {
    isLoading.value = false
  }
}

// Helper function to calculate age from DOB
const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age.toString();
}

matchesArray()
</script>

<template>
  <!-- Show loading spinner while data is being fetched -->
  <FullPageSpinner v-if="isLoading" text="Finding your matches..." />

  <!-- Show content after loading -->
  <div v-else class="grid place-items-center">
    <div :class="[
      'grid gap-6 place-items-center w-full',
      data.length > 0 ? 'md:grid-cols-2 lg:grid-cols-3' : 'w-full flex justify-center items-center'
    ]">
      <!-- Message and image for empty state -->
      <div v-if="data.length < 1" class="flex flex-col items-center justify-center gap-10 w-full md:w-1/2">
        <img :src="emptyMatch" alt="Empty Match">
        <div class="text-center flex flex-col gap-5 items-center">
          <p class="font-semibold">Oops, you haven't found one yet</p>
          <RouteButton 
            text="Find Match" 
            styles="bg-primary3 border-primary3 text-white cursor-pointer hover:bg-transparent hover:text-primary3 hover:border-primary3" 
            linkTo="/dashboard" 
            ariaLabel="Find Match" 
          />
        </div>
      </div>

      <!-- Profile cards for matches -->
      <template v-else>
        <ProfileCard 
          v-for="(match, index) in data" 
          :key="index"
          v-bind="match"
        />
      </template>
    </div>
  </div>
</template>

  