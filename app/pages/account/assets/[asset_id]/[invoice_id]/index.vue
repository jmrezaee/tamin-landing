<script setup lang="ts">
const options = ref({
  title: "رسید تراکنش",
  description: "",
  type: 3,
  support_chat: false,
  notification: false,
  back: true,
  filter: false,
  documents: false,
  empty: true,
});
</script>

<template>
  <div class="bg-linear-to-br from-[#008CFF] to-[#0704B0]">
    <div
      class="grid grid-cols-1 grid-rows-[min-content_1fr] bg-[url('@/assets/images/image-bg-pattern.webp')] bg-no-repeat bg-top bg-contain h-dvh relative"
    >
      <CommonHeader :options="options" />
      <div
        class="flex flex-col justify-between rounded-t-4xl h-full bg-white overflow-y-scroll hide-scrollbar"
      >
        <AssetsInvoiceDetails class="p-6 h-full" />
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
