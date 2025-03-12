<template>
  <div class="flex flex-col py-5 px-15 rounded-lg bg-zinc-50">
    <nuxt-link to="/equipments/list">
      <div
        class="flex px-4 py-3 rounded-lg cursor-pointer bg-zinc-100 w-fit text-xl mb-10"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </nuxt-link>

    <font-awesome-icon :icon="['fas', 'plug']" class="text-xl" />
    <div class="flex items-center justify-center">
      <h3 class="text-2xl mx-3"><b>Cadastro de Equipamento</b></h3>
    </div>

    <span class="text-center text-zinc-600">
      Registre e gerencie seus dispositivos de forma fácil e segura.
    </span>

    <EquipmentsBasicForm />
    <EquipmentsTecnicalForm />

    <div class="flex justify-end mt-5">
      <button
        :disabled="status == 'pending'"
        class="w-fit py-3 px-5 from-zinc-700 to-zinc-900 rounded-lg text-white hover:from-green-300 hover:to-green-500 bg-gradient-to-r mt-5"
        @click="onValidate()"
      >
        <b v-if="status !== 'pending'">SALVAR</b>
        <font-awesome-icon :icon="['fas', 'circle-notch']" v-if="status == 'pending'"/>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EquipmentsTecnicalForm } from "#components";

const store = useCreateEquipmentStore();

function onValidate() {
  if (!store.basicValid || !store.tecnicalValid) {
    return;
  }

  execute();
}

const { data, status, error, refresh, clear, execute } = await useAsyncData(
  "createEquipments",
  async () => {
    return $fetch("/api/equipments", {
      method: "POST",
      body: {
        basic: store.basicInformations,
        tecnical: store.tecnicalnformations,
      },
    });
  }
);

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
