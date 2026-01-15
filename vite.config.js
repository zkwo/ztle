import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Memastikan akses lancar saat pengembangan
    host: true,
    port: 3000
  },
  build: {
    // Optimasi build untuk performa maksimal di Vercel
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false
  }
})
