import { test, expect } from '@playwright/test';

test('Landing Page', async ({ page, baseURL }) => {

  // Go to http://localhost:3000/ 
  await page.goto(baseURL);
  await expect(page.locator('button >> nth=0')).toBeVisible();
  await expect(page.locator('div:has-text("CardPool") >> nth=2')).toBeVisible();
  await expect(page.locator('text=12345...20')).toBeVisible();

});