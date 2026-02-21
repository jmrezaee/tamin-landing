<script setup lang="ts">
const invoice_show = ref({
  id: 1,
  asset_id: 1,
  created_at: "2024-06-01T12:34:56Z",
  final_amount: 250000,
  user_asset_amount: 150000,
  cash_amount: 100000,
  payment_status: "paid",
  credit_strategy: "installment",
  status: "out",
  shop: {
    name: "shop1",
    display_name: "فروشگاه شماره یک",
    logo: "https://github.com/shadcn.png",
  },
  branch: {
    name: "شعبه مرکزی",
  },
});

const invoice_items = ref([
  {
    item_name: "کالا شماره یک",
    quantity: 2,
    unit_name: "عدد",
    amount: 50000,
  },
  {
    item_name: "کالا شماره دو",
    quantity: 1,
    unit_name: "عدد",
    amount: 100000,
  },
]);
</script>

<template>
  <div class="flex flex-col justify-between gap-4 p-4" v-if="invoice_show">
    <div class="flex flex-col gap-4">
      <div
        class="flex flex-col items-center gap-4 p-4 sm:p-6 rounded-4xl bg-gray-50 dark:bg-gray-950"
      >
        <div
          class="flex justify-center items-center rounded-3xl size-14"
          :class="{
            'bg-amber-500': invoice_show.status === 'pending',
            'bg-emerald-500': invoice_show.status === 'in',
            'bg-rose-500': invoice_show.status === 'out',
            'bg-sky-500': invoice_show.status === 'exchange',
          }"
        >
          <Icon
            class="stroke-white"
            name="icon:ic-asset-pending"
            v-if="invoice_show.status === 'pending'"
          />
          <Icon
            class="stroke-white"
            name="icon:ic-asset-in"
            v-if="invoice_show.status === 'in'"
          />
          <Icon
            class="stroke-white"
            name="icon:ic-asset-out"
            v-if="invoice_show.status === 'out'"
          />
          <Icon
            class="stroke-white"
            name="icon:ic-asset-exchange"
            v-if="invoice_show.status === 'exchange'"
          />
        </div>
        <span>خرید از {{ invoice_show.shop.display_name }}</span>
        <span class="text-sm text-gray-400">ریز اقلام خرید</span>
      </div>
      <div class="w-full h-px bg-gray-100 dark:bg-gray-700"></div>
      <div class="flex flex-col rounded-xl overflow-hidden">
        <div
          class="flex flex-row justify-between items-center gap-2 p-2 bg-primary-100"
        >
          <span class="text-sm"> لیست خریدهای شما </span>
        </div>
        <div
          class="flex flex-row justify-between items-center gap-2 p-2"
          :class="{
            'bg-primary-100': index % 2 === 1,
          }"
          v-for="(item, index) in invoice_items"
          :key="index"
        >
          <span
            class="flex-1 text-xs text-gray-700 dark:text-gray-300 truncate"
          >
            {{ item.item_name }}
          </span>
          <span class="flex flex-row items-center gap-2 text-sm">
            <span class="text-xs text-link-400 font-light">
              ({{ toCurrencyFixedString(item.quantity, 0) }}
              {{ item.unit_name }})
            </span>
            {{ toCurrencyFixedString(item.amount, 0) }}
            <span class="text-xs text-gray-400 font-light"> ریال </span>
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-end gap-4">
      <div
        class="flex flex-col rounded-xl border border-solid border-gray-100 dark:border-gray-700 overflow-hidden"
      >
        <div class="flex flex-row justify-between items-center gap-2 p-2">
          <span
            class="flex-1 text-xs text-gray-700 dark:text-gray-300 truncate"
          >
            تاریخ خرید:
          </span>
          <span class="flex flex-row items-center gap-2 text-sm">
            {{ invoice_show.created_at }}
          </span>
        </div>
        <div
          class="flex flex-row justify-between items-center gap-2 p-2 bg-primary-100"
        >
          <span class="flex-1 text-sm truncate"> مبلغ کل: </span>
          <span class="flex flex-row items-center gap-2 text-sm">
            {{ toCurrencyFixedString(invoice_show.final_amount, 0) }}
            <span class="text-xs text-gray-400 font-light"> ریال </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
