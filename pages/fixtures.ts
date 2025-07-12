import { BrowserContext, Page, test as base, expect } from '@playwright/test';
import { Pages } from '.';
type TestFixtures = {}; // No test-scoped fixtures

type WorkerFixtures = {
  sharedContext: BrowserContext;
  sharedPage: Page;
  pages: Pages;
};

export const test = base.extend<TestFixtures, WorkerFixtures>({
  sharedContext: [
    async ({ browser }, use) => {
      const context = await browser.newContext({recordVideo: { dir: 'videos/' }});
      await use(context);
      await context.close();
    },
    { scope: 'worker' },
  ],

  sharedPage: [
    async ({ sharedContext }, use) => {
      const page = await sharedContext.newPage();
      await use(page);
    },
    { scope: 'worker' },
  ],

  pages: [
    async ({ sharedPage }, use) => {
      const pages = new Pages(sharedPage);
      await sharedPage.goto('/');
      await use(pages);
    },
    { scope: 'worker' },
  ],
});