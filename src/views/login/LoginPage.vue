<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-1/3">
      <img src="https://terabox.com/s/1Vy4CEca939f-H0A_mFNaWQ" />
      <h1 class="text-3xl font-bold mb-6">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  // Perform login logic here
}
</script>

<style lang="scss" scoped>
/* Add your custom styles here */
</style>
