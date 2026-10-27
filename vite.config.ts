import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { seo } from './seo.ts'

export default defineConfig({
  plugins: [react(), seo()],
})
