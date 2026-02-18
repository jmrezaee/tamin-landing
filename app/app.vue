<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "msapplication-TileColor",
      content: "#ffffff",
    },
    {
      name: "msapplication-navbutton-color",
      content: "#ffffff",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "#ffffff",
    },
  ],
});
</script>
