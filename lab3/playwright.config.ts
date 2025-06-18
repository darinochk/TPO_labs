import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 120000,
  use: {
    baseURL: 'https://e.mail.ru',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
