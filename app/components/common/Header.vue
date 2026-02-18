<script setup lang="ts">
const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-row justify-between items-center gap-2 p-4"
    :class="{ 'bg-white': options.type === 2 }"
  >
    <div
      class="flex justify-center items-center rounded-2xl size-14 bg-white"
      v-if="options.support_chat"
    >
      <Icon class="stroke-purple-700" name="icon:ic-support-chat" />
    </div>
    <div
      class="flex justify-center items-center rounded-2xl size-14 bg-gray-50"
      v-if="options.back"
    >
      <Icon class="stroke-black" name="icon:ic-arrow-right" />
    </div>
    <div class="flex flex-col items-center gap-2 text-center">
      <Icon name="icon:ic-logo-type" v-if="options.type === 1" />
      <span class="text-base font-semibold" v-if="options.type === 2">
        {{ options.title }}
      </span>
      <span class="text-xs" v-if="options.description">
        {{ options.description }}
      </span>
    </div>
    <div
      class="flex justify-center items-center rounded-2xl size-14 bg-white"
      v-if="options.notification"
    >
      <Icon class="stroke-purple-700" name="icon:ic-notification" />
    </div>
    <div
      class="flex justify-center items-center rounded-2xl size-14 bg-gray-50"
      v-if="options.filter"
    >
      <Icon class="stroke-black" name="icon:ic-filter" />
    </div>
  </div>
</template>

<style lang="css"></style>
