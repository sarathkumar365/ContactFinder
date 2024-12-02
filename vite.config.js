import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use global methods like `describe`, `it`, etc.
    environment: 'jsdom', // Simulate browser-like environment
    setupFiles: './src/setupTests.js', // Optional setup file for custom configuration
  },
});
