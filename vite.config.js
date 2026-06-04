import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // 1. Project Root & Base URL
  base: '/', // Change to './' for relative paths, or '/repo-name/' for GitHub Pages

  // 2. Build Configurations
  build: {
    outDir: 'dist',         // The output directory for production builds
    assetsDir: 'assets',    // Directory under outDir to place generated assets
    sourcemap: false,       // Set to true if you need to debug production code
    minify: 'esbuild',      // Default and fastest minifier
    rollupOptions: {
      // Configure multiple entry points if building a multi-page app
      input: {
        main: resolve(__dirname, 'index.html'),
        // about: resolve(__dirname, 'about.html'), 
      },
    },
  },

  // 3. Development Server Configurations
  server: {
    port: 3000,             // Change the dev server port (default is 5173)
    open: true,             // Automatically open the app in the browser on startup
    cors: true,             // Enable CORS for the dev server
    proxy: {
      // Forward API requests to a backend server to avoid CORS issues
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  // 4. Path Aliasing (Makes imports cleaner, e.g., import Button from '@/components/Button')
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
