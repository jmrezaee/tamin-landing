<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const router = useRouter();
const loader = useLoader();

const { data, getSession } = useAuth();
const me = ref(data.value);

const fetchUser = async () => {
  loader.loading = true;
  await getSession();
  loader.loading = false;
};

const emit = defineEmits(["goStep"]);
const goStep = (step: number) => {
  emit("goStep", step);
};

const ttl = ref(0);
const interval = ref<NodeJS.Timeout | null>(null);
const startTtl = () => {
  ttl.value = 15;
  interval.value = setInterval(() => {
    ttl.value--;
    if (ttl.value === 0) {
      if (interval.value) {
        clearInterval(interval.value);
      }
    }
  }, 1000);
};
const fetch = async () => {
  await fetchUser();
  startTtl();
};

const onSubmit = async () => {
  if (me.value?.status === "pending" && !ttl.value) {
    await fetch();
  } else if (
    me.value?.status === "not_started" ||
    me.value?.status === "rejected" ||
    me.value?.status === "error"
  ) {
    goStep(1);
  } else if (me.value?.status === "approved") {
    router.push({ name: "account" });
  }
};

onNuxtReady(async () => {
  await fetch();
});
</script>

<template>
  <div class="flex flex-col justify-between gap-6">
    <div class="flex flex-col gap-4">
      <div
        class="flex flex-row justify-between items-center gap-2 p-3 rounded-2xl border border-solid border-green-500"
      >
        <div class="flex flex-row items-center gap-2">
          <div
            class="flex justify-center items-center rounded-xl size-11 bg-gray-100 dark:bg-gray-800 cursor-pointer"
          >
            <Icon size="24" name="icon:ic-tick-circle" />
          </div>
          <span class="text-xs">شماره موبایل</span>
        </div>
        <div class="flex flex-col items-end gap-2">
          <span class="text-xs">
            {{ me?.mobile }}
          </span>
        </div>
      </div>
      <div
        class="flex flex-row justify-between items-center gap-2 p-3 rounded-2xl border border-solid"
        :class="{
          'border-green-500': me?.status === 'approved',
          'border-primary-500':
            me?.status === 'not_started' || me?.status === 'pending',
          'border-red-500': me?.status === 'rejected' || me?.status === 'error',
        }"
      >
        <div class="flex flex-row items-center gap-2">
          <div
            class="flex justify-center items-center rounded-xl size-11 bg-gray-100 dark:bg-gray-800 cursor-pointer"
          >
            <Icon
              size="24"
              name="icon:ic-tick-circle"
              v-if="me?.status === 'approved'"
            />
            <Icon
              class="animate-spin"
              size="24"
              name="icon:ic-loader-4-line"
              v-if="me?.status === 'not_started' || me?.status === 'pending'"
            />
            <Icon
              size="24"
              name="icon:ic-information-line"
              v-if="me?.status === 'rejected' || me?.status === 'error'"
            />
          </div>
          <span class="text-xs">استعلام مالکیت سیم کارت</span>
        </div>
        <div class="flex flex-col items-end gap-2">
          <span class="text-xs">
            {{ me?.national_code }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <Button :disabled="loader.loading" @click="onSubmit">
        <Spinner class="animate-spin" v-if="loader.loading" />
        <template v-if="me?.status === 'pending'">
          {{ ttl ? "منتظر بمانید... " + "(" + ttl + ")" : "بررسی مجدد" }}
        </template>
        <template
          v-else-if="
            me?.status === 'not_started' ||
            me?.status === 'rejected' ||
            me?.status === 'error'
          "
        >
          تکمیل اطلاعات
        </template>
        <template v-else-if="me?.status === 'approved'"> ادامه </template>
      </Button>
    </div>
  </div>
</template>
