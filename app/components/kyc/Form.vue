<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/yup";
import { useForm, Field as VeeField } from "vee-validate";
import { toast } from "vue-sonner";
import { object, string } from "yup";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const loader = useLoader();

const { data } = useAuth();
const me = ref(data.value);

const digitRegExp = /^\d+$/;

const formSchema = computed(() =>
  toTypedSchema(
    object({
      national_code: string()
        .required("کدملی الزامی است.")
        .matches(digitRegExp, "کد ملی باید فقط شامل اعداد باشد.")
        .test("national_code", "ساختار کد ملی صحیح نمی‌باشد.", (value: any) => {
          if (!value) return true;
          return nationalCodeCheck(value);
        }),
    }),
  ),
);

const { handleSubmit, resetForm, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    national_code: "",
  },
});

const user = User();
const onSubmit = handleSubmit(async (data) => {
  await user
    .verifyShahkar({ national_code: data.national_code })
    .then((res) => {
      if (res) {
        toast.success("درخواست با موفقیت ارسال شد.");
      }
    });
});
</script>

<template>
  <div class="flex flex-col justify-between gap-6">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <span class="text-lg font-semibold"> احراز هویت </span>
        <span class="text-sm font-normal">
          کد ملی ۱۰ رقمی مالک شماره {{ me?.mobile }} را وارد کنید
        </span>
      </div>
      <form id="form-kyc" @submit="onSubmit">
        <FieldGroup>
          <VeeField v-slot="{ field, errors }" name="national_code">
            <Field :data-invalid="!!errors.length">
              <Input
                class="text-center"
                id="form-kyc-national_code"
                v-bind="field"
                placeholder="کد ملی ۱۰ رقمی"
                autocomplete="off"
                inputmode="numeric"
                :aria-invalid="!!errors.length"
                @input="convertPersianNumberToDigits($event)"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
        </FieldGroup>
      </form>
    </div>
    <Field orientation="vertical">
      <Button type="submit" form="form-kyc" :disabled="loader.loading">
        <Spinner class="animate-spin" v-if="loader.loading" />
        تایید و ادامه
      </Button>
    </Field>
  </div>
</template>
