import { test, expect } from '@playwright/test'
 
async function login(page, username, password) {
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('#login-button');
}

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
})

test('TC01 - User adds Sauce Labs Backpack to cart.', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');

    // Check the products page.
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');

    // Add item to cart.
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    // Go to cart page.
    await page.click('.shopping_cart_link');

    // Verify items inside the cart.
    await expect(page.locator('.cart_item')).toHaveCount(1);

    // Take screenshot to verify the item.
    const screenshot = await page.screenshot();
    test.info().attach('Sauce Labs Backpack', {
        body: screenshot,
        contentType: 'image/png',
    });
})

test('TC02 - User adds multiple items to cart.', async ({ page }) => {
    await login(page, 'performance_glitch_user', 'secret_sauce');

    // Add multiple items to cart.
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    await page.click('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

    // Go to cart. 
    await page.click('.shopping_cart_link');

    // Verify items inside the cart.
    await expect(page.locator('.cart_item')).toHaveCount(4);

    // Take screenshot to verify the items. 
    const screenshot = await page.screenshot();
    test.info().attach('Sauce Labs Backpack', {
        body: screenshot,
        contentType: 'image/png',
    });
});