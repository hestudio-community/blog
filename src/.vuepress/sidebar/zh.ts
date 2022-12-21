import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      icon: "read",
      text: "文档",
      prefix: "docs/",
      children: "structure",
    },
  ],
  "/posts/": [
    {
      text: "文章",
      icon: "note",
      prefix: "/",
      children: "structure",
    },
  ],
});
