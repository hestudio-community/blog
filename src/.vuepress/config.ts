import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { removePWAPlugin } from "vuepress-plugin-remove-pwa";
import { socialSharePlugin } from 'vuepress-plugin-social-share'
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
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => "page.frontmatter.category",
          formatter: "分类：$content",
        },
        {
          getter: (page) => "page.frontmatter.tag",
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  shouldPrefetch: false,
});
