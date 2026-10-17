import { test, expect } from '@playwright/test';

test('TC_01 User lands on the website.', async ({ page })=> {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
});

test('TC_02 User should be successfully logged in using correct credentials.', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('TC_03 Adding of items to cart. ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // 1. Adding or selecting of item to cart.
  await page.click('#add-to-cart-sauce-labs-backpack');

  // 2. Check if the item was added on the cart.
  await page.click('.shopping_cart_link');

  // 3. Check if your item was really added QTY is 1. 
  await expect(page.locator('.cart_item')).toHaveCount(1);

  // 4. Screenshot of the cart page.
  const screenshot = await page.screenshot();
  await test.info().attach('Cart screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});
