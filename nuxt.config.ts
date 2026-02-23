// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  ssr: true,

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
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      title: "سازمان تامین اجتماعی",
      titleTemplate: "%s | سامانه خرید اعتباری | اقساطی مستمری بگیران",
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
          content: "سامانه خرید اعتباری | اقساطی مستمری بگیران",
        },
        {
          name: "author",
          content:
            "سازمان تامین اجتماعی | سامانه خرید اعتباری | اقساطی مستمری بگیران",
        },
        // Twitter
        // Test on: https://cards-dev.twitter.com/validator
        {
          name: "twitter:card",
          content: "summary",
        },
        { name: "twitter:site", content: "سازمان تامین اجتماعی" },
        {
          name: "twitter:url",
          content: `${process.env.WEB_URL}`,
        },
        {
          name: "twitter:title",
          content: "سازمان تامین اجتماعی",
        },
        {
          name: "twitter:description",
          content: "سامانه خرید اعتباری | اقساطی مستمری بگیران",
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
          content:
            "سازمان تامین اجتماعی سامانه خرید اعتباری | اقساطی مستمری بگیران",
        },
        {
          property: "og:url",
          content: `${process.env.WEB_URL}`,
        },
        {
          property: "og:title",
          content: "سازمان تامین اجتماعی",
        },
        {
          property: "og:description",
          content: "سامانه خرید اعتباری | اقساطی مستمری بگیران",
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
          content:
            "سازمان تامین اجتماعی | سامانه خرید اعتباری | اقساطی مستمری بگیران",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      webUrl: process.env.WEB_URL,
      mode: process.env.MODE,
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
