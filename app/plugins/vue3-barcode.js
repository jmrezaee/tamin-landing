import Vue3Barcode from "vue3-barcode";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("vue3-barcode", Vue3Barcode);
});
