import { test, expect } from '@playwright/test';

test('test card details page', async ({ page, baseURL }) => {

  // Go to http://localhost:3000/
  await page.goto(baseURL!);

  // Click li:nth-child(2) > div > .relative
  await page.locator('li:nth-child(2) > div > .relative').click();
  await expect(page).toHaveURL(`${baseURL}/bsk001`);
  await expect(page.locator('img[alt="Baby Shark song photo upload kids Birthday card"]')).toBeVisible();
  await expect(page.locator('text=3.49£ Buy Now')).toBeVisible();
  await expect (page.locator('text=3.49£ Buy Now')).toBeVisible();

});