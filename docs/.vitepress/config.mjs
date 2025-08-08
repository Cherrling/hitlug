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
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
      {
        text: "关于我们",
        link: "/about",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/hitlug" }],
  },
});
