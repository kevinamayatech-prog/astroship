import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // O las integraciones que tengas

export default defineConfig({
  integrations: [tailwind()],
  // AGREGAR ESTA SECCIÓN:
  server: {
    host: true,
    port: 4321
  }
});

