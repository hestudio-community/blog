import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      icon: "read",
      text: "文档",
      prefix: "docs/",
      children: [
        'kali_for_android',
        'hestudio_bing_wallpaper_get',
        'y',
        'key',
        'patch',
        'talking',
        'copyright',
        'cookie',
        'opensource',
        'other',
        ],
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
