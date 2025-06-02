import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Add these specific optimizations for Theatre.js
  build: {
    assetsInlineLimit: 0, // Prevent JSON from being inlined
    chunkSizeWarningLimit: 2000, // Increase if needed
  },
  
  optimizeDeps: {
    include: [
      '@theatre/core',
      '@theatre/studio',
      '@theatre/r3f',
      'three',
      '@react-three/fiber',
      '@react-three/drei'
    ],
    esbuildOptions: {
      target: 'es2020' // Theatre.js works better with modern JS
    }
  },
  
  // For development server
  server: {
    fs: {
      strict: false // Allows importing from project root
    }
  }
})