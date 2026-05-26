<script setup lang="ts">
import type { IBranch, IShop } from "~/types";

const route = useRoute();

const shop = Shop();
const shop_id = computed(() => route.params.id);
const shop_show = ref<IShop>();
const fetchShopShow = async () => {
  await shop.show({ shop_id: shop_id.value }).then((res: any) => {
    if (res) {
      shop_show.value = res;
    }
  });
};

const branch = Branch();
const branch_list = ref<IBranch[]>([]);
const branch_meta = ref();
const page = ref(1);
const fetchBranch = async () => {
  await branch
    .fetch({
      shop_id: shop_id.value,
      page: page.value,
    })
    .then((res: any) => {
      if (res) {
        branch_list.value = res.data;
        branch_meta.value = res.meta;
      }
    });
};
watch(page, async () => {
  await fetchBranch();
});

const changePage = (key: string, page_number: number) => {
  if (key === "next") page.value++;
  else if (key === "previous") page.value--;
  else page.value = page_number;
};

onNuxtReady(async () => {
  await fetchShopShow();
  await fetchBranch();
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4 p-4 rounded-4xl bg-white">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="grid grid-cols-[auto_1fr] gap-2">
          <div
            class="flex justify-center items-center rounded-2xl size-14 bg-neutral-100 overflow-hidden"
          >
            <img
              class="w-full h-full object-cover"
              :src="shop_show?.logo"
              :alt="shop_show?.name"
            />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm font-medium">
              {{ shop_show?.display_name }}
            </span>
            <div class="flex flex-wrap flex-row gap-2">
              <span
                class="text-xs text-neutral-500 font-light py-1 px-2 rounded-md bg-neutral-100"
                v-for="(i, indx) in shop_show?.categories"
                :key="indx"
              >
                {{ i.name }}
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-sm text-neutral-500 font-light">
            تعداد شعب فعال:
          </span>
          <span class="font-bold"> {{ branch_meta?.total }} شعبه </span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-sm text-neutral-500 font-light">
            وب‌سایت فروشگاه:
          </span>
          <span class="font-bold">
            {{ shop_show?.website || "-" }}
          </span>
        </div>
      </div>
      <div class="w-full h-px bg-neutral-100"></div>
      <div class="flex flex-col gap-2">
        <span class="text-sm font-bold"> درباره فروشگاه: </span>
        <span class="text-sm font-medium">
          {{ shop_show?.description || "-" }}
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-4 p-4 rounded-4xl bg-white">
      <div class="flex flex-row justify-between items-center gap-2">
        <span class="font-bold"> لیست شعب ({{ branch_meta?.total }}) </span>
      </div>
      <Table>
        <TableHeader>
          <TableRow class="border-0! bg-neutral-100">
            <!-- <TableHead
              class="text-sm text-neutral-500 text-center rounded-r-xl"
            >
              استان
            </TableHead>
            <TableHead class="text-sm text-neutral-500 text-center">
              شهر
            </TableHead> -->
            <TableHead class="text-sm text-neutral-500 text-center">
              نام شعبه
            </TableHead>
            <TableHead class="text-sm text-neutral-500 text-center">
              کد شعبه
            </TableHead>
            <TableHead class="text-sm text-neutral-500 text-center">
              آدرس
            </TableHead>
            <TableHead
              class="text-sm text-neutral-500 text-center rounded-l-xl"
            >
              شماره تماس
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(item, index) in branch_list" :key="index">
            <!-- <TableCell class="text-center">{{ item.city.province }}</TableCell>
            <TableCell class="text-center">{{ item.city.title }}</TableCell> -->
            <TableCell class="text-center">{{ item.name }}</TableCell>
            <TableCell class="text-center">{{ item.code }}</TableCell>
            <TableCell class="text-center">{{ item.address }}</TableCell>
            <TableCell class="text-center">{{ item.phone }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination
        v-slot="{ page }"
        :items-per-page="branch_meta.per_page"
        :total="branch_meta.total"
        :default-page="branch_meta.current_page"
        v-if="branch_meta?.status"
      >
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious @click="changePage('previous', 1)" />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem
              :value="item.value"
              :is-active="item.value === page"
              @click="changePage('number', item.value)"
              v-if="item.type === 'page'"
            >
              {{ item.value }}
            </PaginationItem>
          </template>
          <!-- <PaginationEllipsis :index="4" /> -->
          <PaginationNext @click="changePage('next', 1)" />
        </PaginationContent>
      </Pagination>
    </div>
  </div>
</template>

<style lang="css"></style>
