<script setup>
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Add User', href: '/add' },
  { name: 'Manage Users', href: '/manage' }
]
</script>


<template>
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex space-x-8">
            <router-link 
              v-for="link in navigation" 
              :key="link.name"
              :to="link.href"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-500"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
