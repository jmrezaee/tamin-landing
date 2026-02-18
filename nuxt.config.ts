// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  ssr: false,

  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss() as any],
  },

  modules: [
    "shadcn-nuxt",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@nuxtjs/device",
    "nuxt-vitalizer",
  ],

  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },

  icon: {
    mode: "svg",
    size: "24px",
    customCollections: [
      {
        prefix: "icon",
        dir: "./app/assets/icons",
      },
    ],
    clientBundle: {
      sizeLimitKb: 1024,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      title: "شمیم",
      titleTemplate: "%s | شبکه ملی یارانه های متمرکز",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
          sizes: "48x48",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
          sizes: "any",
        },
        {
          rel: "apple-touch-icon-precomposed",
          href: "/apple-touch-icon-precomposed.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon-180x180.png",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "ie=edge",
        },
        {
          name: "description",
          content: "شبکه ملی یارانه های متمرکز",
        },
        {
          name: "author",
          content: "شمیم | شبکه ملی یارانه های متمرکز",
        },
        // Twitter
        // Test on: https://cards-dev.twitter.com/validator
        {
          name: "twitter:card",
          content: "summary",
        },
        { name: "twitter:site", content: "شمیم" },
        {
          name: "twitter:url",
          content: `${process.env.WEB_URL}`,
        },
        {
          name: "twitter:title",
          content: "شمیم",
        },
        {
          name: "twitter:description",
          content: "شبکه ملی یارانه های متمرکز",
        },
        {
          name: "twitter:image",
          content: `${process.env.WEB_URL}/icon.png`,
        },
        // Open Graph
        // Test on: https://developers.facebook.com/tools/debug/
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "شمیم شبکه ملی یارانه های متمرکز",
        },
        {
          property: "og:url",
          content: `${process.env.WEB_URL}`,
        },
        {
          property: "og:title",
          content: "شمیم",
        },
        {
          property: "og:description",
          content: "شبکه ملی یارانه های متمرکز",
        },
        {
          property: "og:image",
          content: `${process.env.WEB_URL}/icon.png`,
        },
        {
          property: "og:image:secure_url",
          content: `${process.env.WEB_URL}/icon.png`,
        },
        {
          property: "og:image:alt",
          content: "شمیم | شبکه ملی یارانه های متمرکز",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      webUrl: process.env.WEB_URL,
      mode: process.env.MODE,
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseVapidKey: process.env.FIREBASE_VAPID_KEY,
    },
  },

  vitalizer: {
    disablePrefetchLinks: true,
    disablePreloadLinks: true,
    disableStylesheets: "entry",
  },

  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
    routeRules: {
      "/app/**": {
        proxy: `${process.env.BASE_URL}/**`,
      },
    },
  },
});
