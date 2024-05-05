<script setup>
import { heroMovies } from '@/utils/hero_movies';
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
    <section>
      <Carousel
        :value="heroMovies"
        :numVisible="5"
        :numScroll="1"
        circular
        :autoplayInterval="5000"
        :showIndicators="false"
      >
        <template #item="movie">
          <BaseMovieCard :name="movie.data.name" />
        </template>
      </Carousel>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
