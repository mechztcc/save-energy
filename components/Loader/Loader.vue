<template>
  <div
    v-if="load"
    class="absolute h-screen top-2 left-0 right-0 w-full bg-zinc-50 opacity-80 z-10 flex flex-col justify-center items-center"
  >
    <font-awesome-icon
      :icon="['fas', 'lightbulb']"
      bounce
      class="text-7xl text-green-400"
    />
    <h3 class="text-2xl mt-5 text-zinc-700">Carregando...</h3>
  </div>
  <div class="bg-zinc-100 flex w-full h-2">
    <div class="loading-bar h-2"></div>
  </div>
</template>

<script setup lang="ts">
const load = ref<boolean>(false);
</script>

<style scoped></style>
