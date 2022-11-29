export interface LockInfo {
  isLock: boolean
  lockPassword: string
}

export interface Tag {
  // 标签的名字，也将其当做唯一标识，也就是title不能重复，重复也没多大意义
  title: string
  // router的name，name是唯一的
  name: any
  // router传参
  params: any
  // router的query参数
  query: any
  // 是否激活
  active: boolean
  // 约定默认为 true
  closable?: boolean
}

export interface LayoutState {
  menuCollapse: boolean
  title: string
  lockDialogVisible: boolean
  passwordDialogVisible: boolean
  settingVisible: boolean
  lockInfo: LockInfo
  tags: Tag[]
}

export default () =>
  ({
    // 控制菜单展开关闭
    menuCollapse: false,
    // Logo标题
    title: import.meta.env.VITE_APP_TITLE,
    // 设置界面的可见性
    settingVisible: false,
    // 锁频密码框的可视化
    lockDialogVisible: false,
    // 用户修改密码的可视化
    passwordDialogVisible: false,
    // 锁屏信息
    lockInfo: {
      isLock: false,
      lockPassword: ''
    },
    tags: []
  } as LayoutState)
