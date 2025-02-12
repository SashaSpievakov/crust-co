import { defineConfig } from 'cypress';
import { config } from 'dotenv';

config();

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${process.env.VITE_PORT}`,
    supportFile: false,
  },
  video: false,
  screenshotOnRunFailure: false,
});
