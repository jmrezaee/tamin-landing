<script setup lang="ts">
import { ProgressIndicator, ProgressRoot } from "reka-ui";
import { cn } from "@/lib/utils";

const RADIUS = 45;
const circumference = 2 * Math.PI * RADIUS;

const progress = ref(0);

const dashOffset = computed(() => (progress.value / 100) * circumference);

const trackPath = computed(() => {
  const r = RADIUS;
  return `
          M 50 50
          m 0 -${r}
          a ${r} ${r} 0 1 1 0 ${r * 2}
          a ${r} ${r} 0 1 1 0 -${r * 2}
          `;
});

const interval = ref<NodeJS.Timeout | null>(null);
const startProgress = () => {
  progress.value += 10;
  interval.value = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 10;
    } else {
      progress.value = 0;
    }
  }, 1000);
};
const stopProgress = () => {
  if (interval.value) {
    clearInterval(interval.value);
    interval.value = null;
    progress.value = 0;
  }
};

const props = defineProps<{
  class?: string;
  icon: string;
  is_active: boolean;
}>();

defineExpose({
  startProgress,
  stopProgress,
});
</script>

<template>
  <div
    class="relative size-14"
    :class="cn('toaster group font-sans!', props.class)"
  >
    <ProgressRoot v-model="progress" as-child>
      <svg class="w-full h-full" viewBox="0 0 100 100">
        <!-- Background circle -->
        <path
          :d="trackPath"
          class="fill-none stroke-[8px]"
          :class="{
            'stroke-white': props.is_active,
            'stroke-muted': !props.is_active,
          }"
        />
        <!-- Progress circle -->
        <ProgressIndicator as-child>
          <path
            :d="trackPath"
            class="fill-none stroke-cyan-400 stroke-[8px] transition-[stroke-dasharray,opacity] duration-1000 data-[value='0']:opacity-0"
            :style="{
              'stroke-linecap': 'round',
              'stroke-dasharray': `${dashOffset}px, ${circumference}px`,
              'stroke-dashoffset': '0px',
            }"
          />
        </ProgressIndicator>
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <Icon
          class="size-5 md:size-7"
          :class="{
            'fill-cyan-400': props.is_active,
            'fill-gray-300': !props.is_active,
          }"
          :name="icon"
        />
      </div>
    </ProgressRoot>
  </div>
</template>
