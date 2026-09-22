import { test, expect } from '@playwright/test';

test.describe('GitHub Pages Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title and header', async ({ page }) => {
    await expect(page).toHaveTitle(/Ryuukae's GitHub Pages/);
    await expect(page.locator('h1.header-title')).toHaveText(/Ryuukae's GitHub Pages/);
  });

  test('visual regression: homepage layout', async ({ page }) => {
    // Wait for the fade-in animations to complete
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('homepage-baseline.png', { fullPage: true });
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

    const repoLink = firstRepo.locator('a:has-text("Repository")');
    await expect(repoLink).toHaveAttribute('target', '_blank');
    await expect(repoLink).toHaveAttribute('href', /github\.com/);
  });

  test('image modal functionality', async ({ page }) => {
    const repoList = page.locator('#repo-list-container');
    await repoList.waitFor({ state: 'visible' });

    // Open first card to reveal the image
    const firstRepo = repoList.locator('.repo-item').first();
    await firstRepo.click();

    // Find and click the image
    const repoImage = firstRepo.locator('img.repo-image-trigger');
    await repoImage.click();

    // Verify modal appears and has the correct image
    const modal = page.locator('#image-modal');
    await expect(modal).not.toHaveClass(/invisible/);
    await expect(modal.locator('#modal-image')).toBeVisible();

    // Close the modal
    const closeBtn = modal.locator('button.modal-close');
    await closeBtn.click();
    await expect(modal).toHaveClass(/invisible/);
  });
});
