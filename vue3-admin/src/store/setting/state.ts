export interface SettingState {
  visible: {
    logo: boolean
    sidebar: boolean
    header: boolean
    navibar: boolean
    main: boolean
  }
  size: {
    element: string
    sidebarWidth: number
  }
  color: {
    menuBackground: string
    menuText: string
    menuActiveText: string
    headerBackground: string
  }
  language: {
    list: { label: string; value: string }[]
    current: string
    fallback: string
  }
}

export default () => ({
  visible: {
    // 是否显示logo
    logo: true,
    // 是否显示侧边栏
    sidebar: true,
    // 是否显示头部
    header: true,
    // 是否显示导航栏
    navibar: true,
    // 主窗体的可视化
    main: true
  },
  size: {
    // 全局组件尺寸
    element: 'small',
    sidebarWidth: 230
  },
  color: {
    // 菜单相关颜色
    menuBackground: '#1f1f1f',
    menuText: '#ddd',
    menuActiveText: '#409EFF',
    // 顶栏相关颜色
    headerBackground: '#fff'
  },
  language: {
    list: [
      { label: '简体中文', value: 'zh' },
      { label: 'English', value: 'en' }
    ],
    current: 'zh',
    fallback: 'en'
  }
})
