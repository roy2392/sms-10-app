import { test, expect } from '@playwright/test';

test.describe('Profile Page E2E', () => {
  test('Page loads and displays LinkedIn photo and link', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveText('Roey Zalta');
    await expect(page.locator('img[alt="Roey Zalta LinkedIn Profile Photo"]')).toBeVisible();
    const link = page.locator('a', { hasText: 'View LinkedIn Profile' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://linkedin.com/in/roey-zalta');
  });
});
