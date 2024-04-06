import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  "/",
  {
    text: "文章",
    link: "/posts/",
    icon: "grommet-icons:article",
  },
  "/docs/",
  "/common/",
  "/talking/",
  "/get-help/",
  "/about/",
  "/links/",
  "/donate/",
]);
