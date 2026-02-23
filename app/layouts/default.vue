<template>
  <main>
    <slot />
    <ClientOnly>
      <Toaster position="top-center" :richColors="true" />
    </ClientOnly>
  </main>
</template>

<script setup lang="ts">
import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";
</script>

<style lang="css"></style>
