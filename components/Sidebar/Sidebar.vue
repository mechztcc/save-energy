<template>
  <div
    class="lef-0 top-0 sticky h-screen bg-zinc-50 flex flex-col justify-between px-3 py-2 shadow"
  >
    <div class="flex flex-col">
      <nuxt-link :to="item.url" v-for="(item, index) in items" :key="index">
        <button
        :class="{'from-green-300 to-green-500 bg-gradient-to-r text-white':item.active() }"
          class="flex cursor-pointer items-center px-8 w-full py-3 my-1 hover:from-green-300 hover:to-green-500 bg-gradient-to-r hover:text-zinc-50 rounded-lg"
        >
          <font-awesome-icon :icon="item.icon" />
          <b class="mx-2">{{ item.label }}</b>
        </button>
      </nuxt-link>
    </div>

    <nuxt-link to="/login" class="flex mb-5 w-full">
      <span class="px-8 cursor-pointer border hover:border-zinc-400 border-transparent w-full rounded-lg py-3">Sair</span>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const items = reactive<
  {
    icon: string[]; // Corrigido para aceitar um array de strings
    label: string;
    url: string;
    active: () => boolean;
  }[]
>([
  {
    icon: ['fas', 'house'],
    label: "Início",
    url: "/",
    active: () => route.fullPath  == '/',
  },
  {
    icon: ["fas", "lightbulb"],
    label: "Equipamentos",
    url: "/equipments/list",
    active: () => route.fullPath.includes('equipments'),
  },
  {
    icon: ["fas", "chart-simple"],
    label: "Consumo",
    url: "/analyze",
    active: () => route.fullPath === "/analyze",
  },
  {
    icon: ["fas", "gear"],
    label: "Configurações",
    url: "/",
    active: () => route.fullPath === "/",
  },
]);
</script>

<style scoped></style>