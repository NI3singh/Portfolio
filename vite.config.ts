import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Using SWC for faster builds

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can specify a port for the development server
    open: true, // Automatically open the app in the browser on server start
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
  resolve: {
    alias: {
      '@': '/src', // Example of an alias: now you can import from '@/components/...'
    },
  },
})