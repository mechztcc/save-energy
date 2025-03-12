import { defineStore } from "pinia";

export const useCreateEquipmentStore = defineStore("storeCreateEquipment", {
  state: () => ({
    stage: 1 as number,
  }),
  actions: {
    onHandleStage(stage: number) {
      this.$state.stage = stage;
    },
  },
});
