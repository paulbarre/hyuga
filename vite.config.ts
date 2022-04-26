import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    svelte({
      configFile: `config/svelte.config.${mode}.js`
    })
  ],
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      input: ['./src/build.ts']
    }
  }
}))
