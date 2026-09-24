import { test, expect } from '@playwright/test';

test.describe('Modal Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('modal functionality', async ({ page }) => {
    const repoList = page.locator('#repo-list-container');
    await repoList.waitFor({ state: 'visible' });

    const firstRepo = repoList.locator('.repo-item').first();
    await expect(firstRepo).toBeVisible();

    await firstRepo.evaluate((node) => node.click());

    const modal = page.locator('.modal-overlay');
    await expect(modal).toBeVisible();
    await expect(modal).not.toHaveClass(/pointer-events-none/);

    const modalTitle = modal.locator('.modal-title');
    await expect(modalTitle).toBeVisible();

    const closeBtn = modal.locator('.modal-close-btn');
    await closeBtn.click();

    await expect(modal).toBeHidden();
  });
});
