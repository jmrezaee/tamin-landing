import { defineStore } from "pinia";
import type {
  IConfirmOtp,
  IConfirmOtpInput,
  IMe,
  IRequestOtp,
  IRequestOtpInput,
} from "@/types";

export const Authorization = defineStore("Authorization", {
  state: () => ({}),
  actions: {
    async requestOtp(payload: IRequestOtpInput) {
      try {
        const result = await useCustomFetch<IRequestOtp>(
          "/app/auth/request-otp",
          {
            method: "POST",
            body: payload,
          },
        )
          .then((res: any) => {
            if (res.meta?.status) {
              return res.data;
            }
            return false;
          })
          .catch((e) => {
            if (e.response.status === 425) {
              return e.response._data.meta.errors;
            }
            return false;
          });
        return result as IRequestOtp;
      } catch (e: any) {
        return false;
      }
    },
    async confirmOtp(payload: IConfirmOtpInput) {
      try {
        const result = await useCustomFetch<IConfirmOtp | boolean>(
          "/app/auth/confirm-otp",
          {
            method: "POST",
            body: payload,
          },
        )
          .then((res: any) => {
            if (res.meta?.status) {
              return res.data;
            }
            return false;
          })
          .catch((e) => {
            return false;
          });
        return result as IConfirmOtp | boolean;
      } catch (e: any) {
        return false;
      }
    },
    async me(payload: any) {
      try {
        const result = await useCustomFetch<IMe>("/app/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${payload.token}`,
            Accept: "application/json",
          },
        })
          .then((res: any) => {
            if (res.meta?.status) {
              return res.data;
            }
            return false;
          })
          .catch((e) => {
            return false;
          });
        return result as IMe;
      } catch (e: any) {
        return false;
      }
    },
    async logout() {
      try {
        const result = await useCustomFetch<object>("/app/auth/logout", {
          method: "DELETE",
        })
          .then((res: any) => {
            if (res.meta?.status) {
              return res.data;
            }
            return false;
          })
          .catch((e) => {
            return false;
          });
        return result as object;
      } catch (e: any) {
        return false;
      }
    },
  },
});

export function setupAuthorizationStore() {
  return Authorization();
}
