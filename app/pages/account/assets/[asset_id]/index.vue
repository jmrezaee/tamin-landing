<script setup lang="ts">
const router = useRouter();

const options = ref({
  class: "",
  icon: "",
  title: {
    text: "جزئیات اعتبار",
    class: "text-white",
  },
  description: {
    text: "",
    class: "text-white",
  },
  right: {
    class: "bg-gray-50/20",
    icon: "icon:ic-arrow-right",
    icon_class: "stroke-white",
    click: () => {
      router.go(-1);
    },
  },
  left: {
    class: "bg-gray-50/20",
    icon: "icon:ic-documents",
    icon_class: "stroke-white",
    click: () => {
      console.log("Left icon clicked");
    },
  },
});
</script>

<template>
  <div class="bg-linear-to-br from-[#008CFF] to-[#0704B0]">
    <div
      class="grid grid-cols-1 grid-rows-[min-content_1fr] bg-[url('@/assets/images/image-bg-pattern.webp')] bg-no-repeat bg-top bg-contain h-dvh relative"
    >
      <div class="flex flex-col">
        <CommonHeader :options="options" />
        <AssetsDetails />
      </div>
      <div
        class="flex flex-col justify-between rounded-t-4xl h-dvh bg-white overflow-y-scroll hide-scrollbar"
      >
        <InvoiceList class="p-6 h-full" />
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
