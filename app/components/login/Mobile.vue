<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/yup";
import { useForm, Field as VeeField } from "vee-validate";
import { toast } from "vue-sonner";
import { object, string } from "yup";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const loader = useLoader();

const otp_status = ref(false);
const digitRegExp = /^\d+$/;
const phoneRegExp =
  /^(098|0098|98|\+98|0)9(0[0-5]|[1 3]\d|2[0-3]|9[0-9]|41)\d{7}$/;

const formSchema = computed(() =>
  toTypedSchema(
    object({
      mobile: string()
        .required("شماره موبایل الزامی است.")
        .matches(digitRegExp, "شماره موبایل باید فقط شامل اعداد باشد.")
        .matches(phoneRegExp, "شماره موبایل وارد شده معتبر نیست."),
      code: otp_status.value
        ? string()
            .required("کد تایید الزامی است.")
            .matches(/^\d{6}$/, "کد تایید باید ۶ رقم باشد.")
        : string().optional(),
    }),
  ),
);

const { handleSubmit, resetForm, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    mobile: "",
    code: "",
  },
});

const authorization = Authorization();
const { confirmOtp } = useAuth();
const ttl = ref(0);
const interval = ref<NodeJS.Timeout | null>(null);
const onSubmit = handleSubmit(async (data) => {
  if (!otp_status.value) {
    await authorization.requestOtp({ mobile: data.mobile }).then((res) => {
      if (res) {
        values.code = undefined;
        ttl.value = res.ttl;
        interval.value = setInterval(() => {
          ttl.value--;
          if (ttl.value === 0) {
            if (interval.value) {
              clearInterval(interval.value);
            }
          }
        }, 1000);
      }
    });
  } else {
    loader.setLoading(true);
    data.code = data.code ? convertPersianNumber(data.code) : "";
    await confirmOtp(
      {
        mobile: data.mobile,
        code: data.code,
      },
      {
        callback_url: "/account",
      },
    )
      .then((res) => {
        // const { data } = useAuth();
        // const user = ref(data.value);
        // if (
        //   !user.value?.national_code_verified ||
        //   !user.value?.identity_verified
        // ) {
        //   router.push({ name: "account-profile-kyc" });
        // } else {
        //   fetchProfileAddressList();
        //   fetchMappedWithAssetsList();
        // }
        loader.setLoading(false);
      })
      .catch((e) => {
        loader.setLoading(false);
      });
  }
});

const goAction = (action: string) => {
  switch (action) {
    case "edit_mobile":
      otp_status.value = false;
      resetForm();
      break;
    default:
      break;
  }
};
</script>

<template>
  <div class="flex flex-col justify-between gap-6">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <span class="text-lg font-semibold"> ورود به برنامه </span>
        <span class="text-sm font-normal">
          {{
            otp_status
              ? `کد تایید ارسال شده به شماره ${values.mobile} را وارد کنید`
              : "لطفا شماره موبایل خود را وارد کنید."
          }}
        </span>
      </div>
      <form id="form-mobile-login" @submit="onSubmit">
        <FieldGroup>
          <VeeField v-slot="{ field, errors }" name="code">
            <Field :data-invalid="!!errors.length" v-show="otp_status">
              <Input
                class="text-center"
                id="form-mobile-login-code"
                v-bind="field"
                placeholder="کد تایید ۶ رقمی"
                autocomplete="off"
                inputmode="numeric"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
              <FieldDescription>
                ارسال مجدد کد تایید تا
                <strong> ۱:۴۸ </strong>
              </FieldDescription>
            </Field>
          </VeeField>

          <VeeField v-slot="{ field, errors }" name="mobile">
            <Field :data-invalid="!!errors.length" v-show="!otp_status">
              <Input
                class="text-center"
                id="form-mobile-login-mobile"
                v-bind="field"
                placeholder="به طور مثال: 09123456789"
                autocomplete="off"
                inputmode="numeric"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
              <FieldDescription>
                ورود شما به معنای پذیرش
                <strong> شرایط و قوانین </strong>
                است.
              </FieldDescription>
            </Field>
          </VeeField>
        </FieldGroup>
      </form>
    </div>
    <Field orientation="vertical">
      <Button
        variant="ghost"
        :disabled="loader.loading"
        @click="goAction('edit_mobile')"
        v-if="otp_status"
      >
        ویرایش شماره موبایل
      </Button>
      <Button type="submit" form="form-mobile-login" :disabled="loader.loading">
        <Spinner class="animate-spin" v-if="loader.loading" />
        {{ otp_status ? "مرحله بعد" : "ارسال کد تایید" }}
      </Button>
    </Field>
  </div>
</template>
