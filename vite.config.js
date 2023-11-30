// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Update with your entry file
        src: 'src/index.js', // Additional HTML file in a subfolder
        rps: 'rps/rps.html'
        // Add more entries if needed
      },
    },
  },
});
