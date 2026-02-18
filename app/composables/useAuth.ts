import type { ICallbackUrl, IMe, IConfirmOtpInput } from "@/types";

export function useAuth() {
  const router = useRouter();
  const authorization = Authorization();

  // Persistent cookie with 1-year expiration
  const cookie = useCookie("auth:token", {
    maxAge: 315360000,
    sameSite: "lax",
    // secure: process.env.NODE_ENV === "production",
  });

  // Initialize state from cookie
  const auth_token = useState<string | null>("auth:token", () => null);
  const data = useState<IMe | null>("auth.user", () => null);
  const status = useState<"authenticated" | "unauthenticated" | "loading">(
    "auth.status",
    () => "unauthenticated",
  );

  // Sync auth_token with cookie and fetch session when token changes
  // watch(auth_token, (newVal) => {
  //   if (cookie.value !== newVal) {
  //     cookie.value = newVal;
  //   }
  // });

  // Function to handle confirmOtp
  const confirmOtp = async (
    params: IConfirmOtpInput,
    callback_url: ICallbackUrl,
  ) => {
    try {
      status.value = "loading";
      const result = await authorization.confirmOtp(params);

      if (typeof result !== "object" || !result?.token)
        throw new Error("Invalid response from server");

      auth_token.value = result.token;
      status.value = "authenticated";
      cookie.value = result.token;

      const session = await getSession();

      // Check if session is valid
      if (!session) {
        status.value = "unauthenticated";
        return;
      }

      if (callback_url.callback_url) {
        router.push(callback_url.callback_url);
      }

      return { user: data.value, token: result.token };
    } catch (error) {
      status.value = "unauthenticated";
      throw error;
    }
  };

  // Function to get user session
  const getSession = async () => {
    try {
      if (!auth_token.value && !cookie.value) {
        status.value = "unauthenticated";
        return null;
      }

      status.value = "loading";
      const result = ref();

      result.value = await authorization.me({ token: cookie.value });

      if (result.value) {
        data.value = result.value;
        status.value = "authenticated";
      } else {
        clearToken();
      }

      return result;
    } catch (error) {
      clearToken();
      return null;
    }
  };

  // Function to handle logout
  const signOut = async (callback_url: ICallbackUrl) => {
    try {
      status.value = "loading";
      await authorization.logout();
      clearToken();

      router.push(callback_url.callback_url || "/");

      return { success: true };
    } catch (error) {
      throw error;
    }
  };

  // Function to clear authentication data
  const clearToken = () => {
    data.value = null;
    auth_token.value = null;
    cookie.value = null;
    status.value = "unauthenticated";
  };

  return {
    auth_token,
    data,
    status,
    confirmOtp,
    getSession,
    signOut,
    clearToken,
  };
}
