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
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return `assets/[name]-[hash][extname]`;
          }
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    assetsInlineLimit: 0, // Don't inline images, keep them as separate files for better caching
  },
  resolve: {
    alias: {
      '@': '/src', // Example of an alias: now you can import from '@/components/...'
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle these dependencies
  },
})