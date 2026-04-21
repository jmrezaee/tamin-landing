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
    name: "جانبو",
    image: "/images/image-carousel-shop-7.webp",
  },
  {
    name: "وال مارکت",
    image: "/images/image-carousel-shop-6.webp",
  },
  {
    name: "دیلی مارکت",
    image: "/images/image-carousel-shop-3.webp",
  },
  // {
  //   name: "هایپرمی",
  //   image: "/images/image-carousel-shop-4.webp",
  // },
  {
    name: "گندم",
    image: "/images/image-carousel-shop-2.webp",
  },
  {
    name: "رفاه",
    image: "/images/image-carousel-shop-7.webp",
  },
  {
    name: "هفت",
    image: "/images/image-carousel-shop-5.webp",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-8 p-4 py-16">
    <div class="flex flex-col gap-2 text-center">
      <span class="text-lg text-black font-semibold">
        برخی از فروشگاه‌های طرف قرارداد
      </span>
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
          class="basis-1/3 md:basis-1/5"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="mx-auto w-36 h-auto object-contain"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

<style lang="css"></style>
