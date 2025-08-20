import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  //base: mode === 'production' ? '/Shokuji/' : '/',
  plugins: [react()],
}));
