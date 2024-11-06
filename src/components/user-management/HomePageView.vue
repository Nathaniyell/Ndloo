<template>
    <div class="min-h-screen bg-gray-50">
      <NavBar />
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <UserList :users="users" />
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import NavBar from './Navbar.vue'
  import UserList from '@/components/user-management/UserList.vue'
  
  const users = ref([])
  
  onMounted(() => {
    const storedUsers = localStorage.getItem('users')
    users.value = storedUsers ? JSON.parse(storedUsers) : [{
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      status: true,
      photo: '/placeholder.svg?height=48&width=48'
    }]
  })
  </script>