# Vue3-Admin

Vue3 体系的示例项目

## 框架目标

- [x] Axios 远程 API 的访问，支持多域名访问。对于错误信息提供拦截功能
- [x] 具备菜单动态配置功能，可以根据数据动态渲染菜单
- [x] 具备面包屑功能
- [x] 可切换语言
- [x] 可切换主题
- [x] 具有清晰的包结构及命名规范
- [x] 具有 4xx 错误页面
- [x] 具备 prettie 格式化和 es 限制功能
- [x] 使用 ts 进行代码编写
- [x] 集成 vue-router
- [x] 集成 vuex
- [x] 可以区分环境及根据输入参数进行打包运行
- [x] 配置@导包解析
- [x] 全局 scss 变量管理
- [x] 系统设置界面
- [x] storage 中存储提供加密功能
- [x] 完善 mock 的机制
- [x] 封装 request axios 工具
- [x] 添加 eslint 的自动格式化
- [x] 分离 store 的 action 与 mutation 与状态

## 技术选型

Vue3 + Typescript + Vite + ElementPlus + VueX + Vue-Router + MockJS + VueI18n

## 创建-安装-启动-打包

```bash
# 创建项目
yarn create @vitejs/app vue3-admin

# 安装依赖
yarn install

# 运行指定环境
yarn [dev/perf/uat/pro]

# 打包指定环境
yarn build:[dev/perf/uat/pro]
```

## 开发工具配置-VSCode

### 安装插件

- Volar 新一代的支持 Vue 语法高亮

  > 如果要支持 Vue 的组件导入提醒，在快速启动面板中打开: Switch TS Plugin on

## 相关文档资料

### 1. 关于`<script setup>`的特性

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227)

> 以下为随记

- preview 会在启动本地 dist 文件在本地进行预览，前提要先构建

安装代码检查

```bash
yarn add prettier -D
yarn add eslint -D
初始化eslint配置文件
npx eslint --init
添加与prettier的集成
yarn add eslint-plugin-prettier eslint-config-prettier -D
```

- tag 缓存功能的实现，将 taglist 放入 store，同时序列化到本地，当页面加载 onMounted 时，跳转路由

- 错误提示：不能再 store 中将整个对象替换掉：如 state:{list:[0]}, 不可以直接操作 state.list = [1, 2]

- element-plus 图标不显示问题，目前的解决方式是指定 vite 到 2.3.7,问题清单:https://github.com/element-plus/element-plus/issues/2277

 - menu 菜单使用数据驱动的方式，结合 meta 信息来进行动态展示菜单

- 使用阿里的 iconfont 图标， [参考链接](https://www.cnblogs.com/yehuisir/p/14826587.html) 注意点：如果从项目中下载的图标没有这几个文件，则在官网项目设置里进行勾选即可

- 使用 v-show 来实现 main 组件的全屏

- 动态路由，在登录时，进行动态路由添加。如果刷新页面则会在 router 的守卫中进行检查并添加动态路由，这样也可以实现后台更改权限不用退出立即生效

- 通过在路由组件时使用 v-if 刷新主体页面

- mutaion 直接更改状态 action 含有业务逻辑

- 使用 vuex-persistedstate 进行 state 的状态持久化，防止刷新失效, 自己实现 Storage 进行数据加密。

- 通过空的 parent router-view 实现多级菜单通过判断子路由是否显示来觉得是否渲染父路由为 el-menu-item

- 完善面包屑的显示机制添加 bread 字段控制面包屑显示；完善菜单有子菜单的联动显示机制，利用递归进行遍历上层菜单

- Layout 要使用()=>import 方式导入 跳转就不会出现白屏了
