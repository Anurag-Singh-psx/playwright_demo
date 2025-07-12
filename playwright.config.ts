import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  fullyParallel: false,
  workers:1,
  use: {
    headless: false,
    baseURL: 'https://practicetestautomation.com/',
    screenshot: 'on',
    video: 'on',
    trace: 'on-first-retry',
  },
  reporter: [["line"], ["allure-playwright"]],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
