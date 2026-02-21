<script setup lang="ts">
const action_types = ref([
  { name: "واریز", icon: "icon:ic-deposit" },
  { name: "انتقال", icon: "icon:ic-transfer" },
  { name: "برداشت", icon: "icon:ic-withdraw" },
]);
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="rounded-2xl bg-linear-to-br from-[#008CFF] to-[#0704B0]">
      <div
        class="flex flex-col gap-4 p-4 bg-[url('@/assets/images/image-bg-pattern.webp')] bg-no-repeat bg-top bg-cover"
      >
        <span class="text-white font-semibold"> محمد مهدی سلیمانی </span>
        <div class="flex flex-col items-end">
          <span class="text-2xl text-white font-bold">
            {{ toCurrencyFixedString(165489752, 2) }}
          </span>
          <span class="text-sm text-white font-normal"> ریال </span>
        </div>
        <div class="flex flex-col gap-2">
          <div
            class="flex flex-row justify-between items-center p-4 rounded-2xl border border-solid border-white/30 bg-white/15 backdrop-blur-3xl"
          >
            <span class="text-sm text-white"> آدرس کیف پول: </span>
            <div class="flex flex-row justify-end items-center gap-2">
              <span class="text-sm text-white font-bold"> 0015836908 </span>
              <Icon
                class="stroke-white size-5 cursor-pointer"
                name="icon:ic-copy"
                @click="copyToClipboard('0015836908')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div
        class="flex flex-col justify-center items-center gap-2 p-4 rounded-2xl bg-white cursor-pointer"
        v-for="(item, index) in action_types"
        :key="index"
      >
        <Icon class="stroke-purple-700" :name="item.icon" />
        <span class="text-sm text-black"> {{ item.name }} </span>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
