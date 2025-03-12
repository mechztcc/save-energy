import { defineStore } from "pinia";

export const useCreateEquipmentStore = defineStore("storeCreateEquipment", {
  state: () => ({
    stage: 1 as number,
    basicInformations: {},
    tecnicalnformations: {},
  }),
  actions: {
    onSubmit() {
      const payload = {
        basicInforations: this.basicInformations,
        tecnicalinformations: this.tecnicalnformations,
      };
    },
  },
});
