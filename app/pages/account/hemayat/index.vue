<script setup lang="ts">
const options = ref({
  class: "",
  icon: "icon:ic-logo-type",
  title: {
    text: "سامانه حمایت",
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
    <CommonHeader :options="options" />
    <div
      class="flex flex-col justify-between h-full overflow-y-scroll hide-scrollbar"
    >
      <HemayatDetails class="p-6 h-full" />
    </div>
    <CommonNavigation class="sticky bottom-0 right-0 left-0" />
  </div>
</template>

<style lang="css"></style>
