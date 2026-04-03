<script setup lang="ts">
const shop_items = ref([
  { name: "دیلی مارکت", image: "/images/image-hero-shop-4.webp" },
  { name: "گندم", image: "/images/image-hero-shop-3.webp" },
  { name: "هایپرمی", image: "/images/image-hero-shop-2.webp" },
  { name: "افق کوروش", image: "/images/image-hero-shop-1.webp" },
]);

const feature_items = ref([
  {
    icon: "icon:ic-hero-shop",
    title: "تنوع زیاد کالا و خدمات",
    description: "گستردگی در ارائه کالا و خدمات",
  },
  {
    icon: "icon:ic-hero-license",
    title: "بدون نیاز به ضامن",
    description: "نیاز به شخص دیگری جهت ضمانت ندارید",
  },
  {
    icon: "icon:ic-hero-user",
    title: "ثبت نام رایگان",
    description: "ثبت نام و دریافت اعتبار رایگان",
  },
  {
    icon: "icon:ic-hero-calendar",
    title: "خرید اقساطی از فروشگاه‌ها",
    description: "خرید از معتبرترین فروشگاه‌های کشور",
  },
]);
</script>

<template>
  <div class="flex flex-col relative">
    <div
      class="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-2 p-8 rounded-b-4xl bg-linear-to-b from-[#FFFFFF]/0 to-[#00E0F9]/10"
    >
      <div
        class="flex flex-col justify-between items-center md:items-start gap-8 text-center md:text-start py-8 md:py-20"
      >
        <div class="flex flex-col gap-4">
          <span class="text-xl lg:text-3xl font-black">
            <span class="text-primary"> اعتبار خرید فارا </span>
            شما برای ما کافیه...
          </span>
          <span class="text-sm lg:text-xl text-gray-500 font-medium">
            ویژگی مستمری بگیران سازمان تامین اجتماعی در بانک رفاه
          </span>
        </div>
        <div class="flex flex-row items-center gap-4">
          <Button class="rounded-2xl bg-black h-12" size="lg">
            دریافت اعتبار
          </Button>
        </div>
        <div
          class="hidden md:flex flex-row items-center gap-4 invisible md:visible"
        >
          <div class="flex -space-x-5">
            <Avatar
              class="size-12 rounded-2xl"
              v-for="(item, index) in shop_items"
              :key="index"
            >
              <AvatarImage :src="item.image" />
              <AvatarFallback>{{ item.name }}</AvatarFallback>
            </Avatar>
          </div>
          <span class="text-sm lg:text-base text-primary font-semibold">
            خرید اعتباری از ۱۰۰+ فروشگاه
          </span>
        </div>
      </div>
      <div class="relative">
        <div class="mx-auto w-full max-w-sm">
          <img src="@/assets/images/image-hero-1.webp" />
        </div>
        <div
          class="hidden md:block absolute top-14 left-10 invisible md:visible"
        >
          <img src="@/assets/images/image-hero-2.png" />
        </div>
        <div
          class="hidden md:block absolute bottom-14 right-0 invisible md:visible"
        >
          <img src="@/assets/images/image-hero-3.png" />
        </div>
      </div>
    </div>
    <div class="-mt-20 p-4 sm:px-20 z-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-8 p-8 rounded-4xl bg-white"
      >
        <div
          class="flex flex-col items-center gap-4"
          v-for="(item, index) in feature_items"
          :key="index"
        >
          <div
            class="flex justify-center items-center rounded-[20px] size-16 bg-blue-50"
          >
            <Icon class="size-8" :name="item.icon" />
          </div>
          <div class="flex flex-col text-center">
            <span class="text-sm text-black font-bold">
              {{ item.title }}
            </span>
            <span class="text-sm text-gray-500">
              {{ item.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
