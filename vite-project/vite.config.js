
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'three': 'three', // Ensure that Vite can resolve three.js
    },
  },
  optimizeDeps: {
    exclude: ['framer-motion'],
  },
  server: {
    host: '0.0.0.0', // Allow access from any IP
    port: 5173,      // You can specify the port explicitly if needed
  },
});
