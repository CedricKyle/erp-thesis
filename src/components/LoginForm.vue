<script setup>
import { User, KeyRound } from 'lucide-vue-next'
import { ref } from 'vue'

const userId = ref('')
const userPassword = ref('')
const submitForm = () => {
  console.log(userId.value, userPassword.value)
  // Perform form submission logic here
  // Example: axios.post('/api/login', { userId: userId.value, userPassword: userPassword.value })
  //.then(response => console.log(response))
  //.catch(error => console.error(error))
  // Reset form inputs
}
</script>

<template>
  <div class="flex w-full justify-center items-center h-screen bg-auth">
    <div class="flex justify-center items-center w-full max-w-md bg-white shadow-md h-96">
      <img class="h-full" src="../assets/img/Landing-Page.jpg" alt="" />
    </div>
    <div class="w-full max-w-md p-5 bg-primaryColor shadow-md h-96">
      <div class="form-container flex flex-col items-center w-full h-full">
        <div class="logo flex flex-col items-center">
          <img class="h-15 w-15" src="../assets/img/countryside-logo.png" alt="this is logo img" />
          <h1 class="text-2xl font-bold text-secondaryColor">Welcome back,</h1>
        </div>

        <div class="input-container card items-center w-96 p-5">
          <form @submit.prevent="submitForm" class="w-80 mx-auto">
            <div class="flex flex-col items-center w-full gap-3">
              <!-- User ID Input -->
              <div class="relative w-full">
                <input
                  v-model="userId"
                  type="text"
                  class="input w-full pr-10"
                  placeholder="User ID"
                />
                <User class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size="20" />
              </div>
              <!-- Password Input -->
              <div class="relative w-full">
                <input
                  v-model="userPassword"
                  type="password"
                  class="input w-full pr-10"
                  placeholder="Password"
                />
                <KeyRound
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size="20"
                />
              </div>
              <!-- Submit Button -->
              <button type="submit" class="btn bg-secondaryColor border-none w-full">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
