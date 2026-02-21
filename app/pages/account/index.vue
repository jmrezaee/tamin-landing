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
  <div
    class="grid grid-cols-1 grid-rows-[88px_1fr_76px] bg-gray-50 h-dvh relative"
  >
    <CommonHeader :options="options" />
    <div class="flex flex-col justify-between h-full">
      <Banner />
      <AssetsList
        class="p-6 rounded-t-4xl h-full bg-white overflow-y-scroll hide-scrollbar"
      />
    </div>
    <CommonNavigation class="sticky bottom-0 right-0 left-0" />
  </div>
</template>

<style lang="css"></style>
