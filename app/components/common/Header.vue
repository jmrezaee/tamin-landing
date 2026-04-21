<script setup lang="ts">
import { Button } from "@/components/ui/button";

const navigation_items = ref([
  { name: "صفحه اصلی", to: "index", link: true },
<<<<<<< HEAD
  { name: "مراکز طرف قرارداد", to: "merchants", link: true },
=======
  { name: "مراکز طرف قرارداد", to: "#shops", link: false },
>>>>>>> 855af87 (fixed some)
  { name: "درخواست پذیرندگی", to: "#request", link: false },
  { name: "دانلود اپلیکیشن", to: "#download", link: false },
  { name: "سوالات متداول", to: "#faq", link: false },
]);
</script>

<template>
  <div class="flex flex-col bg-white">
    <div class="mx-auto w-full max-w-7xl">
      <div
        class="hidden sm:flex flex-row justify-between items-center gap-2 p-4 invisible sm:visible"
      >
        <span class="text-xs text-blue-500 font-medium">
          سامانه خرید اعتباری و پرداخت اقساطی فارا
        </span>
        <div class="flex flex-row justify-end items-center gap-2">
          <span class="text-xs text-blue-500 font-normal">
            تلفن پشتیبانی: (داخلی ۴)
          </span>
          <a class="text-xs text-blue-700 font-semibold" href="tel:0216369">
            0216369
          </a>
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr_1fr] lg:grid-cols-[212px_1fr_130px] auto-rows-auto gap-2 p-4"
      >
        <div class="flex flex-row items-center gap-2">
          <NuxtLink :to="{ name: 'index' }">
            <Icon class="w-53 h-13" name="icon:logo-type" />
          </NuxtLink>
        </div>
        <div
          class="col-span-2 lg:col-span-1 row-start-2 lg:row-start-auto flex flex-row sm:justify-center items-center gap-6 whitespace-nowrap snap-x snap-mandatory overflow-x-auto overscroll-contain hide-scrollbar"
        >
          <NuxtLink
            class="text-sm text-black font-medium cursor-pointer"
            exactActiveClass="text-blue-500"
            v-for="(item, index) in navigation_items"
            :key="index"
            :to="item.link ? { name: item.to } : undefined"
            @click.native="!item.link ? navigateTo(item.to) : null"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <div class="flex flex-row justify-end items-center gap-2">
          <Button class="rounded-xl" size="lg" as-child>
            <NuxtLink to="https://faraapp.minipay.me" target="_blank">
              ورود / ثبت نام
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
