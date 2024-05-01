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

onMounted(async () => {
  const { data } = await axios.get(props.name);
  movie.value = data;
});
</script>

<template>
  <div>
    <Card style="width: 25rem; overflow: hidden; padding: 8px; margin: 8px">
      <template #header>
        <img alt="" :src="movie.Poster" style="width: 100%" />
      </template>
      <template #title>{{ movie.Title }}</template>
      <template #subtitle>
        <span>{{ `Year: ${movie.Year}` }}</span>
        <span>{{ `Duration: ${movie.Runtime}` }}</span>
      </template>
      <template #content>
        <p class="m-0 bluegray-900--text-color">
          {{ movie.Plot }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped></style>
