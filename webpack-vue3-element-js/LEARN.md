# 前端通用模板项目使用分享

> [视频](https://pateo.feishu.cn/minutes/obcnxg13ua1k91643e6o9y76?from=auth_notice)

出发点为简单易用，尽量通过简单的JSON配置生成页面，对常用的路由/图表/富文本/组件/http请求等都做了一定程度的封装。为了统一管理项目，会对一些规范和工具作出强制要求。

## 一. 环境安装运行

- [官网](http://nodejs.cn/download)下载安装NodeJS
- 运行以下命令安装yarn

```bash
npm install --global yarn
```

- 进入项目目录，并安装插件

```bash
yarn
```

- 运行

```bash
yarn serve:development # 启动开发环境
```

- 构建

```bash
yarn build # 构建，生成打包的前端页面，可直接部署在nginx
```

## 二. 技术体系

使用了基于Vue生态的技术体系，

- JavaScript，脚本语言（Java SE）
- Vue3，最新的Vue3提供了setup的书写方式，同时兼容2.0的结构化配置方式（Spring）
- ElementPlus，组件样式库，提供了丰富的组件供使用（Java Swing）
- Vuex，统一数据状态管理（MySQL）
- VueRouter，页面路由管理（Spring Web @RequestMapping）
- ESLint，代码格式规范管理插件（Alibaba Code Guide，Sonar）
- npm/yarn，包管理器，管理依赖的下载安装（maven/gradle），强制使用yarn（熟练工除外，但不要提交对应的锁定文件），yarn有国内镜像和本地缓存，速度更快

## 三. 文件结构说明

- public
- 

## 三. 功能流程

### 1. 如何添加一个新页面

### 2. 如何添加路由

### 3. 如何使用状态管理Vuex

### 4. 如何使用本地存储

### 5. 如何发出HTTP请求

### 6. 如何生成图表

### 7. 如何生成表单

### 8. 如何生成表格