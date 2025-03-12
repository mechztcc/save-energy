<template>
  <div class="flex flex-col w-full bg-zinc-50 rounded-lg px-10 py-10 mt-5">
    <div class="flex">
      <h3 class="text-2xl"><b>Produtos</b></h3>
    </div>
    <div class="flex justify-end mb-5">
      <input
        type="text"
        placeholder="Buscar"
        class="outline-0 border border-zinc-300 rounded-lg px-3"
      />

      <button
        class="px-5 py-2 border border-zinc-300 hover:border-transparent hover:from-green-300 hover:to-green-500 bg-gradient-to-r rounded-lg hover:text-white mx-3"
      >
        <font-awesome-icon :icon="['fas', 'filter']" class="" />
        Filtros
      </button>

      <button
        class="px-5 py-2 from-green-300 to-green-500 bg-gradient-to-r rounded-lg text-white"
      >
        <font-awesome-icon :icon="['fas', 'plus']" class="" />
        Novo
      </button>
    </div>
    <table class="w-full" border="1">
      <thead class="border-b border-zinc-300 bg-zinc-100">
        <tr class="">
          <th class="py-3 px-2 text-start">Nome</th>
          <th class="text-start">Categoria</th>
          <th class="text-start">Potência</th>
          <th class="text-start">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-zinc-300"
          v-for="(item, index) in 5"
          :key="index"
        >
          <td class="py-4 px-2">Produto 1</td>
          <td>Eletrônico</td>
          <td>500W</td>
          <td class="">
            <button
              class="border border-zinc-300 px-3 py-2 text-red-400 rounded-lg hover:bg-red-400 hover:text-white hover:border-transparent"
            >
              <font-awesome-icon :icon="['fas', 'trash']" class="" />
            </button>

            <button
              class="mx-3 border border-zinc-300 px-3 py-2 text-zinc-600 rounded-lg hover:bg-yellow-400 hover:text-white hover:border-transparent"
            >
              <font-awesome-icon :icon="['fas', 'pen']" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-between mt-8">
      <div class="flex text-zinc-600">
        <span>Mostrando 1 de 10 items</span>
      </div>

      <div class="flex">
        <button
          class="border border-zinc-300 px-3 py-2 rounded-lg text-zinc-600 mx-1"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>

        <button
          class="border border-zinc-300 px-3 py-2 rounded-lg mx-1"
          :class="{
            'bg-green-400 text-white': item == 1,
            ' text-zinc-600': item !== 1,
          }"
          v-for="(item, index) in 5"
          :key="index"
        >
          {{ item }}
        </button>

        <button
          class="border border-zinc-300 px-3 py-2 rounded-lg text-zinc-600 mx-1"
        >
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "sidebar",
});
</script>

<style></style>
