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
    name: "خانه و آشپزخانه",
    image: "/images/image-category-1.webp",
  },
  {
    name: "کالای دیجیتال",
    image: "/images/image-category-2.webp",
  },
  {
    name: "ابزار و تجهیزات",
    image: "/images/image-category-3.webp",
  },
  {
    name: "مد و پوشاک",
    image: "/images/image-category-4.webp",
  },
  {
    name: "سوپرمارکت",
    image: "/images/image-category-5.webp",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-8 p-4 py-16">
    <div class="flex flex-col gap-2 text-center">
      <span class="text-lg text-black font-semibold">
        دسته‌بندی فروشگاه‌های طرف قرارداد
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
          class="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
        >
          <div
            class="flex flex-col gap-4 p-2 md:p-4 rounded-xl md:rounded-4xl ring-1 ring-inset ring-neutral-100 bg-white"
          >
            <div
              class="flex justify-center items-center p-7 rounded-lg md:rounded-xl bg-gray-100"
            >
              <img :src="item.image" :alt="item.name" class="size-20" />
            </div>
            <div class="flex flex-row justify-between items-center gap-2">
              <span
                class="text-sm md:text-base text-center text-black font-medium"
              >
                {{ item.name }}
              </span>
              <Icon class="stroke-emerald-400" name="icon:ic-chervon-left" />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

<style lang="css"></style>
