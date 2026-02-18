import { defineStore } from "pinia";
import type { IUserOracleInput, IUserVerifyShahkarInput } from "@/types";

export const User = defineStore("User", {
  state: () => ({}),
  actions: {
    async verifyShahkar(payload: IUserVerifyShahkarInput) {
      try {
        const result = await useCustomFetch<object>(
          "/app/user/verify-shahkar",
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
        return result as object;
      } catch (e: any) {
        return false;
      }
    },
    async personalAsset(payload: IUserOracleInput) {
      try {
        const result = await useCustomFetch<Object>(
          "/app/user/personal-asset",
          {
            method: "GET",
            params: payload,
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
        return result as Object;
      } catch (e: any) {
        return false;
      }
    },
    async familyMember(payload: IUserOracleInput) {
      try {
        const result = await useCustomFetch<Object>(
          "/app/user/family-member",
          {
            method: "GET",
            params: payload,
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
        return result as Object;
      } catch (e: any) {
        return false;
      }
    },
    async personCar(payload: IUserOracleInput) {
      try {
        const result = await useCustomFetch<Object>(
          "/app/user/person-car",
          {
            method: "GET",
            params: payload,
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
        return result as Object;
      } catch (e: any) {
        return false;
      }
    },
    async personIncome(payload: IUserOracleInput) {
      try {
        const result = await useCustomFetch<Object>(
          "/app/user/person-income",
          {
            method: "GET",
            params: payload,
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
        return result as Object;
      } catch (e: any) {
        return false;
      }
    },
    async bankTurnover(payload: IUserOracleInput) {
      try {
        const result = await useCustomFetch<Object>(
          "/app/user/bank-turnover",
          {
            method: "GET",
            params: payload,
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
        return result as Object;
      } catch (e: any) {
        return false;
      }
    },
    async realEstate(payload: IUserOracleInput) {
      try {
        const result = await useCustomFetch<Object>(
          "/app/user/real-estate",
          {
            method: "GET",
            params: payload,
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
        return result as Object;
      } catch (e: any) {
        return false;
      }
    },
    async foreignResident(payload: IUserOracleInput) {
      try {
        const result = await useCustomFetch<Object>(
          "/app/user/foreign-resident",
          {
            method: "GET",
            params: payload,
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
        return result as Object;
      } catch (e: any) {
        return false;
      }
    },
    async stockActivity(payload: IUserOracleInput) {
      try {
        const result = await useCustomFetch<Object>(
          "/app/user/stock-activity",
          {
            method: "GET",
            params: payload,
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
        return result as Object;
      } catch (e: any) {
        return false;
      }
    },
    async specialPatient(payload: IUserOracleInput) {
      try {
        const result = await useCustomFetch<Object>(
          "/app/user/special-patient",
          {
            method: "GET",
            params: payload,
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
        return result as Object;
      } catch (e: any) {
        return false;
      }
    },
  },
});

export function setupUserStore() {
  return User();
}
