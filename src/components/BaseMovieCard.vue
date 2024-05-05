<script setup>
import { onMounted, ref } from 'vue';
import { AxiosProvider } from '@/providers/axios';
const axios = new AxiosProvider();
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const movie = ref({});
const rating = ref(0);

const getMovie = async () => {
  const { data } = await axios.get(props.name);
  movie.value = data;
  window.localStorage.setItem(props.name, JSON.stringify(data));
};
const getGenre = (genre) => {
  console.log(genre.split(','));
};

onMounted(async () => {
  const movieCache = window.localStorage.getItem(props.name);
  movieCache ? (movie.value = JSON.parse(movieCache)) : await getMovie();
});
</script>

<template>
  <div>
    <Card
      style="width: 14rem; overflow: hidden; padding: 0px; margin: 8px; height: 320px"
      class="card-style"
      :style="`background-image: url(${movie.Poster});`"
    >
      <template #header>
        <div class="centralize card-background"></div>
      </template>
      <template #title>
        <div class="card-text card-title">
          {{ movie.Title }}
        </div>
      </template>
      <template #subtitle>
        <div class="card-info">
          <span class="card-info-subtitle">{{ `Year: ${movie.Year}` }}</span>
          <span class="card-info-subtitle">{{ `Duration: ${movie.Runtime}` }}</span>
          <span class="card-info-subtitle">{{ `Box office: ${movie.BoxOffice}` }}</span>
        </div>
      </template>
      <template #content>
        <div class="card-content">
          <!-- <i class="pi pi-user" style="font-size: 1rem"></i
          >-->
          <span class="card-text">Sua avaliação</span>
          <Rating v-model="rating" :cancel="false" />
        </div>
      </template>
      <template #footer>
        <div class="card-footer" v-if="movie.genre">
          <Chip v-for="(genre, index) in getGenre(movie.Genre)" :key="index" :label="genre" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss">
.card-style {
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(13.5px);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px;
  background-size: 100%;
  cursor: pointer;

  .p-card-body {
    display: none;
  }

  .card-text {
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'bebas neue', sans-serif;
  }

  .card-background {
    height: 160px;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 8px 8px 0 0;
    padding: 0;
    margin: 0;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
  .card-content {
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
}

.card-style:hover {
  .p-card-body {
    display: block;
    height: 100%;
    padding: 8px;
    background: rgba(0, 0, 0, 0.774);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    animation: slide-up 50ms ease-out;
  }
  @keyframes slide-up {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
