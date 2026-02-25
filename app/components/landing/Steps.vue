<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const plugin = Autoplay({
  delay: 10000,
  stopOnMouseEnter: false,
  stopOnInteraction: false,
});

const step_items = ref([
  {
    title: "ثبت نام غیر حضوری و مشاهده اعتبار",
    icon: "icon:ic-steps-1",
    is_active: true,
    image: "/images/image-steps-1.webp",
  },
  {
    title: "مراجعه و خرید از فروشگاه‌های طرف قرارداد",
    icon: "icon:ic-steps-2",
    is_active: false,
    image: "/images/image-steps-2.webp",
  },
  {
    title: "مشاهده جزئیات خرید و پرداخت اقساط اعتبار",
    icon: "icon:ic-steps-3",
    is_active: false,
    image: "/images/image-steps-3.webp",
  },
]);

onMounted(() => {
  setInterval(() => {
    const active_index = step_items.value?.findIndex((item) => item.is_active);
    if (step_items.value && active_index !== undefined) {
      step_items.value = step_items.value.map((item, index) => ({
        ...item,
        is_active: index === (active_index + 1) % step_items.value.length,
      }));
    }
  }, 10000);
});
</script>

<template>
  <div class="grid grid-cols-2 auto-rows-auto gap-14 p-20 rounded-4xl bg-white">
    <div class="flex flex-col gap-10">
      <div class="flex flex-row justify-between items-end gap-4">
        <div class="flex flex-col gap-2">
          <span class="text-base text-gray-400 font-normal">
            مراحل ثبت‌نام و دریافت
          </span>
          <span class="text-xl text-black font-bold">
            خدمات اعتباری و اقساطی مستمری بگیران
          </span>
        </div>
        <div class="flex flex-col gap-2">
          <Button
            class="text-primary rounded-xl border-blue-100 h-12"
            variant="outline"
            size="lg"
          >
            لینک ثبت نام
          </Button>
        </div>
      </div>
      <div class="flex flex-col gap-8">
        <LandingStepsItem
          v-for="(item, index) in step_items"
          :key="index"
          :item="item"
        />
      </div>
    </div>
    <Carousel
      class="w-full"
      :opts="{ direction: 'rtl', loop: true }"
      :plugins="[plugin]"
    >
      <CarouselContent>
        <CarouselItem v-for="(item, index) in step_items" :key="index">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-auto object-cover rounded-[48px]"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

<style lang="css"></style>
