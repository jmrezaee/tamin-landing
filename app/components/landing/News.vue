<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});

const shop_items = ref([
  {
    name: "ارائه خدمات باشگاه مشتریان فارا از طریق مینی پی",
    caption:
      "شرکت فارا طی قراردادی زین پس ارائه خدمات خرید اعتباری خود را از طریق درگاه خرید اعتباری و پرداخت اقساطی مینی پی بر روی فروشگاه ها ارائه می نماید.",
    image: "/images/image-news-1.png",
  },
  {
    name: "اختصاص اعتبار بدون نیاز به چک یا ضامن",
    caption:
      "برابر با حدقال دو برابر از یک سوم حقوق دریافتی خود را اعتبار خرید دریافت کرده و الان خرید کنید بعدا از حقوق شما کسر  خواهد شد",
    image: "/images/image-news-1.png",
  },
  {
    name: "عقد تفاهم نامه با بانک رفاه و سازمان تامین اجتماعی",
    caption:
      "طی این تفاهم نامه شرکت فارا ارائه خدمات باشگاه مشتریان را به مستمری بگیران سازمان تامین اجتماعی که حقوق خود را  از بانک رفاه دریافت می کند ارائه می نماید",
    image: "/images/image-news-2.png",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-8 p-0 lg:p-4 py-16">
    <div class="flex flex-col gap-2 text-center">
      <span class="text-lg text-black font-semibold"> آخرین اخبار سامانه </span>
    </div>
    <Carousel
      class="p-4 w-full relative"
      :opts="{ direction: 'rtl', loop: true }"
      :plugins="[plugin]"
    >
      <CarouselContent class="-ml-1">
        <CarouselItem
          v-for="(item, index) in shop_items"
          :key="index"
          class="basis-[85%] lg:basis-1/3"
        >
          <div
            class="grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-4 p-2 md:p-4 rounded-xl md:rounded-4xl ring-1 ring-inset ring-neutral-100 h-full bg-white"
          >
            <div class="rounded-lg md:rounded-xl bg-gray-100 overflow-hidden">
              <img
                class="w-full h-full object-contain"
                :src="item.image"
                :alt="item.name"
              />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-sm md:text-base text-black font-medium">
                {{ item.name }}
              </span>
              <span class="text-sm text-gray-400 font-normal">
                {{ item.caption }}
              </span>
            </div>
            <div class="flex flex-row justify-between items-center gap-2">
              <div class="flex flex-row items-center gap-1">
                <Icon class="stroke-gray-300 size-4" name="icon:ic-clock" />
                <span class="text-sm text-gray-300 font-normal">
                  ۱۴۰۳/۹/۱۲
                </span>
              </div>
              <div class="flex flex-row justify-end items-center gap-1">
                <span class="text-sm text-blue-400 font-medium">
                  ادامه مطلب
                </span>
                <Icon
                  class="stroke-blue-400 size-5"
                  name="icon:ic-chervon-left"
                />
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

<style lang="css"></style>
