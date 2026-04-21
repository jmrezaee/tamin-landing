import { defineStore } from "pinia";
import type { IBranch } from "~/types";

export const Branch = defineStore("Branch", {
  state: () => ({}),
  actions: {
    async fetch(payload?: any) {
      try {
        const result = await useCustomFetch<object>("/minipay/branch/list", {
          method: "GET",
          params: payload,
        })
          .then((res: any) => {
            if (res.meta?.status) {
              return res;
            }
            return false;
          })
          .catch((e) => {
            return false;
          });
        return result as object;
      } catch (e: any) {
        return false;
      }
    },
    async show(payload: any) {
      try {
        const result = await useCustomFetch<IBranch>(
          "/minipay/branch/show/" + payload.shop_id,
          {
            method: "GET",
          },
        )
          .then((res: any) => {
            if (res.meta?.status) {
              return res.data;
            }
            return false;
          })
          .catch((e) => {
            return false;
          });
        return result as IBranch;
      } catch (e: any) {
        return false;
      }
    },
  },
});

export function setupBranchStore() {
  return Branch();
}
