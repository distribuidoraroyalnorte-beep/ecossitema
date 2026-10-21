import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    ...(isSsrBuild ? { rolldownOptions: { output: { entryFileNames: '[name].mjs' } } } : {}),
  },
}))
