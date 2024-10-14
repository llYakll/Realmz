import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {},
  server: {},
  test: {
    environment: 'jsdom',
    globals: true,
  },
})