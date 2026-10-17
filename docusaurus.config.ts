import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '隐性知识：底层操作系统',
  tagline: '权力结构、资源流转与利益交换的真实故事',
  favicon: 'img/favicon.ico',

  url: process.env.DOCUSAURUS_URL || 'https://herrryan.github.io',
  baseUrl: process.env.DOCUSAURUS_BASE_URL || '/',

  organizationName: 'herrryan',
  projectName: 'education',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '隐性知识：底层操作系统',
      logo: {
        alt: 'Curriculum Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'curriculumSidebar',
          position: 'left',
          label: '课程全集 (16课)',
        },
        {
          type: 'docSidebar',
          sidebarId: 'classicsSidebar',
          position: 'left',
          label: '经典研读专栏',
        },
        {
          to: '/docs/reading-list',
          position: 'left',
          label: '文献与经典阅读总览',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '基础篇',
          items: [
            {
              label: '课程导言',
              to: '/docs/intro',
            },
            {
              label: '第一模块：权力运作与规则逻辑',
              to: '/docs/module-1-power-and-rules/dual-track-rules',
            },
            {
              label: '第二模块：关系网络与资源交换',
              to: '/docs/module-2-networks-and-exchange/indebtedness-and-weak-ties',
            },
          ],
        },
        {
          title: '进阶篇',
          items: [
            {
              label: '第三模块：信息差与价值创造',
              to: '/docs/module-3-information-and-value/scarcity-pricing',
            },
            {
              label: '第四模块：阶层习性与行为代码',
              to: '/docs/module-4-habitus-and-codes/unworthiness-desensitization',
            },
            {
              label: '第五模块：筹码配置与防御性博弈',
              to: '/docs/module-5-chips-and-defense/poison-pill-defense',
            },
          ],
        },
        {
          title: '终局篇',
          items: [
            {
              label: '第六模块：灰度空间与制度武器',
              to: '/docs/module-6-gray-zones-and-weapons/side-agreements',
            },
            {
              label: '第七模块：周期跃迁与离场法则',
              to: '/docs/module-7-cycles-and-exit/from-worker-to-banker',
            },
          ],
        },
        {
          title: '经典专栏',
          items: [
            {
              label: '专栏导言：社会阶层微观解剖学',
              to: '/docs/classics',
            },
            {
              label: '《不平等的童年》全章译注',
              to: '/docs/unequal-childhoods/index',
            },
            {
              label: '《格调：社会阶级与生活品味》全章译注',
              to: '/docs/fussell-class/index',
            },
            {
              label: '全课程跨学科文献总览',
              to: '/docs/reading-list',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 隐性知识：底层操作系统. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
