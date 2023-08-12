import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { removePWAPlugin } from "vuepress-plugin-remove-pwa";
import theme from "./theme.js";

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
