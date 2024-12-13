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
  assetsInclude: ['**/*.xlsx'],

  // Build output directory (default is 'dist')
  build: {
    outDir: 'dist',  // Ensure the built files go into the dist directory
  },

  // If you need additional configurations, like routing, you can add them here.
});

