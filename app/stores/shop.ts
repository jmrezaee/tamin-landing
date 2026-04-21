import { defineStore } from "pinia";
import type { IShop } from "~/types";

export const Shop = defineStore("Shop", {
  state: () => ({}),
  actions: {
    async fetch(payload?: any) {
      try {
        const result = await useCustomFetch<object>("/minipay/shop/list", {
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
        const result = await useCustomFetch<IShop>(
          "/minipay/shop/show/" + payload.shop_id,
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
        return result as IShop;
      } catch (e: any) {
        return false;
      }
    },
  },
});

export function setupShopStore() {
  return Shop();
}
