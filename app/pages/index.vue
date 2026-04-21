<script setup lang="ts"></script>

<template>
  <div>
    <CommonHeader />
    <div class="mx-auto w-full max-w-7xl">
      <div class="p-4">
        <LandingHero />
        <LandingShops id="shops" />
        <LandingSteps id="steps" />
        <LandingCategories id="categories" />
        <LandingDownload id="download" />
      </div>
      <LandingNews id="news" />
      <div class="p-4">
        <LandingFaq id="faq" />
      </div>
    </div>
    <CommonFooter />
  </div>
</template>

<style lang="css"></style>
