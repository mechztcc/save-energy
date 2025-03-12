import { defineStore } from "pinia";

export const useCreateEquipmentStore = defineStore("storeCreateEquipment", {
  state: () => ({
    stage: 1 as number,
    basicValid: false as boolean,
    tecnicalValid: false as boolean,
    basicInformations: {} as any,
    tecnicalnformations: {} as any,
  }),
  actions: {},
});
