<template>
  <div class="flex flex-col mt-5 bg-zinc-50 rounded-lg px-10 py-10">
    <div class="flex flex-col mb-5">
      <h3 class="text-2xl"><b>Seleção de Equipamentos</b></h3>
      <span class="text-zinc-700">
        Selecione os equipamentos para realizar o calculo de consumo
      </span>
    </div>

    <EquipmentsTableList
      :equipments="data?.equipments ?? []"
      :selectable="true"
      @selected="onPrepareEquipments($event)"
    />
  </div>

  <div class="flex flex-col mt-10 bg-zinc-50 rounded-lg px-10 py-10 mb-20">
    <h3 class="text-2xl"><b>Consumo de Energia</b></h3>

    <div class="grid grid-cols-3 gap-10">
      <div class="col-span-1">
        <div class="flex flex-col">
          <label class="block text-gray-700 mt-5"><b>Período</b></label>

          <input
            @click="onHandleCalendar"
            v-model="dates"
            type="text"
            class="w-full border p-2 rounded-lg bg-zinc-50"
          />
          <VDatePicker
            v-model.range="range"
            :attributes="attrs"
            v-if="isCalendarOpened"
          >
            <template #footer>
              <div class="w-full px-4 pb-3">
                <button
                  @click="onHandleCalendar"
                  class="from-zinc-700 to-zinc-900 text-white hover:from-green-300 hover:to-green-500 bg-gradient-to-r font-bold w-full px-3 py-1 rounded-md"
                >
                  Fechar
                </button>
              </div>
            </template></VDatePicker
          >
        </div>
      </div>

      <div class="col-span-1">
        <label class="block text-gray-700 mt-5"><b>Tarifa</b></label>
        <input
          type="number"
          class="w-full border p-2 rounded-lg bg-zinc-50"
          v-model="taxes"
          step="0.1"
        />
      </div>

      <div class="col-span-1">
        <div class="flex justify-end w-full mt-5">
          <button
            @click="onCalculate"
            class="py-3 px-5 from-zinc-700 to-zinc-900 rounded-lg text-white hover:from-green-300 hover:to-green-500 bg-gradient-to-r mt-5"
          >
            <b>CALCULAR</b>
          </button>
        </div>
      </div>

      <div class="my-2"></div>
    </div>

    <div class="grid grid-cols-3 gap-10">
      <div class="col-span-1" v-for="(item, index) in equipments" :key="index">
        <div
          class="flex justify-between items-end py-2 px-3 border-b border-zinc-400 h-full"
        >
          <div class="flex flex-col">
            <h3 class="mb-0">{{ item.name }}</h3>
            <span class="text-zinc-600 text-sm mt-2">{{ item.brand }}</span>
            <span class="text-zinc-600 text-sm">{{ item.potency }}</span>
          </div>
          <div class="flex">
            <div class="flex items-end">
              <input
                v-model="item.hours"
                type="number"
                class="border-b border-zinc-400 mx-3 px-2 py-2"
                style="width: 70px"
              />
              <span>Hrs por dia</span>
            </div>
          </div>
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

const taxes = ref<number>(0.8);
const router = useRouter();

const isCalendarOpened = ref<boolean>(false);
const range = ref({ start: new Date(2025, 2, 1), end: new Date(2025, 2, 5) });
const dates = computed(
  () =>
    `${new Date(range.value.start).toLocaleDateString()} ${new Date(
      range.value.end
    ).toLocaleDateString()}`
);
const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates: new Date(),
  },
]);

function onHandleCalendar() {
  isCalendarOpened.value = !isCalendarOpened.value;
}

const equipments = ref<any[]>([]);
const { data, status } = await useFetch<{ equipments: Equipment[] }>(
  "/api/equipments",
  { lazy: true }
);

const body = computed(() => {
  return {
    range: [range.value.start, range.value.end],
    equipments: equipments.value,
    taxes: taxes.value,
  };
});

const {
  execute,
  error,
  data: results,
} = await useFetch("/api/analyze", {
  method: "post",
  body,
  immediate: false,
  headers: { authorization: "token" },
  watch: false,
  lazy: true
});

async function onCalculate() {
  execute();
}

function onPrepareEquipments(eqp: Equipment[]) {
  const previous = equipments.value;
  equipments.value = [];
  eqp.map((el) => {
    const exists = previous.filter((eqp) => eqp.id == el.id);
    if (exists.length == 0) {
      equipments.value.push({ ...el, hours: 0 });
    } else {
      equipments.value.push(exists[0]);
    }
  });
}
</script>

<style></style>
