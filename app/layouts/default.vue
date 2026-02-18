<template>
  <div class="h-dvh bg-gray-50">
    <main
      class="relative mx-auto w-full max-w-lg bg-white overflow-y-scroll hide-scrollbar"
    >
      <section class="h-dvh">
        <slot />
      </section>
      <Toaster position="top-center" :richColors="true" />
    </main>
  </div>
</template>

<script setup lang="ts">
import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";
</script>

<style lang="css"></style>
