<script setup lang="ts"></script>

<template>
  <div class="flex flex-col rounded-t-4xl bg-primary">
    <div class="mx-auto w-full max-w-7xl">
      <div class="flex flex-col gap-8">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 p-8"
        >
          <div class="flex flex-col gap-4">
            <Icon class="w-53 h-13" name="icon:logo-type-white" />
            <span class="text-base text-white/70 font-medium">
              طرح مهرگستر / فروش اعتباری کالا
            </span>
            <span class="text-base text-white/70 font-medium">
              تلفن پشتیبانی:
            </span>
          </div>
          <div class="flex flex-row gap-14">
            <div class="flex flex-col gap-4">
              <span class="text-lg text-white font-semibold">پذیرندگان</span>
              <span class="text-base text-white/70 font-medium">
                درخواست پذیرندگی
              </span>
              <span class="text-base text-white/70 font-medium">
                لیست پذیرندگان
              </span>
            </div>
            <div class="flex flex-col gap-4">
              <span class="text-lg text-white font-semibold">نقشه سایت</span>
              <NuxtLink class="text-base text-white/70 font-medium" to="#faq">
                سوالات متداول
              </NuxtLink>
              <NuxtLink
                class="text-base text-white/70 font-medium"
                to="#download"
              >
                دانلود اپلیکیشن
              </NuxtLink>
              <NuxtLink
                class="text-base text-white/70 font-medium"
                to="https://app.minipay.me"
                target="_blank"
              >
                ورود / ثبت نام
              </NuxtLink>
            </div>
          </div>
          <div
            class="grid-cols-1 sm:col-span-2 lg:col-span-1 flex flex-col gap-4"
          >
            <span class="text-lg text-white font-semibold">
              شبکه‌های اجتماعی
            </span>
            <div class="grid grid-cols-2 grid-rows-2 gap-4">
              <NuxtLink
                class="flex justify-center items-center gap-2 text-white p-2 rounded-lg border border-solid border-white/30 bg-white/15 backdrop-blur-3xl"
                to="https://www.instagram.com/mini_pay_me"
                target="_blank"
              >
                <Icon class="fill-white" name="icon:ic-footer-instagram" />
                <span class="text-sm text-white/50 font-normal">
                  حساب ما در
                  <span class="text-sm text-white font-semibold">
                    اینستاگرام
                  </span>
                </span>
              </NuxtLink>
              <NuxtLink
                class="flex justify-center items-center gap-2 text-white p-2 rounded-lg border border-solid border-white/30 bg-white/15 backdrop-blur-3xl"
                to="https://t.me/MiniPay_me"
                target="_blank"
              >
                <Icon class="fill-white" name="icon:ic-footer-rubika" />
                <span class="text-sm text-white/50 font-normal">
                  حـســـاب مـــــا در
                  <span class="text-sm text-white font-semibold"> تلگرام </span>
                </span>
              </NuxtLink>
              <NuxtLink
                class="flex justify-center items-center gap-2 text-white p-2 rounded-lg border border-solid border-white/30 bg-white/15 backdrop-blur-3xl"
                to="https://eitaa.com/MiniPay"
                target="_blank"
              >
                <Icon class="fill-white" name="icon:ic-footer-eeta" />
                <span class="text-sm text-white/50 font-normal">
                  حـســــاب مـــــا در
                  <span class="text-sm text-white font-semibold">
                    ایـتــــا
                  </span>
                </span>
              </NuxtLink>
              <NuxtLink
                class="flex justify-center items-center gap-2 text-white p-2 rounded-lg border border-solid border-white/30 bg-white/15 backdrop-blur-3xl"
                to="https://ble.ir/join/BzgMF3hvB3"
                target="_blank"
              >
                <Icon class="fill-white" name="icon:ic-footer-bale" />
                <span class="text-sm text-white/50 font-normal">
                  حـســـاب مـــــا در
                  <span class="text-sm text-white font-semibold">
                    بـلـــــــه
                  </span>
                </span>
              </NuxtLink>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-white/30"></div>
        <div class="text-center pb-8">
          <span class="text-sm text-white/70 font-medium">
            کلیه حقوق این وبسایت متعلق به شرکت فناوری اطلاعات رفاه ایرانیان
            (فارا) است.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
