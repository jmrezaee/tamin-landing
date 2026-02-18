<script setup lang="ts">
const options = ref({
  title: "تکمیل فرآیند احراز هویت",
  description: "کاربر گرامی، لطفا کد ملی خود را جهت احراز هویت وارد کنید.",
  image: "/images/image-kyc.webp",
  image_class: "w-full h-auto object-cover",
});

const steps = ref(1);
const goStep = (step: number) => {
  steps.value = step;
};

const { data } = useAuth();
const me = ref(data.value);

watchEffect(() => {
  if (me.value?.status === "pending") {
    steps.value = 2;
  }
});
</script>

<template>
  <div
    class="flex flex-col justify-between gap-8 h-dvh bg-linear-to-b from-[#F2F7FF] to-[#F3F8FF] relative"
  >
    <CommonIntroHeader :options="options" />
    <div class="p-4 py-6 rounded-t-4xl bg-white sticky bottom-0 left-0 right-0">
      <KycForm v-if="steps === 1" />
      <KycTracker @goStep="goStep" v-else-if="steps === 2" />
    </div>
  </div>
</template>

<style lang="css"></style>
