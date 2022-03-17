import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置参考文档: https://cn.vitejs.dev/config/
export default defineConfig({
  // 添加对vue的支持插件，注意需要在devDependencies中引入
  plugins: [vue()],
  // 静态资源服务的文件夹,其中的资源按原样提供或复制而无需进行转换，并在构建期间复制到 outDir 的根目录
  publicDir: 'public',
  resolve: {
    // 设置常用路径别名, ！！！注意：要与tsconfig.json中的paths相对应，否则在导入ts时，会解析不了
    alias: [{ find: '@', replacement: '/src' }]
  },
  // 用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径
  envDir: './env',
  server: {
    // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 将监听所有地址，包括局域网和公网地址。
    host: '0.0.0.0',
    // 指定开发服务器端口
    port: 3001,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    strictPort: true,
    // 在开发服务器启动时自动在浏览器中打开应用程序
    open: true,
    // 目前还没仔细研究这个配置，限制哪些文件可以通过 /@fs/ 路径提供服务。
    fs: {
      strict: false
    }
  },
  build: {
    // 指定输出路径（相对于 项目根目录).
    outDir: 'dist',
    // 指定生成静态资源的存放路径,（相对于 build.outDir）。
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码  单位:kb
    assetsInlineLimit: 4096
  },
  css: {
    preprocessorOptions: {
      // 添加scss的全局变量，可以在SFC的样式中直接饮用$变量
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
