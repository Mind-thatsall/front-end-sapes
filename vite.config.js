import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./src/tests/**'],
    setupFiles: "./src/setupTests.js",
    css: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, "./src") },
    ]
  }
})
