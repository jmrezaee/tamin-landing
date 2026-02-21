<script setup lang="ts">
const router = useRouter();

const options = ref({
  class: "",
  icon: "",
  title: {
    text: "اعلان‌ها",
    class: "text-black",
  },
  description: {
    text: "",
    class: "text-black",
  },
  right: {
    class: "bg-white",
    icon: "icon:ic-arrow-right",
    icon_class: "stroke-purple-700",
    click: () => {
      router.go(-1);
    },
  },
  left: undefined,
});
</script>

<template>
  <div class="flex flex-col justify-between gap-8 bg-gray-50 h-dvh relative">
    <CommonHeader :options="options" />
  </div>
</template>

<style lang="css"></style>
