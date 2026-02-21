<script setup lang="ts">
const loader = useLoader();

const invoice_show = ref({
  id: 1,
  asset_id: 1,
  created_at: "2024-06-01T12:34:56Z",
  final_amount: 250000,
  user_asset_amount: 150000,
  cash_amount: 100000,
  payment_status: "paid",
  credit_strategy: "installment",
  status: "in",
  shop: {
    name: "shop1",
    display_name: "فروشگاه شماره یک",
    logo: "https://github.com/shadcn.png",
  },
  branch: {
    name: "شعبه مرکزی",
  },
});
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
        <span>
          {{ invoice_show.shop.display_name || invoice_show.shop.name }}
        </span>
        <span class="text-sm text-gray-400">
          {{ invoice_show.branch.name }}
        </span>
      </div>
      <div class="w-full h-px bg-gray-100 dark:bg-gray-700"></div>
      <div
        class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
      >
        <span class="text-sm text-blue-950 dark:text-blue-100">
          کد پیگیری:
        </span>
        <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
          {{ invoice_show.id }}
        </span>
      </div>
      <div
        class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
      >
        <span class="text-sm text-blue-950 dark:text-blue-100">
          کد ترمینال:
        </span>
        <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
          {{ invoice_show.created_at }}
        </span>
      </div>
      <div
        class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
      >
        <span class="text-sm text-blue-950 dark:text-blue-100"> تاریخ: </span>
        <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
          {{ invoice_show.created_at }}
        </span>
      </div>
      <div
        class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
      >
        <span class="text-sm text-blue-950 dark:text-blue-100"> ساعت: </span>
        <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
          {{ invoice_show.created_at }}
        </span>
      </div>
      <div
        class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
      >
        <span class="text-sm text-blue-950 dark:text-blue-100"> مبلغ: </span>
        <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
          {{ toCurrencyString(invoice_show.final_amount) }}
          ریال
        </span>
      </div>
    </div>
    <div class="flex flex-col justify-end gap-4">
      <Button as-child>
        <NuxtLink
          :to="{
            name: 'account-assets-asset_id-invoice_id-details',
            params: {
              asset_id: invoice_show.asset_id,
              invoice_id: invoice_show.id,
            },
          }"
        >
          مشاهده جزئیات فاکتور
        </NuxtLink>
      </Button>
      <Button variant="outline" :disabled="loader.loading" as-child>
        <NuxtLink
          :to="{
            name: 'account-assets-asset_id-invoice_id-violation',
            params: {
              asset_id: invoice_show.asset_id,
              invoice_id: invoice_show.id,
            },
          }"
        >
          گزارش تخلف
        </NuxtLink>
      </Button>
    </div>
  </div>
</template>

<style lang="css"></style>
