import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  // 配置环境文件的目录
  envDir: 'env',
  server: {
    // 启动项目后打开浏览器
    open: true
  }, 
  resolve: {
    // vite别名配置
    alias: {
      '@': '/src/'
    }
  }
})
