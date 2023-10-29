import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
// import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://www.hestudio.net",

  author: {
    name: "undefined",
    url: "https://www.hestudio.net/about/",
    email: "hestudio@hestudio.net"
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  logoDark: "/dark.svg",

  repo: "https://github.com/hestudio-community/blog.git",
  repoDisplay: false,

  docsDir: "docs",

  // 自定义部分

  fullscreen: true,

  copyright: '<a href="/docs/legal.html" target="_blank">Copyright © heStudio 2021-2023</a>',

  // 自定义部分结束

  pageInfo: ["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"],

  blog: {
    avatar: "https://image.hestudio.net/i/2023/09/24/650f24a97753f.png",
    name: "undefined",
    roundAvatar: true,
    medias: {
      // Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/1511806753",
      // Bitbucket: "https://example.com",
      CSDN: [
        "https://bbs.csdn.net/forums/hestudio",
        '<svg t="1673750783640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2004" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#CE000D" p-id="2005"></path></svg>',
      ],
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Fish: [
      //   'https://m.tb.cn/h.UGbGzvZ?tk=6CpZdl6c79o',
      //   '<svg t="1681577836657" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4808" data-spm-anchor-id="a313x.7781069.0.i21" width="200" height="200"><path d="M619.8 464.32h106.44v36.6h-106.44v-36.6z m0 89.8h106.44v35.48h-106.44v-35.48z m159.64 0h104.24v35.48h-104.24v-35.48z m0 0" p-id="4809" fill="#fee50f" data-spm-anchor-id="a313x.7781069.0.i20" class=""></path><path d="M512 0C229.24 0 0 229.2 0 512c0 282.76 229.24 512 512 512s512-229.2 512-512S794.76 0 512 0zM187.24 335.68a26.6 26.6 0 0 1 26.64-26.6c14.72 0 26.6 11.92 26.6 26.6v29.96c0 14.72-11.92 26.64-26.6 26.64-14.72 0-26.64-11.92-26.64-26.64v-29.96z m57.64 352.64c0 9.52-5.08 18.32-13.32 23.04a26.636 26.636 0 0 1-26.64 0 26.592 26.592 0 0 1-13.32-23.04v-90.92a26.6 26.6 0 0 1 26.64-26.6c14.72 0 26.64 11.92 26.64 26.6v90.92z m158.72 0c0 9.52-5.08 18.32-13.32 23.04a26.636 26.636 0 0 1-26.64 0 26.592 26.592 0 0 1-13.32-23.04v-90.92c0-9.52 5.08-18.28 13.32-23.04a26.636 26.636 0 0 1 39.96 23.04v90.92z m79.88 0c0 9.52-5.08 18.32-13.32 23.04a26.636 26.636 0 0 1-26.64 0 26.592 26.592 0 0 1-13.32-23.04v-180.8H324.76v180.8c0 9.52-5.08 18.32-13.32 23.04a26.636 26.636 0 0 1-26.64 0 26.592 26.592 0 0 1-13.32-23.04v-180.8H165.04v180.8c0 9.52-5.08 18.32-13.32 23.04a26.636 26.636 0 0 1-26.64 0 26.592 26.592 0 0 1-13.32-23.04v-332.8a26.636 26.636 0 1 1 53.28 0v98.8h106.28v-8.92c0-9.52 5.08-18.32 13.32-23.04a26.636 26.636 0 0 1 39.96 23.04v8.88h105.48V382.24h-140.8c-9.52 0-18.32-5.08-23.04-13.32a26.636 26.636 0 0 1 23.04-39.96h167.48c7.08 0 13.84 2.8 18.84 7.8a26.608 26.608 0 0 1 7.8 18.84l0.08 332.72z m81.92-352.64c0-7.04 2.8-13.84 7.8-18.84a26.608 26.608 0 0 1 18.84-7.8h317.44c7.08 0 13.84 2.8 18.84 7.8s7.8 11.76 7.8 18.84v29.96c0 14.72-11.92 26.64-26.64 26.64s-26.64-11.92-26.64-26.64v-3.32h-264.2v3.32c0 14.72-11.92 26.64-26.64 26.64s-26.64-11.92-26.64-26.64l0.04-29.96z m26.64 379.28c-14.72 0-26.64-11.92-26.64-26.64s11.92-26.64 26.64-26.64 26.64 11.92 26.64 26.64c-0.04 14.72-11.96 26.64-26.64 26.64z m107.52 0c-14.72 0-26.64-11.92-26.64-26.64s11.92-26.64 26.64-26.64 26.64 11.92 26.64 26.64c-0.04 14.72-11.96 26.64-26.64 26.64z m105.36 0c-14.72 0-26.64-11.92-26.64-26.64s11.92-26.64 26.64-26.64 26.64 11.92 26.64 26.64c-0.04 14.72-11.96 26.64-26.64 26.64z m105.36 0c-14.72 0-26.64-11.92-26.64-26.64s11.92-26.64 26.64-26.64 26.64 11.92 26.64 26.64c-0.04 14.72-11.96 26.64-26.64 26.64z m0-70.96c-2.56 0-5.16-0.4-7.64-1.12h-309.52c-7.08 0-13.84-2.8-18.84-7.8a26.608 26.608 0 0 1-7.8-18.84v-178.56c0-7.04 2.8-13.84 7.8-18.84a26.4 26.4 0 0 1 18.84-7.76h145a26.62 26.62 0 0 1 29.44 0h142.76c7.08 0 13.84 2.8 18.84 7.8a26.608 26.608 0 0 1 7.8 18.84v179.64c0 7.08-2.8 13.84-7.8 18.84a26.772 26.772 0 0 1-18.88 7.8z m0 0" p-id="4810" fill="#fee50f"></path><path d="M779.44 464.32h104.24v36.6h-104.24z" p-id="4811" fill="#fee50f"></path></svg>',
      // ],
      Email: "mailto:hestudio@hestudio.net",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://gitee.com/heStudio",
      GitHub: "https://github.com/hestudio-community",
      // Gitlab: "https://gitlab.com/hestudio",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "https://pd.qq.com/s/am85w6nbs",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",

      Rss: "https://www.hestudio.net/atom.xml",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      Wechat: "https://work.weixin.qq.com/kfid/kfcbe17894dfd6c78f2",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  sidebarSorter: ["readme", "date-desc"],

  prevLink: false,
  nextLink: false,
  editLink: false,
  contributors: false,

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      navbarAutoHide: "none",

      navbarLayout: {
        start: ["Brand"],
        center: [],
        end: ["Links","Language", "Repo", "Outlook", "Search"],
      },
      hideSiteNameOnMobile: false,

      
      // sidebar
      sidebar: false,
    
      footer: '<p><a href="https://beian.miit.gov.cn" target="_blank">鲁ICP备2023019014号-1</a></p><p><a href="https://status.hestudio.net" target="_blank">本站支持 IPV6 访问</a></p>',

      displayFooter: true,

      blog: {
        description: "Welcome to the pit!",
        intro: "/about/index.html",
      },
    },
  },

  plugins: {
    components: {
      components: [
        'Share',
        "Badge",
      ],
    },
    prismjs: {
      light: "vsc-dark-plus",
      dark: "vsc-dark-plus",
    },
    blog: {
      article: "/posts/",
    },

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!

    copyCode: {
      showInMobile: true,
    },

    photoSwipe: true,

    feed: {
      atom: true,
    },

    comment: {
      provider: "Waline",
      serverURL: "https://comment.hestudio.net",
      dark: 'html[data-theme="dark"]',
      meta: ['nick', 'mail'],
      requiredMeta: ['nick', 'mail'],
      reaction: true,
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: false,
      attrs: true,
      card: true,
      chart: false,
      codetabs: true,
      container: true,
      demo: false,
      echarts: false,
      figure: false,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: false,
      katex: false,
      mark: true,
      mermaid: false,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: false,
      vuePlayground: false,
      tasklist: true,
    },


    git: {
      contributors: false,
    },

    seo: true,

    pwa: false,
  },
},
{
  custom: true,
});
