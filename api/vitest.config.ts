import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      all: true,
      // exclude:['src/main/server.ts'],
      // include:['src/**/*.{ts,js}'],
    },
  },
});
