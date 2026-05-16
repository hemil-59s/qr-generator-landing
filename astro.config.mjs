import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://hemil-59s.github.io',
  base: '/qr-generator',
  integrations: [react()],
  output: 'static',
  vite: {
    ssr: {
      external: ['react', 'react-dom']
    }
  }
});
