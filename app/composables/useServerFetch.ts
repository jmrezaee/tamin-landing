// composable/useServerFetch.ts
import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";
import { H3Event } from "h3";

export async function useServerFetch<T>(
  url: string,
  event: H3Event,
  options: UseFetchOptions<T> = {}
) {
  // Access cookies from the server event
  const userAuth = getCookie(event, "auth:token"); // getCookie() is part of the h3 package

  const defaults: any = {
    baseURL: process.env.BASE_URL, // Use environment variables
    headers: userAuth
      ? {
          Authorization: `Bearer ${userAuth}`,
        }
      : {},

    onResponseError(ctx: any) {
      // console.error(
      //   "Fetch Error:",
      //   ctx.response?.statusText || "Unknown Error"
      // );
    },
  };

  // Merge options using defu (like deep merge)
  const params: any = defu(options, defaults);

  // Use $fetch to perform the API call
  return await $fetch(url, params);
}
