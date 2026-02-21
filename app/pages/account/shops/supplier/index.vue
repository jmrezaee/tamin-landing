<script setup lang="ts">
const router = useRouter();

const options = ref({
  class: "border-b border-solid border-gray-200",
  icon: "",
  title: {
    text: "لیست پذیرندگان",
    class: "text-black",
  },
  description: {
    text: "",
    class: "text-black",
  },
  right: {
    class: "bg-gray-50",
    icon: "icon:ic-arrow-right",
    icon_class: "stroke-black",
    click: () => {
      router.go(-1);
    },
  },
  left: {
    class: "bg-gray-50",
    icon: "icon:ic-filter",
    icon_class: "stroke-black",
    click: () => {
      console.log("Left icon clicked");
    },
  },
});
</script>

<template>
  <div
    class="grid grid-cols-1 grid-rows-[min-content_1fr] bg-white h-dvh relative"
  >
    <CommonHeader :options="options" />
    <div
      class="flex flex-col justify-between h-full overflow-y-scroll hide-scrollbar"
    >
      <SupplierList class="p-6 h-full" />
    </div>
  </div>
</template>

<style lang="css"></style>
