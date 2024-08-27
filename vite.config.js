import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    APP_NAME: JSON.stringify('TIC-TAC-TOE(s)')
  }
})
