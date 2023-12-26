<script setup>
import { RouterView } from 'vue-router'
import { routerPush } from './router/routerFunctions'
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  const token = localStorage.getItem('token')

  if (!token) {
    routerPush('/login')
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
