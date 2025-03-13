
<template>
  <div class="flex flex-col mt-20">
    <div class="mb-5 flex items-center justify-between cursor-pointer from-green-300 to-green-500 bg-gradient-to-r px-2 rounded-lg" @click="onHandle">
      <h3 class="text-xl text-zinc-50">Informações Técnicas</h3>
      <font-awesome-icon :icon="['fas', 'chevron-down']" class="mx-3 text-zinc-50"/>
    </div>
    <form class="" :hidden="isHidden" @change="onChange">
      <div class="grid grid-cols-3 gap-5">
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Potência *</b></label>
          <input
            v-model="potency"
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
          <p class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1">{{ errors.potency }}</p>

        </div>
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Tensão </b></label>
          <input
            v-model="tension"
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
          <p class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1">{{ errors.tension }}</p>

        </div>
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Frequência </b></label>
          <input
            v-model="freq"
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
          <p class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1">{{ errors.freq }}</p>

        </div>

        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Corrente </b></label>
          <input
            v-model="chain"
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
          <p class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1">{{ errors.chain }}</p>

        </div>

        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Fator de Potência </b></label>
          <input
            v-model="potencyFact"
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
          <p class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1">{{ errors.potencyFact }}</p>

        </div>

        <div class="col-span-3">
          <label class="block text-gray-700 mt-5"><b>Descrição (opcional) </b></label>
          <textarea rows="5" class="w-full border border-zinc-400 p-2 rounded-lg" v-model="description"></textarea>
          <p class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1">{{ errors.description }}</p>
          
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

const store = useCreateEquipmentStore();

const schema = yup.object({
  potency: yup.string().required("O nome é obrigatório").min(4, 'Mínimo de 4 caracteres'),
  tension: yup.string(),
  freq: yup.string(),
  chain: yup.string(),
  potencyFact: yup.string(),
  description: yup.string(),
});

const { defineField, handleSubmit, errors, validate } = useForm({
  validationSchema: schema,
});

const [potency] = defineField("potency");
const [tension] = defineField("tension");
const [freq] = defineField("freq");
const [chain] = defineField("chain");
const [potencyFact] = defineField("potencyFact");
const [description] = defineField("description");

async function onChange() {
  const { valid} = await validate()

  store.tecnicalValid = valid;
  
  const payload = {
    potency: potency.value,
    tension: tension.value,
    freq: freq.value,
    chain: chain.value,
    potencyFact: potencyFact.value,
    description: description.value,
  };

  store.tecnicalnformations = {
    ...store.tecnicalnformations,
    ...payload,
  };
}

const isHidden = ref<boolean>(false)
function onHandle() {
  isHidden.value = !isHidden.value
}
</script>

<style scoped>
</style>
