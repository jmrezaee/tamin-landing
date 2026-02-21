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
    :class="options.class"
  >
    <NuxtLink
      class="flex justify-center items-center rounded-2xl size-14 cursor-pointer"
      :class="options.right?.class"
      :to="options.right?.to ? { name: options.right.to } : undefined"
      @click.native="options.right?.click ? options.right?.click() : undefined"
      v-if="options.right"
    >
      <Icon :class="options.right?.icon_class" :name="options.right?.icon" />
    </NuxtLink>
    <div class="size-14" v-else />
    <div class="flex flex-col items-center gap-2 text-center">
      <Icon :name="options.icon" v-if="options.icon" />
      <span
        class="text-base font-semibold"
        :class="options.title?.class"
        v-else-if="options.title?.text"
      >
        {{ options.title.text }}
      </span>
      <span
        class="text-xs"
        :class="options.description?.class"
        v-if="options.description?.text"
      >
        {{ options.description.text }}
      </span>
    </div>
    <NuxtLink
      class="flex justify-center items-center rounded-2xl size-14 cursor-pointer"
      :class="options.left?.class"
      :to="options.left?.to ? { name: options.left.to } : undefined"
      @click.native="options.left?.click ? options.left?.click() : undefined"
      v-if="options.left"
    >
      <Icon :class="options.left?.icon_class" :name="options.left?.icon" />
    </NuxtLink>
    <div class="size-14" v-else />
  </div>
</template>

<style lang="css"></style>
