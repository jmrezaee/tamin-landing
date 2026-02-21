<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/yup";
import { useForm, Field as VeeField } from "vee-validate";
import { toast } from "vue-sonner";
import { object, string } from "yup";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

const loader = useLoader();

const invoice_show = ref({
  id: 1,
  asset_id: 1,
  created_at: "2024-06-01T12:34:56Z",
  final_amount: 250000,
  user_asset_amount: 150000,
  cash_amount: 100000,
  payment_status: "paid",
  credit_strategy: "installment",
  status: "in",
  shop: {
    name: "shop1",
    display_name: "فروشگاه شماره یک",
    logo: "https://github.com/shadcn.png",
  },
  branch: {
    name: "شعبه مرکزی",
  },
});

const violations_types = ref([
  { key: "underpricing", label: "کم فروشی" },
  { key: "overpricing", label: "گران فروشی" },
  { key: "rejection", label: "عدم پذیرش کالابرگ" },
  { key: "excess_amount", label: "دریافت مبلغ مازاد" },
]);
const selected_violations = ref<{ key: string; label: string }[]>([]);
const selectViolation = (violation: { key: string; label: string }) => {
  if (selected_violations.value.includes(violation)) {
    selected_violations.value = selected_violations.value.filter(
      (v) => v !== violation,
    );
  } else {
    selected_violations.value.push(violation);
  }
};

const rating = ref(0);

const formSchema = computed(() =>
  toTypedSchema(
    object({
      description: string().required("توضیحات الزامی است."),
    }),
  ),
);

const { handleSubmit, resetForm, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    description: "",
  },
});

const user = User();
const onSubmit = handleSubmit(async (data) => {
  console.log("Selected Violations:", selected_violations.value);
  console.log("Rating:", rating.value);
  console.log("Description:", data.description);
  // await user.verifyShahkar({ description: data.description }).then((res) => {
  //   if (res) {
  //     toast.success("درخواست با موفقیت ارسال شد.");
  //   }
  // });
});
</script>

<template>
  <div class="flex flex-col justify-between gap-4 p-4" v-if="invoice_show">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div
          class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
        >
          <span class="text-sm text-blue-950 dark:text-blue-100">
            نام فروشگاه:
          </span>
          <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
            {{ invoice_show.shop.display_name || invoice_show.shop.name }}
          </span>
        </div>
        <div
          class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
        >
          <span class="text-sm text-blue-950 dark:text-blue-100">
            شناسه ترمینال:
          </span>
          <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
            {{ invoice_show.id }}
          </span>
        </div>
        <div
          class="flex flex-row justify-between items-center gap-2 p-3 rounded-xl border border-solid border-gray-100 dark:border-gray-900"
        >
          <span class="text-sm text-blue-950 dark:text-blue-100">
            کد تراکنش:
          </span>
          <span class="text-sm font-semibold text-blue-950 dark:text-blue-100">
            {{ invoice_show.asset_id }}
          </span>
        </div>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-2 text-center">
        <div
          class="rounded-2xl border-2 border-solid p-4 cursor-pointer"
          :class="{
            'border-gray-200 bg-gray-50': !selected_violations.includes(item),
            'border-rose-200 bg-rose-50': selected_violations.includes(item),
          }"
          v-for="(item, index) in violations_types"
          :key="item.key"
          @click="selectViolation(item)"
        >
          <span class="text-xs text-black font-semibold">
            {{ item.label }}
          </span>
        </div>
      </div>
      <div class="flex flex-row justify-between items-center gap-2">
        <span class="text-xs font-bold">به این فاکتور امتیاز دهید:</span>
        <CommonRating v-model="rating" :max-stars="5" />
      </div>
      <form id="form-violation" @submit="onSubmit">
        <FieldGroup>
          <VeeField v-slot="{ field, errors }" name="description">
            <Field :data-invalid="!!errors.length">
              <Textarea
                id="form-violation-description"
                v-bind="field"
                placeholder="توضیحات خود را وارد کنید"
                autocomplete="off"
                inputmode="text"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
        </FieldGroup>
      </form>
    </div>
    <Field orientation="vertical">
      <Button type="submit" form="form-violation" :disabled="loader.loading">
        <Spinner class="animate-spin" v-if="loader.loading" />
        ثبت گزارش
      </Button>
    </Field>
  </div>
</template>

<style lang="css"></style>
