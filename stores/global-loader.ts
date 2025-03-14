import type { AsyncDataRequestStatus } from "#app";
import { defineStore } from "pinia";


export const useGlobalLoaderStore = defineStore("useGlobalLoader", {
  state: () => ({
    isLoading: 'idle' as AsyncDataRequestStatus,
  }),
  actions: {
    onHandle() {
      this.isLoading == 'idle' ? this.isLoading = 'pending' : this.isLoading = 'idle'
      console.log(this.isLoading);
      
    }
  },
});
