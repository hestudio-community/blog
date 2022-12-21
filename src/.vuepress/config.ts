import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    [
      'script',{
      type: 'text/javascript',
      "data-ad-client": 'ca-pub-9539803519556987',
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      crossorigin: "anonymous"
    },
  ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "heStudio",
      description: "Welcome to the pit!",
    },
  },

  theme,

  plugins: [
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
