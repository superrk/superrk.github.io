const path = require('path')
module.exports = {
  theme: path.resolve(__dirname, '../../kai/'),
  title: "期待每一次相遇",
  plugins: ['superrk-musicplayer'],
  themeConfig: {
    mode: 'light',
    author: 'superrk',
    huawei: true,
    record: '京ICP备2021005648号',
    recordLink: 'http://beian.miit.gov.cn/',
    cyberSecurityRecord: '',
    cyberSecurityLink: '',
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
  }
};