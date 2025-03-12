<template>
  <div class="flex flex-col py-5 px-15 rounded-lg bg-zinc-50">
    <nuxt-link to="/equipments/list">
      <div class="flex px-4 py-3 rounded-lg cursor-pointer bg-zinc-100 w-fit text-xl mb-10">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </nuxt-link>

    <font-awesome-icon :icon="['fas', 'plug']" class="text-xl" />
    <div class="flex items-center justify-center ">
      <h3 class="text-2xl mx-3"><b>Cadastro de Equipamento</b></h3>
    </div>

    <span class="text-center text-zinc-600">
      Registre e gerencie seus dispositivos de forma fácil e segura.
    </span>

    <!-- <div class="flex justify-center mt-5">
      <div
        class="flex flex-col items-center mx-5 cursor-pointer"
        v-for="(item, index) in items"
        :key="index"
        @click="store.onHandleStage(item.position)"
      >
        <span
          class="px-3 py-2 text-center text-white rounded-lg w-10"
          :class="{
            'bg-green-400': store.stage == item.position,
            'bg-green-200': store.stage !== item.position,
          }"
        >
          <b>{{ item.position }}</b>
        </span>
        <span :class="{ 'text-zinc-400': store.stage !== item.position }">{{
          item.label
        }}</span>
      </div>
    </div> -->

    <EquipmentsBasicForm  />
    <EquipmentsTecnicalForm  />

    <div class="flex justify-end mt-5">
      <button class="w-fit py-3 px-5 from-zinc-700 to-zinc-900 rounded-lg text-white  hover:from-green-300 hover:to-green-500 bg-gradient-to-r mt-5" @click="store.onSubmit"><b>SALVAR</b></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EquipmentsTecnicalForm } from "#components";

const store = useCreateEquipmentStore();

const items = [
  {
    position: 1,
    label: "Informações Básicas",
  },
  {
    position: 2,
    label: "Informações Técnicas",
  },
  {
    position: 3,
    label: "Monitoramento",
  },
];
</script>

<style scoped></style>
