<script setup lang="ts">
const options = ref({
  title: "شبکــه ملـی یـارانـه‌هــای متـمرکــز",
  description:
    "شما میتوانید از طریق کد دستوری #1463*500* نیز جهت مشاهده اعتبار اقدام نمایید.",
  image: "/images/image-intro.webp",
});
</script>

<template>
  <div class="flex flex-col justify-between gap-8 bg-gray-50 h-dvh relative">
    <CommonIntroHeader :options="options" />
    <div class="p-4 py-6 rounded-t-4xl bg-white sticky bottom-0 left-0 right-0">
      <LoginMobile />
    </div>
  </div>
</template>

<style lang="css"></style>
