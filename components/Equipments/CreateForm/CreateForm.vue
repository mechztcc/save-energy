
<template>
  <div class="flex flex-col py-5 px-5 rounded-lg bg-zinc-50 mt-5">
    <div class="flex items-center justify-center">
      <font-awesome-icon :icon="['fas', 'plug']" class="text-xl"/>
      <h3 class="text-2xl mx-3"><b>Cadastro de Equipamento</b></h3>
    </div>

    <span class="text-center">Registre e gerencie seus dispositivos de forma fácil e segura.</span>

    <div class="flex justify-center mt-15">
      <div class="flex flex-col items-center mx-5" v-for="(item, index) in items" :key="index">
        <span class="px-3 py-2  text-center text-white rounded-lg w-10" :class="{ 'bg-green-400': item.active, 'bg-green-200': !item.active }">
          <b>{{ item.position }}</b>
        </span>
        <span :class="{ 'text-zinc-400': !item.active }">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const items = [
  {
    position: 1,
    label: 'Informações Básicas',
    active: true
  },{
    position: 2,
    label: 'Informações Técnicas',
    active: false
  },{
    position: 3,
    label: 'Monitoramento',
    active: false
  },
]
</script>

<style scoped>
</style>
