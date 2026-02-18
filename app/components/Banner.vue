<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Checkbox } from "@/components/ui/checkbox";
import { toTypedSchema } from "@vee-validate/yup";
import { Form, useForm, Field as VeeField } from "vee-validate";
import { toast } from "vue-sonner";
import { boolean, object } from "yup";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});

const loader = useLoader();
const modal = ref();

// const { data } = useAuth();
// const me = ref(data.value);
const me = ref({
  id: 1,
  full_name: "مهرداد رضایی",
  status: "active",
  yaraneh_status: "5",
  national_code: "1234567890",
  mobile: "09123456789",
  is_head: true,
  request_status: 0,
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-01-01T00:00:00Z",
});

const banners = ref([
  {
    id: 1,
    image: "/images/image-slider-1.webp",
    click: () => modal.value?.useModal(true),
  },
  { id: 2, image: "/images/image-slider-2.webp" },
  { id: 3, image: "/images/image-slider-3.webp" },
  { id: 4, image: "/images/image-slider-4.webp" },
]);

const formSchema = computed(() =>
  toTypedSchema(
    object({
      terms: boolean()
        .test(
          "terms",
          "تایید سکونت در ایران الزامی میباشد.",
          (value) => value === true,
        )
        .required("تایید سکونت در ایران الزامی میباشد."),
    }),
  ),
);

const { handleSubmit, resetForm, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    terms: false,
  },
});

const onSubmit = handleSubmit(async (data) => {
  console.log(data);
  modal.value?.useModal(false);
  toast.success("درخواست شما با موفقیت ثبت شد.");
});
</script>

<template>
  <Carousel
    class="p-4 w-full relative"
    :opts="{ direction: 'rtl', loop: true }"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play()]"
  >
    <CarouselContent>
      <CarouselItem
        v-for="(item, index) in banners"
        :key="index"
        @click="item.click && item.click()"
      >
        <img class="h-full w-full object-contain" :src="item.image" />
      </CarouselItem>
    </CarouselContent>
  </Carousel>

  <CommonModal
    ref="modal"
    title="دریافت کالابرگ"
    :has_footer="!(me?.is_head && me?.request_status === 0)"
  >
    <template #default>
      <div class="flex flex-col gap-4">
        <template v-if="me?.is_head === null">
          <div
            class="text-base text-black dark:text-white font-normal! text-justify"
          >
            «اطلاعات یافت نشد. جهت بررسی اطلاعات خانوار به درگاه سازمان ثبت
            احوال به آدرس
            <a class="font-semibold" href="https://ncr.ir" target="_blank">
              http://ncr.ir
            </a>
            مراجعه نمایید و در صورت تأیید، ساختار خانوار خود را در درگاه سازمان
            هدفمندسازی یارانه‌ها به نشانی
            <a
              class="font-semibold"
              href="https://simin.hadafmandi.ir/login"
              target="_blank"
            >
              http://simin.hadafmandi.ir
            </a>
            ثبت نمایید.
            <br />
            پس از تکمیل مراحل فوق، اعتبار کالابرگ حداکثر ظرف مدت یک ماه به حساب
            سرپرست خانوار واریز خواهد شد. بدیهی است در صورت عدم تأیید اطلاعات
            خانوار، ثبت درخواست اصلاح اطلاعات در درگاه سازمان ثبت احوال الزامی
            بوده و در این صورت، اعمال تغییرات و تخصیص اعتبار حداکثر ظرف مدت سه
            ماه انجام خواهد پذیرفت.»
          </div>
        </template>
        <template v-else-if="me?.is_head === true">
          <template v-if="me?.request_status === 0">
            <Alert>
              <AlertTitle> قابل توجه خانوارهای نیروهای مسلح: </AlertTitle>
              <AlertDescription>
                کالابرگ الکترونیک خانوارهای نیروهای مسلح از مرجع آن سازمان
                پرداخت میگردد. از ثبت درخواست در این سامانه خودداری نمایید.
              </AlertDescription>
            </Alert>
            <div class="text-base text-black dark:text-white font-normal!">
              اینجانب
              <span class="font-bold">
                {{ me?.full_name || "---" }}
              </span>
              به کد ملی
              <span class="font-bold">
                {{ me?.national_code || "---" }}
              </span>
              درخواست اعتبار کالابرگ الکترونیک دارم.
            </div>
            <form id="form-request" @submit="onSubmit">
              <FieldGroup>
                <VeeField v-slot="{ field, errors }" name="terms">
                  <FieldSet :data-invalid="!!errors.length">
                    <FieldGroup data-slot="checkbox-group">
                      <Field
                        key="terms"
                        orientation="horizontal"
                        :data-invalid="!!errors.length"
                      >
                        <Checkbox
                          id="form-request-terms"
                          :name="field.name"
                          :aria-invalid="!!errors.length"
                          :model-value="field.value"
                          @update:model-value="field.onChange"
                        />
                        <FieldLabel
                          for="form-request-terms"
                          class="font-normal"
                        >
                          تایید میکنم که من ساکن ایران هستم.
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                    <FieldError v-if="errors.length" :errors="errors" />
                  </FieldSet>
                </VeeField>
              </FieldGroup>
            </form>
            <Field orientation="vertical">
              <Button
                type="submit"
                form="form-request"
                :disabled="loader.loading"
              >
                <Spinner class="animate-spin" v-if="loader.loading" />
                تایید و ادامه
              </Button>
              <Button
                variant="ghost"
                :disabled="loader.loading"
                @click="modal.useModal(false)"
              >
                انصراف
              </Button>
            </Field>
          </template>
          <template v-if="me?.request_status === 1">
            <div class="text-base text-black dark:text-white font-normal!">
              <span class="font-bold">
                {{ me?.full_name || "---" }}
              </span>
              به کد ملی
              <span class="font-bold">
                {{ me?.national_code || "---" }}
              </span>
              مشمول دریافت کالابرگ هستید.
            </div>
          </template>
          <template v-if="me?.request_status === 2">
            <div
              class="text-base text-black dark:text-white font-normal! text-justify"
              v-if="me?.yaraneh_status === '5'"
            >
              <span class="font-bold">
                {{ me?.full_name || "---" }}
              </span>
              به کد ملی
              <span class="font-bold">
                {{ me?.national_code || "---" }}
              </span>
              درخواست شما با موفقیت ثبت شد. پرداخت اعتبار کالابرگ منوط به ثبت و
              تأیید اطلاعات خانوار می‌باشد. لطفاً در اسرع وقت با مراجعه به درگاه
              سازمان ثبت احوال به نشانی
              <a class="font-semibold" href="https://ncr.ir" target="_blank">
                http://ncr.ir
              </a>
              نسبت به بررسی اطلاعات خانوار اقدام نموده و در صورت تأیید، ساختار
              خانوار خود را در درگاه سازمان هدفمندسازی یارانه‌ها به نشانی
              <a
                class="font-semibold"
                href="https://simin.hadafmandi.ir/login"
                target="_blank"
              >
                http://simin.hadafmandi.ir
              </a>
              ثبت نمایید.
              <br />
              پس از تکمیل مراحل فوق، اعتبار کالابرگ حداکثر ظرف مدت یک ماه به
              حساب سرپرست خانوار واریز خواهد شد.
              <br />
              بدیهی است در صورت عدم تأیید اطلاعات خانوار، ثبت درخواست اصلاح
              اطلاعات در درگاه سازمان ثبت احوال الزامی بوده و در این صورت، اعمال
              تغییرات و تخصیص اعتبار حداکثر ظرف مدت سه ماه انجام خواهد پذیرفت.
            </div>
            <div
              class="text-base text-black dark:text-white font-normal!"
              v-else
            >
              <span class="font-bold">
                {{ me?.full_name || "---" }}
              </span>
              به کد ملی
              <span class="font-bold">
                {{ me?.national_code || "---" }}
              </span>
              درخواست شما جهت دریافت کالابرگ الکترونیکی با موفقیت ثبت شد، لطفا
              از مراجعه حضوری خودداری فرمایید.
            </div>
          </template>
        </template>
        <template v-else-if="me?.is_head === false">
          <div class="text-base text-black dark:text-white font-normal!">
            کدملی
            <span class="font-bold">
              {{ me?.national_code || "---" }}
            </span>
            سرپرست خانوار نمی‌باشد. لطفا با شماره سرپرست خانوار وارد شوید.
          </div>
        </template>
      </div>
    </template>
  </CommonModal>
</template>

<style lang="css"></style>
