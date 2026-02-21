<script setup lang="ts">
const item = ref({
  status: "out",
});
</script>

<template>
  <div class="flex flex-row justify-between items-center gap-4">
    <div
      class="flex justify-center items-center rounded-2xl size-14 bg-gray-50"
    >
      <Icon
        class="stroke-amber-500"
        name="icon:ic-asset-pending"
        v-if="item.status === 'pending'"
      />
      <Icon
        class="stroke-emerald-500"
        name="icon:ic-asset-in"
        v-if="item.status === 'in'"
      />
      <Icon
        class="stroke-rose-500"
        name="icon:ic-asset-out"
        v-if="item.status === 'out'"
      />
      <Icon
        class="stroke-sky-500"
        name="icon:ic-asset-exchange"
        v-if="item.status === 'exchange'"
      />
    </div>
    <div class="flex-1 flex flex-row justify-between gap-4">
      <div class="flex flex-col gap-2 overflow-hidden">
        <span class="text-sm text-black font-semibold truncate">
          برداشت از کیف پول
        </span>
        <span class="text-xs text-gray-400 font-normal truncate">
          ۱۴ اردیبهشت ۱۴۰۲ - ساعت ۱۳:۴۷
        </span>
      </div>
      <div class="flex flex-col items-end gap-2">
        <span class="text-sm text-black font-semibold">
          {{ toCurrencyFixedString(1600000000, 0) }}
          <span class="text-xs text-gray-400 font-normal"> ریال </span>
        </span>
        <span
          class="text-xs font-normal"
          :class="{
            'text-amber-500': item.status === 'pending',
            'text-emerald-500': item.status === 'in',
            'text-rose-500': item.status === 'out',
            'text-sky-500': item.status === 'exchange',
          }"
        >
          {{
            item.status === "pending"
              ? "در انتظار تایید"
              : item.status === "in"
                ? "واریز شده"
                : item.status === "out"
                  ? "برداشت شده"
                  : item.status === "exchange"
                    ? "تبدیل شده"
                    : ""
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
