import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    //设置域名
    host: '127.0.0.1',
    port: 3000,
    //配置代理跨域
    proxy: {
      '/api': {
        target: 'https://www.dance365.com/apis',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/apilogin': {
        target: "http://sph-h5-api.atguigu.cn/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apilogin/, '')
      },
    }
  }
})
