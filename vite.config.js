import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  // Prefix for environment variables
  envPrefix: "REACT_APP_",

  // Configure base path if deploying to a subfolder (optional)
  // Uncomment the next line if you need to deploy to a subdirectory, e.g., /project-name/
  // base: '/project-name/',

  // Vite plugins
  plugins: [
    react(),
    envCompatible(),
  ],

  // Include specific asset types like .xlsx files
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  }

  // If you need additional configurations, like routing, you can add them here.
});

