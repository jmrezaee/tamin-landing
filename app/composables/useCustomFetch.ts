import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";
import { toast } from "vue-sonner";

export function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {},
) {
  const userAuth = useCookie("auth:token");
  // const config = useRuntimeConfig();
  const loader = useLoader();
  const request_count = ref(0);

  request_count.value++;
  loader.setLoading(true);

  const defaults: UseFetchOptions<T> = {
    // baseURL: config.public.base_url,
    // cache request
    key: url,

    // set user token if connected
    headers: userAuth.value
      ? {
          Authorization: "Bearer " + userAuth.value,
          Accept: "application/json",
        }
      : {
          Accept: "application/json",
        },

    onResponse(ctx: any) {
      // console.log("onResponse", ctx);
      request_count.value--;
      if (request_count.value === 0) {
        loader.setLoading(false);
      }
      toast.error("Event has been created", {
        description: "درخواست با موفقیت انجام شد.",
      });
    },

    onResponseError(ctx: any) {
      const urls = ref(["/app/wallet-asset-balances/show/"]);
      const in_urls = urls.value.some((item) => url.includes(item));
      // console.log("onResponseError", ctx);
      request_count.value--;
      if (request_count.value === 0) {
        loader.setLoading(false);
      }
      if (!in_urls) {
        if (
          ctx.response?.status === 500 ||
          ctx.response?.status === 504 ||
          ctx.response?._data?.statusCode === 500
        ) {
          if (ctx.response?._data?.meta?.message_code === "500-2") {
            toast.error("Event has been created", {
              description:
                ctx.response?._data?.meta?.message || "خطایی رخ داده است",
            });
          } else {
            toast.error("Event has been created", {
              description: ctx.response?.statusText || "خطایی رخ داده است",
            });
          }
        } else if (
          ctx.response?.status === 400 ||
          ctx.response?.status === 404 ||
          ctx.response?.status === 422
        ) {
          if (typeof ctx.response?._data?.meta?.message === "string") {
            toast.error("Event has been created", {
              description:
                ctx.response?._data?.meta?.message || "خطایی رخ داده است",
            });
          } else {
            Object.keys(ctx.response?._data?.meta?.message).forEach((key) => {
              toast.error("Event has been created", {
                description:
                  ctx.response?._data?.meta?.message[key][0] ||
                  "خطایی رخ داده است",
              });
            });
          }
        } else if (ctx.response?.status === 401) {
          toast.error("Event has been created", {
            description:
              ctx.response?._data?.meta?.message || "خطایی رخ داده است",
          });
          userAuth.value = null;
          location.reload();
          return;
        } else {
          toast.error("Event has been created", {
            description:
              ctx.response?._data?.meta?.message || "خطایی رخ داده است",
          });
        }
      }
    },
  };

  // for nice deep defaults, please use unjs/defu
  const params: any = defu(options, defaults);
  // console.log("params", url, params);

  return $fetch(url, params);
}
