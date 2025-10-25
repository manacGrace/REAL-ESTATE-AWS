import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9090,  // Development server port
    host: true   // Allow external access in development
  },
  preview: {
    port: 80     // Preview server port (for testing production build)
  }
})