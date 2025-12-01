import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: './',      // ✅ OK pour build statique dans un sous-dossier
    build: {
        outDir: 'docs' // ✅ optionnel mais pratique pour GitHub Pages
    }
})
