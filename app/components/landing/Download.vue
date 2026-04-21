<script setup lang="ts">
const download_items = ref([
  // {
  //   title: "دریافت از گـوگـل‌پلــی",
  //   icon: "icon:ic-download-google",
  // },
  {
<<<<<<< HEAD
    title: "دریافت از کــافـه بـازار",
    icon: "icon:ic-download-cafebazaar",
    to: "https://cafebazaar.ir/app/ir.sfara.club",
=======
    key: "cafebazaar",
    title: "دریافت از کــافـه بـازار",
    icon: "icon:ic-download-cafebazaar",
    to: "https://cafebazaar.ir/app/me.minipay.app",
  },
  {
    key: "myket",
    title: "دریـافت از مــایکـــت",
    icon: "icon:ic-download-myket",
    to: "https://myket.ir/app/me.minipay.app",
>>>>>>> 855af87 (fixed some)
  },
  {
    key: "web",
    title: "نسخه وب ‌اپلیکیشن",
<<<<<<< HEAD
    icon: "icon:ic-download-fara",
    to: "https://faraapp.minipay.me",
=======
    icon: "icon:ic-download-minipay",
    to: "https://app.minipay.me",
>>>>>>> 855af87 (fixed some)
  },
]);
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-4 lg:gap-14 py-8 lg:p-20 pb-0! rounded-4xl bg-[url('/images/image-download-bg.webp')] bg-no-repeat bg-cover"
  >
    <div class="flex flex-col gap-10 p-4 lg:p-0">
      <div class="flex flex-col gap-8 text-center lg:text-right">
        <div class="flex flex-col gap-2">
          <span class="text-base text-gray-500 font-normal">
            دانلود اپلیکیشن
          </span>
          <span class="text-base xl:text-xl text-black font-bold">
            خدمات فروش اعتباری و پرداخت اقساطی
          </span>
        </div>
        <span class="text-sm xl:text-lg text-gray-500 font-medium">
<<<<<<< HEAD
          با استفاده از اپلیکیشن فارا، حساب اعتباری خود را فعال کرده و از بیش از
          یکصد فروشگاه معتبر بصورت اقساطی خرید کنید!
=======
          با استفاده از اپلیکیشن مینی‌پی، کیف پول اعتباری خود را فعال و از بیش
          از ۱۰۰۰۰ فروشگاه معتبر بصورت اقساطی خرید کنید!
>>>>>>> 855af87 (fixed some)
        </span>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-8">
        <NuxtLink
          class="flex flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-linear-to-b from-[#14191C] to-[#434749]"
          :class="{ 'col-span-2 justify-center': item.key === 'web' }"
          v-for="(item, index) in download_items"
          :key="index"
          :to="item.to ? item.to : ''"
          :target="item.to ? '_blank' : '_self'"
        >
          <Icon class="size-9" :name="item.icon" />
          <span class="text-sm md:text-base text-white font-semibold">
            {{ item.title }}
          </span>
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <img src="/images/image-download-phone.webp" />
    </div>
  </div>
</template>

<style lang="css"></style>
