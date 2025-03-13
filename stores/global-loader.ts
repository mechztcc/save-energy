import type { AsyncDataRequestStatus } from "#app";
import { defineStore } from "pinia";


export const useGlobalLoaderStore = defineStore("useGlobalLoader", {
  state: () => ({
    isLoading: 'idle' as AsyncDataRequestStatus,
  }),
  actions: {},
});
