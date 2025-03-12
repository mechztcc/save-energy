<template>
  <div class="flex flex-col mt-20">
    <h3 class="text-lg text-zinc-500">Informações Básicas</h3>
    <form class="">
      <div class="grid grid-cols-3 gap-5">
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Nome </b></label>
          <input
            type="password"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
        </div>
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Modelo </b></label>
          <input
            type="password"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
        </div>
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Marca </b></label>
          <input
            type="password"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
        </div>

        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Categoria </b></label>

          <select class="w-full p-2 py-3 border border-zinc-400 rounded-lg">
            <option value="Ar-condicionado">Ar-condicionado</option>
          </select>
        </div>
        <div class="col-span-2">
          <label class="block text-gray-700 mt-5"><b>Descrição (opcional) </b></label>
          <textarea rows="10" class="w-full border border-zinc-400 p-2 rounded-lg"></textarea>
        </div>
      </div>
    </form>

    <hr class="w-full mt-20 mb-5 text-zinc-400">
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
