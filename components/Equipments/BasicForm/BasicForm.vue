<template>
  <div class="flex flex-col mt-20">
    <div
      class="mb-5 flex items-center cursor-pointer justify-between from-green-300 to-green-500 bg-gradient-to-r px-2 rounded-lg"
      @click="onHandle"
    >
      <h3 class="text-xl text-zinc-50">Informações Básicas</h3>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="mx-3 text-zinc-50"
      />
    </div>
    <form :hidden="isHidden" @change="onChange">
      <div class="grid grid-cols-3 gap-5">
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Nome *</b></label>
          <input
            v-model="name"
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
          <p
            class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1"
          >
            {{ errors.name }}
          </p>
        </div>
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Modelo </b></label>
          <input
            v-model="model"
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
          <p
            class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1"
          >
            {{ errors.model }}
          </p>
        </div>
        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Marca </b></label>
          <input
            v-model="brand"
            type="text"
            class="w-full border border-zinc-400 p-2 rounded-lg"
          />
          <p
            class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1"
          >
            {{ errors.brand }}
          </p>
        </div>

        <div class="col-span-1">
          <label class="block text-gray-700 mt-5"><b>Categoria </b></label>

          <select
            class="w-full p-2 py-3 border border-zinc-400 rounded-lg"
            v-model="category"
          >
            <option value="Ar-condicionado">Ar-condicionado</option>
          </select>
          <p
            class="text-white text-center bg-red-300 rounded-lg px-2 text-sm mt-1"
          >
            {{ errors.category }}
          </p>
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
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(4, "Mínimo de 4 caracteres"),
  model: yup.string(),
  brand: yup.string(),
  category: yup.string(),
});

const { defineField, handleSubmit, errors, values, validate} = useForm({
  validationSchema: schema,
});

const [name] = defineField("name");
const [model] = defineField("model");
const [brand] = defineField("brand");
const [category] = defineField("category");

const isHidden = ref<boolean>(false);
function onHandle() {
  isHidden.value = !isHidden.value;
}

async function onChange() {
  const { valid } = await validate()

  store.basicValid = valid;
  
  const payload = {
    name: name.value,
    model: model.value,
    brand: brand.value,
    category: category.value,
  };

  store.basicInformations = {
    ...store.basicInformations,
    ...payload,
  };
}
</script>

<style scoped></style>
