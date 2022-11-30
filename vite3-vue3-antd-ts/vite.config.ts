import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置环境文件的目录
  envDir: 'env',
  resolve: {
    // vite别名配置
    alias: {
      "@": "/src/"
    }
  }
})
