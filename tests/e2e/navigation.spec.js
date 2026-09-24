import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('external links open correctly', async ({ page }) => {
    const firstRepo = page.locator('.repo-item').first();
    await expect(firstRepo).toBeVisible();

    const repoLink = firstRepo.locator('a:has-text("Repository")');
    await expect(repoLink).toHaveAttribute('target', '_blank');
    await expect(repoLink).toHaveAttribute('href', /github\.com/);
  });
});
