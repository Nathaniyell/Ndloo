<template>
  <div class="bg-white shadow sm:rounded-lg">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="user in users" :key="user.id" class="px-6 py-5 flex items-center">
        <!-- User list item content from original template -->
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  users: {
    type: Array,
    required: true
  }
})
</script> 