import { test, expect } from '@playwright/test';

test('Landing Page', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');
  await expect(page.locator('button >> nth=0')).toBeVisible();
  await expect(page.locator('div:has-text("CardPool") >> nth=2')).toBeVisible();
  await expect(page.locator('text=12345...20')).toBeVisible();

});