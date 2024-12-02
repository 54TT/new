import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://demoapi.yuejian.live/api.php',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, '');
        }
      }
    }
  }
});
