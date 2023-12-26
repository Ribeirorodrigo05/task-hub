<script setup>
import { RouterView, useRouter } from 'vue-router'
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  const token = localStorage.getItem('token')

  if (!token) {
    const router = useRouter()
    router.push('/login').catch((err) => {
      console.error(`router push error: ${err}`)
    })
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
