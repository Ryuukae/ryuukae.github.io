import { test, expect } from '@playwright/test';

test.describe('Layout & Visuals', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title and header', async ({ page }) => {
    await expect(page).toHaveTitle(/Ryuukae's GitHub Pages/);
    await expect(page.locator('h1.header-title')).toHaveText(/Ryuukae's GitHub Pages/);
  });

  test('visual regression: homepage layout', async ({ page }) => {
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('homepage-baseline.png', { fullPage: true });
  });
});
