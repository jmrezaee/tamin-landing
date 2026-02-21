<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <div
      class="flex flex-row items-center gap-2 p-3 rounded-3xl border-2 border-solid border-gray-100 bg-white"
    >
      <div
        class="flex justify-center items-center rounded-2xl size-12 bg-purple-50"
      >
        <Icon class="stroke-purple-700" name="icon:ic-map-pin" />
      </div>
      <div class="flex-1 flex flex-row justify-between items-center gap-2">
        <span class="text-xs sm:text-sm text-black font-medium">
          مشاهده پذیرندگان روی نقشه
        </span>
        <Icon class="stroke-blue-700" name="icon:ic-cherv-left" />
      </div>
    </div>
    <div class="grid grid-cols-3 auto-rows-auto gap-4">
      <div class="flex flex-col items-center gap-2">
        <Skeleton class="rounded-3xl w-full aspect-square" />
        <Skeleton class="rounded-full w-11 h-4" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <Skeleton class="rounded-3xl w-full aspect-square" />
        <Skeleton class="rounded-full w-11 h-4" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <Skeleton class="rounded-3xl w-full aspect-square" />
        <Skeleton class="rounded-full w-11 h-4" />
      </div>
      <ShopItem v-for="(item, index) in 15" :item="item" :key="index" />
    </div>
    <NuxtLink
      class="flex flex-row items-center gap-2 p-3 rounded-3xl border-2 border-solid border-gray-100 bg-white"
      :to="{ name: 'account-shops-supplier' }"
    >
      <div
        class="flex justify-center items-center rounded-2xl size-12 bg-blue-50"
      >
        <Icon class="stroke-blue-700" name="icon:ic-shop" />
      </div>
      <div class="flex-1 flex flex-row justify-between items-center gap-2">
        <span class="text-xs sm:text-sm text-black font-medium">
          لیست پذیرندگان
        </span>
        <Icon class="stroke-blue-700" name="icon:ic-cherv-left" />
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="css"></style>
