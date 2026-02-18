<script setup lang="ts">
const options = ref({
  title: "شبکــه ملـی یـارانـه‌هــای متـمرکــز",
  description: "",
  type: 1,
  support_chat: true,
  notification: true,
  back: false,
  filter: false,
});
</script>

<template>
  <div class="flex flex-col justify-between gap-8 bg-gray-50 h-dvh relative">
    <CommonHeader :options="options" />
    <CommonNavigation />
  </div>
</template>

<style lang="css"></style>
