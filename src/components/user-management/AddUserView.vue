<template>
    <div class="min-h-screen bg-gray-50">
      <NavBar />
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <UserForm @user-added="handleUserAdded" />
      </main>
      <SuccessMessage v-if="showSuccess" message="User added successfully!" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Navbar from './Navbar.vue'; 
  import UserForm from '@/components/UserForm.vue'
  import SuccessMessage from '@/components/user-management/SuccessMessage.vue'
  
  const showSuccess = ref(false)
  
  const handleUserAdded = () => {
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  }
  </script>