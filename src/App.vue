<script setup>
import MenuHeader from '@/components/MenuHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <MenuHeader />
  <div id="main">
    <RouterView />
  </div>
</template>

<style>
#main {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
