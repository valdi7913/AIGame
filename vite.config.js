// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: "3001"
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Update with your entry file
        src: 'src/index.js', // Additional HTML file in a subfolder
        rps: 'rps/rps.html'
        // ttt: 'ttt/ttt.html'
        // Add more entries if needed
      },
    },
  },
});
