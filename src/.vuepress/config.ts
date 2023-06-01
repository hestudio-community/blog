import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { componentsPlugin } from "vuepress-plugin-components";
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
    componentsPlugin({
      rootComponents: {
        notice: [
          {
            path: "/",
            title: "网站域名更换公告",
            content: "为了响应政策，我站将逐步切换域名到 hestudio.net ，请牢记新的网站地址，详见公告！",
            actions: [
              {
                text: "查看公告",
                link: "/posts/change-domain.html",
                type: "default",
              },
            ],
          },
        ],
      },
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
