<script setup lang="ts">
import type { IShop, IShopCategory } from "~/types";

const form = reactive({
  q: undefined as any,
});

const shopCategory = ShopCategory();
// const shop_category_list = ref<IShopCategory[]>([]);
const shop_category_list = computed(() => shopCategory.list);
const shop_category_selected = computed(() => shopCategory.selected);
const shopCategorySelect = async (item: IShopCategory) => {
  if (shop_category_selected.value?.id === item.id) await shopCategory.clear();
  else await shopCategory.select(item);
};
// const fetchShopCategory = async () => {
//   await shopCategory
//     .fetch({
//       sort: "asc",
//       size: 99,
//     })
//     .then((res: any) => {
//       if (res) {
//         shop_category_list.value = res.data;
//       }
//     });
// };

const shop = Shop();
const shop_list = ref<IShop[]>([]);
const shop_meta = ref();
const page = ref(1);
const fetchShop = async () => {
  await shop
    .fetch({
      // category_id: shop_category_selected.value?.id,
      order_by: "sales_volume",
      sort: "desc",
      // page: page.value,
      size: 999,
    })
    .then((res: any) => {
      if (res) {
        shop_list.value = res.data;
        shop_meta.value = res.meta;
      }
    });
};

const filtered_shop_list = computed(() => {
  return shop_list.value?.filter((i) => {
    const matchesCategory =
      !shop_category_selected.value?.id ||
      i.category.id === shop_category_selected.value?.id;
    const matchesSearch =
      !form.q ||
      i.name?.toLowerCase().includes(form.q?.toLowerCase()) ||
      i.display_name?.toLowerCase().includes(form.q?.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

const umamiEvent = (item: IShop) => {
  umTrackEvent("merchant", {
    event_category: "click",
    event_label: item.display_name,
  });
};

onNuxtReady(async () => {
  await fetchShop();
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4 p-4 rounded-4xl bg-white">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center gap-6"
      >
        <div class="flex flex-col gap-2">
          <span class="text-neutral-500 font-light">
            سازمان تامین اجتماعی
          </span>
          <span class="text-xl font-bold"> لیست فروشگاه‌های طرف قرارداد </span>
        </div>
        <div class="flex-1 flex flex-row gap-2">
          <FieldGroup>
            <Input
              class="rounded-2xl"
              v-model="form.q"
              placeholder="نام فروشگاه مورد نظر خود را بنویسید..."
              autocomplete="off"
            />
          </FieldGroup>
        </div>
      </div>
      <div class="w-full h-px bg-neutral-100"></div>
      <div class="flex flex-wrap flex-row gap-2">
        <span
          class="flex flex-row items-center gap-1 text-xs px-3 py-2 rounded-2xl border border-solid bg-neutral-100 cursor-pointer whitespace-nowrap snap-start"
          :class="{
            'border-blue-600 font-bold': item.id === shop_category_selected?.id,
            'border-neutral-100 font-medium':
              item.id !== shop_category_selected?.id,
          }"
          v-for="(item, index) in shop_category_list"
          :key="index"
          @click="shopCategorySelect(item)"
        >
          <div
            class="flex justify-center items-center rounded-lg size-10 bg-white"
          >
            <img
              class="size-8 object-contain"
              :src="item.logo"
              :alt="item.name"
            />
          </div>
          {{ item.display_name }}
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-row justify-between items-center gap-2">
        <span class="text-neutral-500 font-semibold">
          {{ shop_meta?.pagination.total }} فروشگاه
        </span>
        <div class="flex-1 w-full h-px bg-neutral-100"></div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        v-if="filtered_shop_list?.length"
      >
        <NuxtLink
          class="flex flex-row justify-between items-center gap-2 p-4 rounded-3xl bg-white"
          v-for="(item, index) in filtered_shop_list"
          :key="index"
          :to="{ name: 'merchants-id', params: { id: item.id } }"
          @click.native="umamiEvent(item)"
        >
          <div class="grid grid-cols-[auto_1fr] items-center gap-2">
            <div
              class="flex justify-center items-center rounded-2xl size-14 bg-neutral-100 overflow-hidden"
            >
              <img
                class="w-full h-full object-cover"
                :src="item.logo"
                :alt="item.name"
              />
            </div>
            <div class="flex flex-col gap-2 overflow-hidden">
              <span class="text-sm font-medium truncate">
                {{ item.display_name }}
              </span>
              <div
                class="flex flex-row gap-2 snap-x snap-mandatory overflow-x-auto overscroll-contain hide-scrollbar"
              >
                <span
                  class="text-xs text-neutral-500 font-light py-1 px-2 rounded-md bg-neutral-100 whitespace-nowrap snap-start"
                  v-for="(i, indx) in item.tags"
                  :key="indx"
                >
                  {{ i.title }}
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <Icon
              class="stroke-blue-500"
              size="24"
              name="icon:ic-chervon-left"
            />
          </div>
        </NuxtLink>
      </div>
      <CommonNotFound description="موردی یافت نشد" v-else />
    </div>
  </div>
</template>

<style lang="css"></style>
