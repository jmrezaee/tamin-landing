import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    // Add your state properties here
    counter: 0,
    user: null as any,
  }),

  getters: {
    // Add your getters here
    doubleCounter: (state) => state.counter * 2,
  },

  actions: {
    // Add your actions here
    increment() {
      this.counter++;
    },

    decrement() {
      this.counter--;
    },

    updateUser(userData: any) {
      this.user = userData;
    },
  },
});
