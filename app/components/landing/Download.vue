<script setup lang="ts">
const download_items = ref([
  {
    title: "دریافت از گـوگـل‌پلــی",
    icon: "icon:ic-download-google",
  },
  {
    title: "دریافت از کــافـه بـازار",
    icon: "icon:ic-download-cafebazaar",
  },
  {
    title: "دریـافت از مــایکـــت",
    icon: "icon:ic-download-myket",
  },
  {
    title: "نسخه وب ‌اپلیکیشن",
    icon: "icon:ic-download-minipay",
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
            خدمات اعتباری و اقساطی مستمری بگیران
          </span>
        </div>
        <span class="text-sm xl:text-lg text-gray-500 font-medium">
          با استفاده از اپلیکیشن مینی‌پی، کیف پول اعتباری خود را فعال و از بیش
          از ۸۰0۰ فروشگاه معتبر بصورت اقساطی خرید کنید!
        </span>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-8">
        <div
          class="flex flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-linear-to-b from-[#14191C] to-[#434749]"
          v-for="(item, index) in download_items"
          :key="index"
        >
          <Icon class="size-9" :name="item.icon" />
          <span class="text-sm md:text-base text-white font-semibold">
            {{ item.title }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <img src="/images/image-download-phone.webp" />
    </div>
  </div>
</template>

<style lang="css"></style>
