import { test, expect } from '@playwright/test';

test.describe('GitHub Pages Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title and header', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Ryuukae's GitHub Pages/i);

    // Check header text
    const header = page.locator('.header-title');
    await expect(header).toBeVisible();
    await expect(header).toContainText(/Ryuukae's GitHub Pages/i);
  });

  test('accordion functionality', async ({ page }) => {
    // Wait for the repo list to populate
    const repoList = page.locator('#repo-list-container');
    await repoList.waitFor({ state: 'visible' });

    // Select the first repo card
    const firstRepo = repoList.locator('.repo-item').first();
    await expect(firstRepo).toBeVisible();

    // Verify initial closed state
    const arrow = firstRepo.locator('.repo-arrow');
    const imageContainer = firstRepo.locator('.repo-image-container');

    await expect(arrow).toHaveClass(/fa-chevron-up/);
    await expect(imageContainer).not.toHaveClass(/open/);

    // Click to open the accordion
    await firstRepo.click();

    // Verify open state
    await expect(arrow).toHaveClass(/fa-chevron-down/);
    await expect(imageContainer).toHaveClass(/open/);
    await expect(imageContainer).toBeVisible();

    // Click again to close
    await firstRepo.click();

    // Verify closed state
    await expect(arrow).toHaveClass(/fa-chevron-up/);
    await expect(imageContainer).not.toHaveClass(/open/);
  });

  test('external links open correctly', async ({ page }) => {
    const firstRepo = page.locator('.repo-item').first();
    await expect(firstRepo).toBeVisible();

    const repoLink = firstRepo.locator('a:has-text("GitHub Repository")');
    await expect(repoLink).toHaveAttribute('target', '_blank');
    await expect(repoLink).toHaveAttribute('href', /github\.com/);
  });
});
