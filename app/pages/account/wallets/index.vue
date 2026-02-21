<script setup lang="ts">
const options = ref({
  class: "",
  icon: "icon:ic-logo-type",
  title: {
    text: "کیف پول",
    class: "text-black",
  },
  description: {
    text: "",
    class: "text-black",
  },
  right: {
    class: "bg-white",
    icon: "icon:ic-add-terminal",
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
  <div
    class="grid grid-cols-1 grid-rows-[min-content_1fr_76px] bg-gray-50 h-dvh relative"
  >
    <div class="flex flex-col">
      <CommonHeader :options="options" />
      <WalletDetails />
    </div>
    <div
      class="flex flex-col justify-between rounded-t-4xl h-dvh bg-white overflow-y-scroll hide-scrollbar"
    >
      <InvoiceList class="p-6 h-full" />
    </div>
    <CommonNavigation class="sticky bottom-0 right-0 left-0" />
  </div>
</template>

<style lang="css"></style>
