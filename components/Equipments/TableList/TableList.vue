<template>
  <div
    class="flex flex-col w-full bg-zinc-50 rounded-lg"
    :class="{ 'mt-5 px-10 py-10': props.spaced }"
  >
    <div class="flex" v-if="props.showTitle">
      <h3 class="text-2xl"><b>Equipamentos</b></h3>
    </div>
    <div class="flex justify-end mb-8">
      <input
        type="text"
        placeholder="Buscar"
        class="outline-0 border border-zinc-300 rounded-lg px-3"
      />

      <button
        class="px-5 py-2 border border-zinc-300 hover:border-transparent hover:from-green-300 hover:to-green-500 bg-gradient-to-r rounded-lg hover:text-white ml-3"
      >
        <font-awesome-icon :icon="['fas', 'filter']" class="" />
        Filtros
      </button>

      <nuxt-link to="/equipments/create">
        <button
          v-if="showTitle"
          class="px-5 py-2 from-green-300 to-green-500 bg-gradient-to-r rounded-lg text-white ml-3"
        >
          <font-awesome-icon :icon="['fas', 'plus']" class="" />
          Novo
        </button>
      </nuxt-link>
    </div>
    <table class="w-full" border="1">
      <thead class="border-b border-zinc-300 bg-zinc-100">
        <tr class="">
          <th class="py-3 px-2 text-start"></th>
          <th class="py-3 px-2 text-start">Nome</th>
          <th class="text-start">Categoria</th>
          <th class="text-start">Potência</th>
          <th class="text-start">Corrente</th>
          <th class="text-start">Modelo</th>
          <th class="text-start">Marca</th>
          <th class="text-start">Tensão</th>
          <th class="text-start">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-zinc-300"
          v-for="(item, index) in paginatedEquipments"
          :key="index"
        >
          <td class="py-4 px-2 text-sm text-zinc-700">
            <input
              type="checkbox"
              :checked="selected.some((el) => el.id == item.id)"
              @change="onHandleSelected(item, $event)"
            />
          </td>
          <td class="py-4 px-2 text-sm text-zinc-700">
            {{ item.name ?? "Não informado" }}
          </td>
          <td class="py-4 px-2 text-sm text-zinc-700">
            <span v-if="item.category" class="bg-green-300 px-2 rounded-full">{{
              item.category
            }}</span>
            <span
              class="bg-zinc-300 rounded-full px-3 text-white"
              v-if="!item.category"
              >Não informado</span
            >
          </td>
          <td class="py-4 px-2 text-sm text-zinc-700">
            {{ item.potency ?? "Não informado" }}
          </td>
          <td class="py-4 px-2 text-sm text-zinc-700">
            {{ item.chain ?? "Não informado" }}
          </td>
          <td class="py-4 px-2 text-sm text-zinc-700">
            {{ item.model ?? "Não informado" }}
          </td>
          <td class="py-4 px-2 text-sm text-zinc-700">
            {{ item.brand ?? "Não informado" }}
          </td>
          <td class="py-4 px-2 text-sm text-zinc-700">
            {{ item.tension ?? "Não informado" }}
          </td>

          <td class="">
            <button
              class="border border-zinc-300 px-3 py-2 text-red-400 rounded-lg hover:bg-red-400 hover:text-white hover:border-transparent"
            >
              <font-awesome-icon :icon="['fas', 'trash']" class="" />
            </button>

            <button
              class="mx-3 border border-zinc-300 px-3 py-2 text-zinc-600 rounded-lg hover:bg-green-400 hover:text-white hover:border-transparent"
            >
              <font-awesome-icon :icon="['fas', 'pen']" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-between mt-8">
      <div class="flex text-zinc-600">
        <span>Mostrando 1 de {{ props.equipments.length }} items</span>
      </div>

      <div class="flex">
        <button
          @click="changePage(pagination.actualPage - 1)"
          class="border border-zinc-300 px-3 py-2 rounded-lg text-zinc-600 mx-1"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>

        <button
          @click="changePage(item)"
          class="border border-zinc-300 px-3 py-2 rounded-lg mx-1 hover:bg-green-400 hover:text-white hover:border-transparent"
          :class="{
            'bg-green-400 text-white border-transparent':
              item == pagination.actualPage,
            ' text-zinc-600': item !== pagination.actualPage,
          }"
          v-for="(item, index) in pagination.totalPages"
          :key="index"
        >
          {{ item }}
        </button>

        <button
          @click="changePage(pagination.actualPage + 1)"
          class="border border-zinc-300 px-3 py-2 rounded-lg text-zinc-600 mx-1"
        >
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Equipment } from "@prisma/client";

const props = defineProps<{
  equipments: Equipment[];
  showTitle?: boolean;
  spaced?: boolean;
  selectable?: boolean;
}>();
const emits = defineEmits(["selected"]);

const selected = ref<Equipment[]>([]);
function onHandleSelected(eqp: Equipment, event: any) {
  const { checked } = event.target;

  if (checked) {
    selected.value.push(eqp);
    return;
  } else {
    selected.value = selected.value.filter((el) => el.id != eqp.id);
    return;
  }
}

let pagination = reactive<{
  totalPages: number;
  pages: number[];
  actualPage: number;
  perPage: number;
  offset: number;
}>({ totalPages: 0, pages: [], actualPage: 1, perPage: 5, offset: 0 });

onMounted(() => {
  pagination.totalPages = Math.ceil(
    props.equipments.length / pagination.perPage
  );
  pagination.pages = Array.from(
    { length: pagination.totalPages },
    (_, i) => i + 1
  );
  pagination.offset = (pagination.actualPage - 1) * pagination.perPage;
});

const paginatedEquipments = computed(() => {
  const start = pagination.offset;
  const end = pagination.offset + pagination.perPage;
  return props.equipments.slice(start, end);
});

function changePage(page: number) {
  if (page >= 1 && page <= pagination.totalPages) {
    pagination.actualPage = page;
    pagination.offset = (page - 1) * pagination.perPage;
  }
}
</script>

<style scoped></style>
