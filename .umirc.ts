import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Site Name',
  mode: 'site',
  base: '/leetcode-frontend',
  publicPath: '/leetcode-frontend/',
  // mfsu: {},
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  extraPostCSSPlugins: [
    require('postcss-import'),
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
  ],
  headScripts: [
    `
    new MutationObserver((mutationsList) => {
      for (let index = 0; index < mutationsList.length; index++) {
        const attribute = mutationsList[index];
        if (attribute.attributeName === 'data-prefers-color') {
          const theme = attribute.target.getAttribute('data-prefers-color');
          document.documentElement.setAttribute('theme-mode', theme);
          break;
        }
      }
    }).observe(document.documentElement, {
      attributes: true,
    });
    `,
  ],
});
