import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HITLUG",
  description: "HITLUG Offical Webpage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    logo: "logo.svg",
    siteTitle: "Linux 开源学生社团",
    sidebar: [
      {
        text: "关于我们",
        link: "/about",
      },
      {
        text: "活动情况",
        items: [{ text: "技术交流企划", link: "/techex.md" }],
      },
      {
        text: "站点共建",
        link: "/contribute",
      },
      {
        text: "新闻列表",
        link: "/news.md",
      },
    ],
    footer: {
      message: "Welcome to HITLUG!",
      copyright:
        'Copyright © 2025 HITLUG. Licensed under the <a href="https://creativecommons.org/licenses/by/4.0/deed.zh-hans">CC BY 4.0 International</a> License.',
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hitlug" }],
  },
});
