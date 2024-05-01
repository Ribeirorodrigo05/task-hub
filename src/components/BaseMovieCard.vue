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

const getMovie = async () => {
  const { data } = await axios.get(props.name);
  movie.value = data;
  window.localStorage.setItem(props.name, JSON.stringify(data));
};

onMounted(async () => {
  const movieCache = window.localStorage.getItem(props.name);
  movieCache ? (movie.value = JSON.parse(movieCache)) : await getMovie();
});
</script>

<template>
  <div>
    <Card
      style="width: 14rem; overflow: hidden; padding: 0px; margin: 8px; min-height: 320px"
      class="card-style"
    >
      <template #header>
        <div
          class="centralize card-background"
          :style="`background-image: url(${movie.Poster});`"
        ></div>
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
        </div>
      </template>
      <template #content>
        <div class="card-content">
          <p class="m-0 card-text">
            {{ movie.Plot }}
          </p>
        </div>
      </template>
      <template #footer>
        <div class="card-footer"></div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss">
.card-style {
  background-color: #141312;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(13.5px);
  background: rgba(0, 0, 0, 0.808);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .p-card-body {
    padding: 8px;
  }

  .card-text {
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .card-text:hover {
    text-overflow: clip;
    width: 100%;
    animation: scroll 5s linear normal;

    @keyframes scroll {
      0% {
        text-indent: 0%;
      }
      100% {
        text-indent: -50%;
      }
    }
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'bebas neue', sans-serif;
  }

  .card-background {
    height: 256px;
    background-size: 100% 256px;
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
}
</style>
