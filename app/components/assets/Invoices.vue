<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row items-center gap-4">
      <Skeleton class="rounded-2xl size-14" />
      <div class="flex-1 flex flex-col gap-4">
        <div class="flex flex-row justify-between items-center gap-2">
          <Skeleton class="w-20 h-4" />
          <Skeleton class="w-32 h-4" />
        </div>
        <div class="flex flex-row justify-between items-center gap-2">
          <Skeleton class="w-32 h-4" />
          <Skeleton class="w-20 h-4" />
        </div>
      </div>
    </div>
    <AssetsInvoiceItem v-for="(item, index) in 32" :item="item" :key="index" />
  </div>
</template>

<style lang="css"></style>
