<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
    message: String,
    padding: {
      type: Number,
      default: '10px'
    },
    margin: {
      type: Number,
      default: '10px'
    }
  }
});
</script>

<template>
  <div>
    <h1 :style="`padding:${props.text.padding}px; margin:${props.text.margin}px`">
      {{ props.text.message }}
    </h1>
  </div>
</template>

<style lang="scss" scoped></style>
