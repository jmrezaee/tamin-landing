<script setup lang="ts">
import type { DateValue } from "@internationalized/date";
import {
  getLocalTimeZone,
  PersianCalendar,
  toCalendar,
  today,
} from "@internationalized/date";
import { Calendar } from "@/components/ui/calendar";

const date = ref(today(getLocalTimeZone())) as Ref<DateValue>; // no need to add calendar identifier to modelValue when using placeholder

const placeholder = ref(
  toCalendar(today(getLocalTimeZone()), new PersianCalendar()),
) as Ref<DateValue>;
</script>

<template>
  <Calendar
    class="w-fit"
    v-model="date"
    v-model:placeholder="placeholder"
    locale="fa-IR"
    :week-starts-on="6"
  />
</template>
