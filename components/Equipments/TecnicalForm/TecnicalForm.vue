
<template>
  <div class="flex flex-col mt-20">
    <div class="flex items-center cursor-pointer" @click="onHandle">
      <h3 class="text-lg text-zinc-500">Informações Técnicas</h3>
      <font-awesome-icon :icon="['fas', 'chevron-down']" class="mx-3 "/>
    </div>
    <form :hidden="isHidden">
      <div class="grid grid-cols-3 gap-5">
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Potência </b></label>
          <input
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
        </div>
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Tensão </b></label>
          <input
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
        </div>
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Frequência </b></label>
          <input
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
        </div>

        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Corrente </b></label>
          <input
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
        </div>

        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Fator de Potência </b></label>
          <input
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
        </div>

        <div class="col-span-3">
          <label class="block text-gray-700 mt-5"><b>Descrição (opcional) </b></label>
          <textarea rows="10" class="w-full border border-zinc-400 p-2 rounded-lg"></textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

const isHidden = ref<boolean>(false)
function onHandle() {
  isHidden.value = !isHidden.value
}
</script>

<style scoped>
</style>
