<template>
  <div class="bg-zinc-100 flex h-1 w-full">
    <div class="loading-bar" v-if="store.isLoading  == 'pending'"></div>
  </div>

  <div class="flex relative"  :class="{ 'opacity-50': store.isLoading == 'pending' }">
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
