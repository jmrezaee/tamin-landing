<script setup lang="ts">
const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col items-center gap-4 p-4 text-center">
      <Icon name="icon:ic-logo-type" />
      <span class="text-base font-semibold">
        {{ options.title || "شبکــه ملـی یـارانـه‌هــای متـمرکــز" }}
      </span>
      <span
        class="text-sm text-gray-800 font-normal"
        v-if="options.description"
      >
        {{ options.description }}
      </span>
    </div>
    <div class="flex justify-center items-center" v-if="options.image">
      <img :class="options.image_class" :src="options.image" />
    </div>
  </div>
</template>

<style lang="css"></style>
