import { test, expect } from '@playwright/test';

test('test card details page', async ({ page, baseURL }) => {

  // Go to http://localhost:3000/
  await page.goto(baseURL!);

  // Click li:nth-child(2) > div > .relative
  await page.locator('li:nth-child(2) > div > .relative').click();
  await expect(page).toHaveURL(`${baseURL}/ar411565`);
  await expect(page.locator('img[alt="The Yellow Rose Duo"]')).toBeVisible();
  await expect(page.locator('text=The Yellow Rose DuoPlease note this discount has already been applied - was £27,')).toBeVisible();
  await expect (page.locator('text=21.996£ Buy Now')).toBeVisible();

});