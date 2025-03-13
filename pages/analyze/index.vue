<template>
  <div class="flex flex-col mt-5 bg-zinc-50 rounded-lg px-10 py-10">
    <div class="flex flex-col mb-5">
      <h3 class="text-2xl"><b>Seleção de Equipamentos</b></h3>
      <span class="text-zinc-700"
        >Selecione os equipamentos para realizar o calculo de consumo</span
      >
    </div>

    <EquipmentsTableList :equipments="data?.equipments ?? []" />
  </div>

  <div class="flex flex-col mt-10 bg-zinc-50 rounded-lg px-10 py-10">
    <h3 class="text-2xl"><b>Consumo de Energia</b></h3>

    <div class="grid grid-cols-3">
      <div class="col-span-1">
        <div class="flex flex-col">
          <label class="block text-gray-700 mt-5"><b>Período</b></label>
          <input
            type="text"
            class="w-full border p-2 rounded-lg"
          />
        </div>
      </div>

      <div class="col-span-1 col-start-3">
        <div class="flex justify-end w-full mt-5">
          <button class="py-3 px-5 from-zinc-700 to-zinc-900 rounded-lg text-white hover:from-green-300 hover:to-green-500 bg-gradient-to-r mt-5"><b>CALCULAR</b></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Equipment } from "@prisma/client";

definePageMeta({
  layout: "sidebar",
});

const storeLoader = useGlobalLoaderStore();

const { data, status, error } = await useFetch<{ equipments: Equipment[] }>(
  "/api/equipments"
);
storeLoader.isLoading = status.value;
</script>

<style></style>
