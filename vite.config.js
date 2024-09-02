import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://narsinghobs.github.io/react_learning/",
  plugins: [react()],
})
