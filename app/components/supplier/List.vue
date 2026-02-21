<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <div
      class="flex flex-col gap-4 p-4 rounded-3xl border border-solid border-gray-100 bg-white"
    >
      <div class="flex flex-row items-center gap-2">
        <Skeleton class="rounded-2xl size-12" />
        <div class="flex-1 flex flex-row justify-between items-center gap-2">
          <Skeleton class="rounded-full w-24 h-4" />
          <Skeleton class="rounded-sm size-5" />
        </div>
      </div>
      <div
        class="flex flex-col gap-2 p-4 rounded-xl border border-solid border-gray-100"
      >
        <Skeleton class="rounded-full w-24 h-4" />
        <Skeleton class="rounded-full w-36 h-4" />
      </div>
      <div class="flex flex-row justify-between items-center gap-4">
        <Skeleton class="flex-1 rounded-lg h-12" />
        <Skeleton class="flex-1 rounded-lg h-12" />
      </div>
    </div>
    <SupplierItem v-for="(item, index) in 15" :item="item" :key="index" />
  </div>
</template>

<style lang="css"></style>
