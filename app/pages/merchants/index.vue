<script setup lang="ts">
onNuxtReady(async () => {
  umTrackEvent("merchants", {
    event_category: "engagement",
    event_label: "merchants",
  });
});
</script>

<template>
  <div>
    <CommonHeader />
    <div class="p-4 mx-auto w-full max-w-7xl">
      <ShopList />
    </div>
    <CommonFooter />
  </div>
</template>

<style lang="css"></style>
