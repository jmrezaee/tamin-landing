import { defineStore } from "pinia";
import type { IShopCategory } from "~/types";

export const ShopCategory = defineStore("ShopCategory", {
  state: () => ({
    list: [
      {
        id: 2,
        name: "لوازم خانگی و آشپزخانه",
        display_name: "خانه و آشپزخانه",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690332_xfJMb6eZxQ.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "لوازم برقی و غیربرقی خانه، ظروف آشپزی، وسایل دکوراسیون و محصولات مرتبط با آشپزخانه",
        is_active: true,
        order: 0,
        created_at: "2025-08-06T18:10:39.000000Z",
      },
      {
        id: 3,
        name: "مد و پوشاک",
        display_name: "مد و پوشاک",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690393_k5oee2nfQw.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "فروشگاه‌های لباس، کفش، کیف، اکسسوری و محصولات مرتبط با پوشاک زنانه، مردانه و بچه‌گانه",
        is_active: true,
        order: 0,
        created_at: "2025-08-06T18:11:28.000000Z",
      },
      {
        id: 4,
        name: "بیمه و خدمات مالی",
        display_name: "بیمه",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690409_wJYUUc9ZGB.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "شرکت‌های بیمه، بانک‌ها، مؤسسات اعتباری و خدمات مالی مانند وام و سرمایه‌گذاری",
        is_active: true,
        order: 0,
        created_at: "2025-08-06T18:12:07.000000Z",
      },
      {
        id: 6,
        name: "پزشکی و سلامت",
        display_name: "پزشکی و سلامت",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690534_9aLV5TvNXG.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "داروخانه‌ها، تجهیزات پزشکی، محصولات بهداشتی، مکمل‌های غذایی و مراکز درمانی",
        is_active: true,
        order: 0,
        created_at: "2025-08-08T22:02:04.000000Z",
      },
      {
        id: 7,
        name: "سفر و گردشگری",
        display_name: "سفر و گردشگری",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690568_EmIAxB3qi1.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "آژانس‌های مسافرتی، هتل‌ها، مراکز اقامتی، خدمات تور و بلیط‌های سفر",
        is_active: false,
        order: 0,
        created_at: "2025-08-08T22:02:48.000000Z",
      },
      {
        id: 8,
        name: "لوازم خودرو",
        display_name: "لوازم خودرو",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690597_CW5fUp9xYe.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "قطعات یدکی، لوازم جانبی خودرو، خدمات تعمیرکاران و فروشگاه‌های مرتبط با وسایل نقلیه",
        is_active: true,
        order: 0,
        created_at: "2025-08-08T22:03:17.000000Z",
      },
      {
        id: 9,
        name: "آموزشی و فرهنگی",
        display_name: "آموزشی و فرهنگی",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690626_5wUEFZ205W.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "مدارس، آموزشگاه‌ها، فروشگاه‌های کتاب، لوازم التحریر و محصولات فرهنگی",
        is_active: true,
        order: 0,
        created_at: "2025-08-08T22:03:46.000000Z",
      },
      {
        id: 10,
        name: "ابزار و تجهیزات",
        display_name: "ابزار و تجهیزات",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690655_2RN8XcaCTh.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "ابزارهای صنعتی، ساختمانی، باغبانی و لوازم فنی مورد استفاده در مشاغل مختلف",
        is_active: true,
        order: 0,
        created_at: "2025-08-08T22:04:15.000000Z",
      },
      {
        id: 11,
        name: "طلا و جواهرات",
        display_name: "طلا و جواهرات",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690678_8HrX2sfXkN.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "فروشگاه‌های طلا، نقره، جواهرات، ساعت‌های زینتی و سنگ‌های قیمتی",
        is_active: true,
        order: 0,
        created_at: "2025-08-08T22:04:38.000000Z",
      },
      {
        id: 1,
        name: "سوپرمارکت",
        display_name: "سوپرمارکت",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690416_V6NwNgTzIx.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "فروشگاه‌های عرضه‌کننده مواد غذایی، نوشیدنی‌ها، محصولات روزمره و خوراکی‌های مصرفی",
        is_active: true,
        order: 1,
        created_at: "2025-08-06T12:12:04.000000Z",
      },
      {
        id: 12,
        name: "کالای دیجیتال",
        display_name: "کالای دیجیتال",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1754690877_xUZmLdMihs.webp",
        banner_image: "",
        target: "",
        type: "",
        description:
          "گوشی‌های همراه، لپ‌تاپ، لوازم الکترونیکی، گجت‌ها و تجهیزات دیجیتال",
        is_active: true,
        order: 2,
        created_at: "2025-08-08T22:07:57.000000Z",
      },
      {
        id: 5,
        name: "سایر",
        display_name: "سایر",
        logo: "https://cdn.minipay.me/minipay-ng3/files/miniBank/shopCategory/1755346386_Sm0nQSwYMi.png",
        banner_image: "",
        target: "",
        type: "",
        description: "سایر",
        is_active: true,
        order: 13,
        created_at: "2025-08-06T18:14:13.000000Z",
      },
    ] as IShopCategory[],
    selected: {} as IShopCategory,
  }),
  actions: {
    async fetch(payload?: any) {
      try {
        const result = await useCustomFetch<object>(
          "/minipay/shop-category/list",
          {
            method: "GET",
            params: payload,
          },
        )
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
        const result = await useCustomFetch<IShopCategory>(
          "/minipay/shop-category/show/" + payload.shop_id,
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
        return result as IShopCategory;
      } catch (e: any) {
        return false;
      }
    },
    async select(payload: IShopCategory) {
      this.selected = payload;
      return this.selected;
    },
    async clear() {
      this.selected = {} as IShopCategory;
      return this.selected;
    },
  },
});

export function setupShopCategoryStore() {
  return ShopCategory();
}
