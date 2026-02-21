<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <Skeleton class="rounded-4xl rounded-e-2xl w-full h-27.5" />
    <div class="relative" v-for="(item, index) in 1" :key="index">
      <img
        class="w-full invert-0 dark:invert"
        src="~/assets/images/image-bg-asset.webp"
      />
      <div
        class="flex flex-row justify-between items-center absolute top-0 right-1/12 left-0 bottom-0 p-6"
      >
        <div class="flex flex-col gap-2 overflow-hidden">
          <span class="text-sm text-black font-semibold truncate">
            خرید اعتباری
          </span>
          <span class="text-xs text-gray-400 font-normal truncate">
            بسته حمایتی معیشتی
          </span>
        </div>
        <div class="flex flex-col items-end gap-2">
          <span class="text-sm text-black font-semibold">
            {{ toCurrencyFixedString(1600000000, 0) }}
          </span>
          <span class="text-xs text-gray-400 font-normal"> ریال </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
