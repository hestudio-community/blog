import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://www.hestudio.org",

  author: {
    name: "醉、倾城",
    url: "https://www.hestudio.org/about/",
    email: "hestudio@hestudio.org"
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "docs",

  // 自定义部分

  fullscreen: true,

  copyright: '<a href="/docs/copyright.html" target="_blank">Copyright © heStudio 2021-2023</a>',

  // 自定义部分结束

  pageInfo: ["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"],

  blog: {
    avatar: "https://image.hestudio.org/img/2022/12/13/6398763d6229a.jpg",
    name: "醉、倾城",
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
      Fish: [
        'https://m.tb.cn/h.UGbGzvZ?tk=6CpZdl6c79o',
        '<svg t="1681573980036" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2640" width="200" height="200"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="2641"></path><path d="M0 0m170.666667 0l682.666666 0q170.666667 0 170.666667 170.666667l0 682.666666q0 170.666667-170.666667 170.666667l-682.666666 0q-170.666667 0-170.666667-170.666667l0-682.666666q0-170.666667 170.666667-170.666667Z" fill="#FEE50F" p-id="2642"></path><path d="M748.16 676.437333c66.901333 16.426667 118.058667 17.194667 153.173333 3.584a27.52 27.52 0 0 1 35.413334 14.762667 26.197333 26.197333 0 0 1-15.232 34.304c-47.530667 18.432-109.653333 17.493333-185.472-1.152-50.474667-9.984-91.989333-8.96-125.098667-0.512-10.965333 2.773333-20.053333 6.186667-27.178667 9.728l-2.090666 1.109333-3.669334 2.133334-1.962666 1.365333-2.389334 1.28-1.706666 0.768-3.029334 1.066667-3.968 0.768c-14.634667-0.768-24.106667-5.674667-28.501333-14.805334-4.394667-9.130667-2.176-19.413333 6.570667-30.933333l0.682666-0.682667 0.042667-0.042666h0.256l1.706667-1.322667 2.048-1.408 1.024-0.64c2.816-1.792 6.229333-3.712 10.112-5.632a192.426667 192.426667 0 0 1 38.186666-13.866667c41.258667-10.538667 91.221333-11.733333 151.082667 0.128zM195.84 561.92l17.792 7.552c5.802667 5.12 8.533333 11.178667 8.192 18.346667L221.44 705.28a25.429333 25.429333 0 0 1-7.936 17.92 27.264 27.264 0 0 1-18.901333 7.893333c-5.034667 0.170667-10.794667-2.261333-17.237334-7.381333a25.642667 25.642667 0 0 1-8.106666-18.346667l0.085333-118.826666c0.128-6.528 3.328-12.117333 8.405333-17.109334a23.125333 23.125333 0 0 1 18.090667-7.509333z m240.512-242.602667c9.685333 2.133333 16.042667 4.821333 19.072 7.936 4.522667 4.693333 7.253333 10.837333 7.125333 17.365334l-2.048 360.448a25.386667 25.386667 0 0 1-7.978666 17.92 23.381333 23.381333 0 0 1-18.517334 6.698666c-4.906667-0.213333-10.965333-2.304-18.218666-6.357333a26.922667 26.922667 0 0 1-7.552-18.133333l2.261333-207.786667-108.586667 0.298667-2.858666 207.573333a23.808 23.808 0 0 1-7.765334 17.28 22.869333 22.869333 0 0 1-18.090666 7.552c-4.48-0.085333-10.581333-2.218667-18.218667-6.4a22.101333 22.101333 0 0 1-8.149333-18.346667l2.389333-208.341333-108.544 0.298667-2.432 208.341333a24.021333 24.021333 0 0 1-8.362667 17.152 22.442667 22.442667 0 0 1-18.346666 8.106667c-4.864-0.256-10.752-2.986667-17.621334-8.192a19.242667 19.242667 0 0 1-8.533333-17.152l2.218667-361.045334a25.386667 25.386667 0 0 1 7.978666-17.92 25.301333 25.301333 0 0 1 18.517334-6.656c4.906667 0.213333 10.922667 2.56 18.048 6.912 5.76 5.12 8.064 10.453333 7.722666 17.578667l0.426667 102.741333 108.629333-0.256 0.298667-11.093333c0.298667-7.125333 3.498667-12.714667 8.746667-18.346667a21.333333 21.333333 0 0 1 17.28-7.082666c4.906667 0.213333 11.093333 2.602667 18.645333 7.168a30.72 30.72 0 0 1 8.192 18.346666l-0.938667 10.88 110.421334 0.298667-0.170667-77.013333H268.288c-9.685333-2.133333-16.042667-4.778667-19.072-7.936a26.88 26.88 0 0 1-7.509333-18.133334 24.32 24.32 0 0 1 7.765333-17.28 26.282667 26.282667 0 0 1 18.688-7.338666z m-80.298667 242.005334l19.029334 7.936c4.565333 4.693333 7.253333 10.837333 6.954666 17.92l0.682667 118.485333a23.850667 23.850667 0 0 1-7.765333 17.322667 23.466667 23.466667 0 0 1-18.901334 7.893333c-4.906667-0.213333-10.88-2.730667-17.877333-7.552a22.314667 22.314667 0 0 1-7.936-16.938667l0.128-118.869333a24.576 24.576 0 0 1 7.552-18.688 29.610667 29.610667 0 0 1 18.133333-7.509333z m208.938667-154.581334l323.072 0.938667 18.261333 6.229333a25.856 25.856 0 0 1 7.082667 13.653334l0.426667 4.138666-1.578667 4.693334 1.877333 4.394666 0.512 160.512-1.194666 3.498667 0.64 4.053333a20.778667 20.778667 0 0 1-7.168 17.152 23.850667 23.850667 0 0 1-14.592 7.594667l-4.266667 0.170667-322.304 0.554666-19.029333-7.765333a25.728 25.728 0 0 1-7.082667-13.610667l-0.469333-4.138666 1.194666-3.498667-0.853333-3.498667V431.786667c-0.256-7.168 1.706667-12.970667 6.570667-17.28a31.104 31.104 0 0 1 14.421333-7.04l4.48-0.725334z m135.552 138.069334l-108.8 0.853333-0.170667 38.570667 109.781334 0.128-0.810667-39.552z m161.28 0.426666l-109.226667 0.042667-0.213333 38.570667 109.824 0.128-0.426667-38.784z m-271.018667-88.746666l0.256 39.381333 109.184-0.085333 0.384-39.168-109.824-0.085334z m161.450667-0.170667l0.213333 39.338667 109.226667-0.085334 0.384-39.168-109.824-0.085333zM887.381333 298.666667l19.072 7.936a26.88 26.88 0 0 1 7.552 18.133333l-0.682666 30.72a19.541333 19.541333 0 0 1-6.570667 17.664 23.466667 23.466667 0 0 1-18.901333 7.936l-18.645334-7.168a21.973333 21.973333 0 0 1-6.912-17.92l-0.085333-5.973333-270.848-1.109334-0.341333 7.168a23.893333 23.893333 0 0 1-7.765334 17.28 26.794667 26.794667 0 0 1-17.664 8.277334l-19.072-7.893334a23.765333 23.765333 0 0 1-6.912-17.962666l-0.554666-31.104a24.576 24.576 0 0 1 7.594666-18.688 25.344 25.344 0 0 1 18.474667-6.698667L887.381333 298.666667z m-700.032 10.837333a32.768 32.768 0 1 1 0 65.536 32.768 32.768 0 0 1 0-65.536z" fill="#342318" p-id="2643"></path></svg>',
      ],
      Email: "mailto:hestudio@hestudio.org",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/heStudio",
      GitHub: "https://github.com/heStudio-Network",
      Gitlab: "https://gitlab.com/hestudio",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "https://pd.qq.com/s/uakgta",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      Telegram: [
        "https://t.me/hestudio_network",
        '<svg t="1673753702126" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4654" width="200" height="200"><path d="M679.424 746.862l84.005-395.996c7.424-34.852-12.581-48.567-35.438-40.009L234.277 501.138c-33.72 13.13-33.134 32-5.706 40.558l126.282 39.424 293.156-184.576c13.714-9.143 26.295-3.986 16.018 5.157L426.898 615.973l-9.143 130.304c13.13 0 18.871-5.706 25.71-12.581l61.696-59.429 128 94.282c23.442 13.129 40.01 6.29 46.3-21.724zM1024 512c0 282.843-229.157 512-512 512S0 794.843 0 512 229.157 0 512 0s512 229.157 512 512z" fill="#1296DB" p-id="4655"></path></svg>',
      ],
      Rss: "https://www.hestudio.org/atom.xml",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  sidebarSorter: ["readme", "date-desc"],

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: '<a href="https://icp.gov.moe/?keyword=20225520" target="_blank">萌ICP备20225520号</a><!-- Clarity tracking code for https://www.hestudio.org/ --><script>    (function(c,l,a,r,i,t,y){        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    })(window, document, "clarity", "script", "eu064i4ylm");</script>',

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
      ],
    },
    prismjs: {
      light: "vsc-dark-plus",
      dark: "vsc-dark-plus",
    },
    blog: true,

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
      serverURL: "https://comment.hestudio.org",
      dark: 'html[data-theme="dark"]',
      meta: ['nick', 'mail'],
      requiredMeta: ['nick', 'mail'],
      login: "force",
      search: false,
      reaction: true,
      copyright: false,
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
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
      vPre: true,
      vuePlayground: true,
    },


    git: false,

    seo: true,

    pwa: {
      cachePic: true,
      update: 'hint',
      themeColor: '#e77c8e',
    },
  },
});
