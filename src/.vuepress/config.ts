import { getDirname, path } from '@vuepress/utils';
import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { removePWAPlugin } from "vuepress-plugin-remove-pwa";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "heStudio",
      description: "Welcome to the pit!",
    },
  },

  theme,

  alias: {
    // 你可以在这里将别名定向到自己的组件
    "@theme-hope/components/NormalPage": path.resolve(
      __dirname,
      "./components/NormalPage.vue",
    ),
  },

  plugins: [
    // socialSharePlugin({
    //   networks: ["email", "weibo", "douban", "qq", "wechat", "qrcode"],
    // }),
    removePWAPlugin({
      cachePrefix: "workbox",
      swLocation: 'service-worker.js',
    }),
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-YTW6F8F5GC',
    }),
    searchPlugin({
      // 配置项
      maxSuggestions: 100,
    }),
  ],

  shouldPrefetch: false,
});
