<script setup lang="ts">
// import type { IGetOtp } from "@/types";

// const profile = Profile();
const get_otp = ref<{ otp: string }>({ otp: "12345678" });
// const profileGetOtp = async () => {
//   await profile.getOtp().then((res) => {
//     if (res) {
//       get_otp.value = res;
//       umTrackEvent("profileGetOtp");
//     }
//   });
// };

// onNuxtReady(async () => {
//   await profileGetOtp();
// });
</script>

<template>
  <div class="flex flex-col justify-between gap-4 p-4">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-center gap-4">
        <div
          class="flex justify-center items-center rounded-2xl size-16 bg-white dark:bg-gray-800"
        >
          <Icon class="fill-black" size="32" name="icon:ic-lock-unlock-line" />
        </div>
        <span>رمز خرید کالابرگ</span>
      </div>
      <div
        class="flex flex-col items-center gap-4 p-4 sm:p-6 rounded-4xl bg-gray-50 dark:bg-gray-950"
      >
        <ClientOnly>
          <vue3-barcode
            class="bg-transparent"
            :value="get_otp?.otp"
            :height="50"
            v-if="get_otp"
          />
          <Skeleton class="rounded-sm w-40 h-24" v-else />
        </ClientOnly>
      </div>
      <div
        class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
      >
        <span class="text-sm text-blue-950 dark:text-blue-100"> تاریخ: </span>
        <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
          {{
            new Date().toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          }}
        </span>
      </div>
      <div
        class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
      >
        <span class="text-sm text-blue-950 dark:text-blue-100"> ساعت: </span>
        <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
          {{
            new Date().toLocaleTimeString("fa-IR", {
              hour: "2-digit",
              minute: "2-digit",
            })
          }}
        </span>
      </div>
    </div>
    <div class="flex flex-col justify-end gap-4">
      <Button @click="copyToClipboard(get_otp?.otp)"> کپی کردن رمز </Button>
    </div>
  </div>
</template>

<style lang="css"></style>
