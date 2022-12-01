import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置环境文件的目录
  envDir: 'env',
  server: {
    open: true
  },
  resolve: {
    // vite别名配置
    alias: {
      '@': '/src/'
    }
  }
})
