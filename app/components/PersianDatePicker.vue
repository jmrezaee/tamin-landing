<script setup lang="ts">
import type { DateValue } from "@internationalized/date";
import {
  DateFormatter,
  getLocalTimeZone,
  PersianCalendar,
  toCalendar,
  today,
} from "@internationalized/date";

import { CalendarIcon } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const defaultPlaceholder = ref(
  toCalendar(today(getLocalTimeZone()), new PersianCalendar()),
) as Ref<DateValue>;
const date = ref() as Ref<DateValue>;

const df = new DateFormatter("fa-IR", {
  dateStyle: "long",
});
</script>

<template>
  <Popover v-slot="{ close }">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="
          cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )
        "
      >
        <CalendarIcon />
        {{ date ? df.format(date.toDate(getLocalTimeZone())) : "انتخاب تاریخ" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" align="start">
      <Calendar
        v-model="date"
        :default-placeholder="defaultPlaceholder"
        layout="month-and-year"
        initial-focus
        locale="fa-IR"
        :week-starts-on="6"
        @update:model-value="close"
      />
    </PopoverContent>
  </Popover>
</template>
