<template>
  <div class=" lef-0 top-0 h-screen bg-zinc-50 flex flex-col justify-between px-3 py-2 shadow">
    <div class="flex flex-col">
      <nuxt-link :to="item.url"  v-for="(item, index) in items" :key="index">
        <button class="flex cursor-pointer items-center px-8 w-full py-3 hover:from-green-300 hover:to-green-500 bg-gradient-to-r hover:text-zinc-50 rounded-lg">
          <font-awesome-icon :icon="item.icon" />
          <b class="mx-2">{{ item.label }}</b>
        </button>
      </nuxt-link>
    </div>

    <nuxt-link to="login">
      <span class="px-8 cursor-pointer py-3 mb-3">Sair</span>
    </nuxt-link>

  </div>
</template>

<script setup lang="ts">
const items = reactive<{ icon: []; label: string, url: string }>([
  { icon: ['fas', 'lightbulb'], label: "Equipamentos", url: 'equipments-list' },
  { icon: ["fas", "chart-simple"], label: "Consumo", url: '' },
  { icon: ["fas", "gear"], label: "Configurações", url: '' },
]);
</script>

<style scoped></style>
