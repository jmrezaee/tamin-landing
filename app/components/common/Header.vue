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
      class="flex justify-center items-center rounded-2xl size-14"
      :class="{
        'bg-gray-50': options.type === 1 || options.type === 2,
        'bg-gray-50/20': options.type === 3,
      }"
      v-if="options.back"
    >
      <Icon
        :class="{
          'stroke-black': options.type === 1 || options.type === 2,
          'stroke-white': options.type === 3,
        }"
        name="icon:ic-arrow-right"
      />
    </div>
    <div class="flex flex-col items-center gap-2 text-center">
      <Icon name="icon:ic-logo-type" v-if="options.type === 1" />
      <span
        class="text-base font-semibold"
        :class="{ 'text-white': options.type === 3 }"
        v-if="options.type === 2 || options.type === 3"
      >
        {{ options.title }}
      </span>
      <span
        class="text-xs"
        :class="{ 'text-white': options.type === 3 }"
        v-if="options.description"
      >
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
    <div
      class="flex justify-center items-center rounded-2xl size-14"
      :class="{
        'bg-gray-50': options.type === 1 || options.type === 2,
        'bg-gray-50/20': options.type === 3,
      }"
      v-if="options.documents"
    >
      <Icon
        :class="{
          'stroke-black': options.type === 1 || options.type === 2,
          'stroke-white': options.type === 3,
        }"
        name="icon:ic-documents"
      />
    </div>
    <div class="size-14" v-if="options.empty" />
  </div>
</template>

<style lang="css"></style>
