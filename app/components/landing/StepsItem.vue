<script setup lang="ts">
import { CircularProgress } from "@/components/ui/circular-progress";

const props = defineProps<{
  item: {
    title: string;
    icon: string;
    is_active: boolean;
  };
}>();
const item = computed(() => props.item);

const circularProgress = ref();

watch(
  () => item.value.is_active,
  (newVal) => {
    if (circularProgress.value) {
      if (newVal) {
        circularProgress.value.startProgress();
      } else {
        circularProgress.value.stopProgress();
      }
    }
  },
  { immediate: true },
);

onNuxtReady(() => {
  if (item.value.is_active && circularProgress.value) {
    circularProgress.value.startProgress();
  }
});
</script>

<template>
  <div
    class="flex flex-row items-center gap-4 p-6 rounded-4xl border-2 border-solid"
    :class="{
      'border-[#F4F8FC] bg-linear-to-r from-[#FFFFFF] to-48% to-[#F4F8FC]':
        item.is_active,
      'border-gray-100 bg-white': !item.is_active,
    }"
  >
    <div class="flex justify-center items-center rounded-full size-16">
      <CircularProgress
        class="size-16"
        ref="circularProgress"
        :icon="item.icon"
        :is_active="item.is_active"
      />
    </div>
    <span
      class="text-base font-semibold"
      :class="{
        'text-black': item.is_active,
        'text-gray-500': !item.is_active,
      }"
    >
      {{ item.title }}
    </span>
  </div>
</template>

<style lang="css"></style>
