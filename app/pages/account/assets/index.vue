<script setup lang="ts">
const options = ref({
  title: "لیست اعتبارات",
  description: "",
  type: 1,
  support_chat: true,
  notification: true,
  back: false,
  filter: false,
});
</script>

<template>
  <div class="grid grid-cols-1 grid-rows-[88px_1fr] bg-gray-50 h-dvh relative">
    <CommonHeader :options="options" />
    <div
      class="flex flex-col justify-between rounded-t-4xl h-dvh bg-white overflow-y-scroll hide-scrollbar"
    >
      <AssetsList class="p-6 h-full" />
    </div>
  </div>
</template>

<style lang="css"></style>
