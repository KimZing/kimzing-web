import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  // 添加对vue的支持插件，注意需要在devDependencies中引入@vitejs/plugin-vue
  plugins: [vue()],
  // 开发或生产环境服务的公共基础路径
  base: '/',
  // 静态资源文件夹
  publicDir: 'public',
  // 配置环境文件的目录
  envDir: 'env',
  // 服务器配置
  server: {
    // 启动时打开浏览器
    open: true,
    // 绑定所有地址
    host: '0.0.0.0',
    // 开发服务器端口
    port: 5173,
    // 端口已被占用则会直接退出
    strictPort: true
  },
  build: {
    // 构建输出目录
    outDir: 'dist',
    // 静态资源存放路径
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码
    assetsInlineLimit: 4096,
    // 自定义构建输出，拆分资源文件，防止单个文件过大
    rollupOptions: {
      output: {
        // 最小化拆分包
        manualChunks: (id: string) => {
          if (id.indexOf('node_modules') !== -1) {
            return id.split('node_modules/')[1].split('/')[0]
          }
        },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'js/[name].[hash].js',
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'js/[name].[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: '[ext]/[name].[hash].[ext]'
      }
    }
  },
  // 解析相关
  resolve: {
    // vite别名配置，当vite本地运行时，需要用此配置解析
    alias: {
      '@': '/src/'
    }
  },
  json: {
    // 支持从 .json 文件中进行按名导入
    namedExports: true
  }
})
