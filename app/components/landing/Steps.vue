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
    title: "مستمری بگیر سازمان تامین اجتماعی باشد",
    icon: "icon:ic-steps-1",
    is_active: true,
    image: "/images/image-steps-1.webp",
  },
  {
    title: "حقوق مستمری خود را در بانک رفاه دریافت نماید",
    icon: "icon:ic-steps-2",
    is_active: true,
    image: "/images/image-steps-2.webp",
  },
  {
    title: "بیش از 6 ماه از زمان بازنشستگی فرد گذشته باشد",
    icon: "icon:ic-steps-3",
    is_active: true,
    image: "/images/image-steps-3.webp",
  },
]);

// onMounted(() => {
//   setInterval(() => {
//     const active_index = step_items.value?.findIndex((item) => item.is_active);
//     if (step_items.value && active_index !== undefined) {
//       step_items.value = step_items.value.map((item, index) => ({
//         ...item,
//         is_active: index === (active_index + 1) % step_items.value.length,
//       }));
//     }
//   }, 10000);
// });
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-4 lg:gap-14 py-8 lg:p-20 rounded-4xl bg-white"
  >
    <div class="flex flex-col gap-10 p-4 lg:p-0">
      <div
        class="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 text-center lg:text-right"
      >
        <div class="flex flex-col gap-2">
          <span class="text-base xl:text-xl text-black font-bold">
            اعتبار خرید طرح مهرگستر
          </span>
        </div>
        <div class="flex flex-col gap-2">
          <Button
            class="text-primary rounded-xl border-blue-100 h-12"
            variant="outline"
            size="lg"
            as-child
            as-child
          >
            <NuxtLink to="https://app.minipay.me" target="_blank">
              لینک ثبت نام
            </NuxtLink>
          </Button>
        </div>
      </div>
      <div class="hidden lg:flex flex-col gap-8 invisible lg:visible">
        <LandingStepsItem
          v-for="(item, index) in step_items"
          :key="index"
          :item="item"
        />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <Carousel
        class="w-full"
        :opts="{ direction: 'rtl', loop: true, watchDrag: false }"
        :plugins="[plugin]"
      >
        <CarouselContent>
          <CarouselItem
            class="basis-[85%] lg:basis-full"
            v-for="(item, index) in step_items"
            :key="index"
          >
            <div class="relative">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-auto object-cover rounded-[28px] lg:rounded-[48px]"
              />
              <div
                class="block lg:hidden p-4 absolute bottom-0 right-0 left-0 visible lg:invisible"
              >
                <LandingStepsItem :item="item" />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </div>
</template>

<style lang="css"></style>
