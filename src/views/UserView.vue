<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Navigation Bar -->
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
  
      <!-- Main Content -->
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-6">
        <!-- Add User Form -->
        <div class="bg-white shadow sm:rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-6">Add New User</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Input -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>
  
            <!-- Email Input -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>
  
            <!-- Role Select -->
            <div>
              <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
              <select
                id="role"
                v-model="formData.role"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
              </select>
            </div>
  
            <!-- Status Toggle -->
            <div class="flex items-center">
              <button
                type="button"
                @click="formData.status = !formData.status"
                :class="[
                  formData.status ? 'bg-indigo-600' : 'bg-gray-200',
                  'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                ]"
              >
                <span
                  :class="[
                    formData.status ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                  ]"
                />
              </button>
              <span class="ml-3 text-sm">{{ formData.status ? 'Active' : 'Inactive' }}</span>
            </div>
  
            <!-- Profile Photo Upload -->
            <div>
              <label class="block text-sm font-medium text-gray-700">Profile Photo</label>
              <div class="mt-1 flex items-center space-x-4">
                <img
                  v-if="formData.photoPreview"
                  :src="formData.photoPreview"
                  alt="Preview"
                  class="h-12 w-12 rounded-full object-cover"
                />
                <input
                  type="file"
                  @change="handlePhotoUpload"
                  accept="image/*"
                  class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
              <p v-if="errors.photo" class="mt-1 text-sm text-red-600">{{ errors.photo }}</p>
            </div>
  
            <div class="flex justify-end">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
  
        <!-- User List -->
        <div class="bg-white shadow sm:rounded-lg">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="user in users" :key="user.id" class="px-6 py-5 flex items-center">
              <img
                :src="user.photo"
                alt=""
                class="h-12 w-12 rounded-full object-cover"
              />
              <div class="ml-4 flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">{{ user.name }}</h3>
                    <p class="text-sm text-gray-500">{{ user.email }}</p>
                  </div>
                  <div class="flex items-center space-x-4">
                    <span
                      :class="[
                        user.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                        'inline-flex rounded-full px-2 text-xs font-semibold leading-5'
                      ]"
                    >
                      {{ user.status ? 'Active' : 'Inactive' }}
                    </span>
                    <span class="text-sm text-gray-500">{{ user.role }}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
  
      <!-- Success Message -->
      <div
        v-if="showSuccess"
        class="fixed bottom-4 right-4 bg-green-50 p-4 rounded-md shadow-lg"
      >
        <div class="flex">
          <div class="flex-shrink-0">
            <!-- <CheckCircleIcon class="h-5 w-5 text-green-400" /> -->
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-green-800">User added successfully!</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
//   import { CheckCircleIcon } from 'lucide-vue-next'
  
  // Navigation links
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Add User', href: '/add' },
    { name: 'Manage Users', href: '/manage' }
  ]
  
  // State
  const showForm = ref(true)
  const showSuccess = ref(false)
  const users = ref([])
  const errors = ref({})
  
  // Form data
  const formData = ref({
    name: '',
    email: '',
    role: 'user',
    status: true,
    photo: null,
    photoPreview: null
  })
  
  // Mock data
  const mockUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      status: true,
      photo: '/placeholder.svg?height=48&width=48'
    }
  ]
  
  // Load mock data and stored data
  onMounted(() => {
    const storedUsers = localStorage.getItem('users')
    users.value = storedUsers ? JSON.parse(storedUsers) : mockUsers
  })
  
  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  // Handle photo upload
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        errors.value.photo = 'Please upload an image file'
        return
      }
      
      formData.value.photo = file
      const reader = new FileReader()
      reader.onload = (e) => {
        formData.value.photoPreview = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  
  // Handle form submission
  const handleSubmit = () => {
    // Reset errors
    errors.value = {}
  
    // Validate
    if (!validateEmail(formData.value.email)) {
      errors.value.email = 'Please enter a valid email address'
      return
    }
  
    // Create new user
    const newUser = {
      id: Date.now(),
      name: formData.value.name,
      email: formData.value.email,
      role: formData.value.role,
      status: formData.value.status,
      photo: formData.value.photoPreview || '/placeholder.svg?height=48&width=48'
    }
  
    // Add to users array
    users.value.push(newUser)
  
    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users.value))
  
    // Show success message
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  
    // Reset form
    formData.value = {
      name: '',
      email: '',
      role: 'user',
      status: true,
      photo: null,
      photoPreview: null
    }
  }
  </script>