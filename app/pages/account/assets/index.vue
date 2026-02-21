<script setup lang="ts">
const options = ref({
  class: "",
  icon: "",
  title: {
    text: "لیست اعتبارات",
    class: "text-black",
  },
  description: {
    text: "",
    class: "text-black",
  },
  right: {
    class: "bg-white",
    icon: "icon:ic-support-chat",
    icon_class: "stroke-purple-700",
    to: "account-support",
  },
  left: {
    class: "bg-white",
    icon: "icon:ic-notification",
    icon_class: "stroke-purple-700",
    to: "account-notifications",
  },
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
