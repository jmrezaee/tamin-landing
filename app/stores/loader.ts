import { defineStore } from "pinia";

interface LoadingState {
  loading: boolean;
}

export const useLoader = defineStore("useLoader", {
  state: (): LoadingState => ({
    loading: false,
  }),
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading;
    },
  },
});

// Exporting a function to simplify store setup
export function setupLoadingStore() {
  return useLoader();
}
