<script setup>
import { HERO_MOVIES } from '@/utils/hero_movies';
import TitleLabel from '@/components/TitleLabel.vue';

const text = {
  message: '#Trending',
  padding: 10,
  margin: 10
};
</script>

<template>
  <div>
    <section>
      <TitleLabel :text="text" />
    </section>
    <section style="display: flex">
      <BaseMovieCard v-for="(movie, index) in HERO_MOVIES" :key="index" :name="movie" />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
