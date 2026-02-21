<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row items-center gap-4 p-4 rounded-3xl bg-white">
      <div
        class="flex justify-center items-center p-px rounded-full border-2 border-solid border-gray-100 size-16 bg-white"
      >
        <img
          class="w-full h-full object-contain"
          src="@/assets/images/image-avatar.webp"
        />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-sm text-black font-semibold"> مهرداد رضائی </span>
        <span class="text-sm text-emerald-500 font-semibold"> 0015836908 </span>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center gap-4">
      <div class="flex-1 flex flex-col gap-4 p-4 rounded-3xl bg-white">
        <div
          class="flex justify-center items-center rounded-xl size-13 bg-gray-50"
        >
          <Icon class="stroke-purple-700" name="icon:ic-hemayat-dahak" />
        </div>
        <span class="text-xs text-gray-400 font-medium">
          دهک درآمدی خانوار
        </span>
        <span class="text-sm text-black font-semibold"> دهک درآمدی دهم </span>
      </div>
      <div class="flex-1 flex flex-col gap-4 p-4 rounded-3xl bg-white">
        <div
          class="flex justify-center items-center rounded-xl size-13 bg-gray-50"
        >
          <Icon class="stroke-purple-700" name="icon:ic-hemayat-yaraneh" />
        </div>
        <span class="text-xs text-gray-400 font-medium"> وضعیت یارانه </span>
        <span class="text-sm text-rose-400 font-semibold"> غیر مشمول </span>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-row justify-between items-center gap-2">
        <span class="text-sm text-gray-600 font-semibold"> مدیریت حساب </span>
      </div>
      <div class="flex flex-col gap-4 p-4 rounded-3xl bg-white">
        <div class="flex flex-row items-center gap-2">
          <div
            class="flex justify-center items-center rounded-2xl size-13 bg-gray-50"
          >
            <Icon class="stroke-gray-500" name="icon:ic-hemayat-information" />
          </div>
          <div class="flex-1 flex flex-row justify-between items-center gap-2">
            <span class="text-xs sm:text-sm text-black font-medium">
              شناسنامه اقتصادی اجتماعی خانوار
            </span>
            <Icon class="stroke-blue-700" name="icon:ic-cherv-left" />
          </div>
        </div>
        <div class="flex flex-row items-center gap-2">
          <div
            class="flex justify-center items-center rounded-2xl size-13 bg-gray-50"
          >
            <Icon class="stroke-gray-500" name="icon:ic-hemayat-kartabl" />
          </div>
          <div class="flex-1 flex flex-row justify-between items-center gap-2">
            <span class="text-xs sm:text-sm text-black font-medium">
              کارتابل درخواست‌ها
            </span>
            <Icon class="stroke-blue-700" name="icon:ic-cherv-left" />
          </div>
        </div>
        <div class="flex flex-row items-center gap-2">
          <div
            class="flex justify-center items-center rounded-2xl size-13 bg-gray-50"
          >
            <Icon class="stroke-gray-500" name="icon:ic-hemayat-support" />
          </div>
          <div class="flex-1 flex flex-row justify-between items-center gap-2">
            <span class="text-xs sm:text-sm text-black font-medium">
              تماس با پشتیبانی
            </span>
            <Icon class="stroke-blue-700" name="icon:ic-cherv-left" />
          </div>
        </div>
        <div class="flex flex-row items-center gap-2">
          <div
            class="flex justify-center items-center rounded-2xl size-13 bg-gray-50"
          >
            <Icon class="stroke-gray-500" name="icon:ic-hemayat-guide" />
          </div>
          <div class="flex-1 flex flex-row justify-between items-center gap-2">
            <span class="text-xs sm:text-sm text-black font-medium">
              راهنمای ثبت درخواست
            </span>
            <Icon class="stroke-blue-700" name="icon:ic-cherv-left" />
          </div>
        </div>
        <div class="flex flex-row items-center gap-2">
          <div
            class="flex justify-center items-center rounded-2xl size-13 bg-gray-50"
          >
            <Icon class="stroke-gray-500" name="icon:ic-hemayat-logout" />
          </div>
          <div class="flex-1 flex flex-row justify-between items-center gap-2">
            <span class="text-xs sm:text-sm text-black font-medium">
              خروج از حساب کاربری
            </span>
            <Icon class="stroke-blue-700" name="icon:ic-cherv-left" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
