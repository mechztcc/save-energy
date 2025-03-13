<template>
  <template v-if="store.isLoading  == 'pending'">
    <div class="absolute h-screen top-2 left-0 w-full bg-zinc-50 opacity-80 z-10 flex flex-col justify-center items-center">
      <font-awesome-icon :icon="['fas', 'lightbulb']" bounce class="text-7xl text-green-400"/>
      <h3 class="text-2xl mt-5 text-zinc-700">Carregando...</h3>
    </div>
    <div class="bg-zinc-100 flex w-full h-2">
      <div class="loading-bar h-2"></div>
    </div>
  </template>

  <div class="flex relative">
    <Sidebar />
    <div class="px-5 w-full">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useGlobalLoaderStore();
</script>

<style>
.loading-bar {
  background: linear-gradient(90deg, #48bb78 0%, #f6ad55 50%, #48bb78 100%);
  background-size: 200% 100%;
  animation: loadingAnimation 2s linear infinite;
  height: 100%;
  width: 100%;
}

@keyframes loadingAnimation {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
