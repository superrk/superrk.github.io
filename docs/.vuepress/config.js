module.exports = {
  theme: "reco",
  title: "期待每一次相遇",
  plugins: ['superrk-musicplayer'],
  themeConfig: {
    author: 'superrk',
    huawei: true,
    record: 'ICP 备案文案',
    recordLink: 'ICP 备案指向链接',
    cyberSecurityRecord: '公安部备案文案',
    cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2017',
    locales: {
      '/': {
        recoLocales: {
          homeBlog: {
            article: '文章', 
            tag: '标识', 
            category: '类别', 
            friendLink: '友链'
          },
          pagation: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          }
        }
      }
    },
    subSidebar: 'auto',
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
      },
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/superrk' },
      ]
    },
  },
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  }
};