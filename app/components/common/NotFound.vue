<script setup lang="ts">
const props = defineProps({
  description: {
    type: String,
  },
});
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4 p-4">
    <span class="text-xs text-neutral-400 font-semibold">
      {{ description }}
    </span>
  </div>
</template>

<style lang="css"></style>
