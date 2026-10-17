import { test, expect } from '@playwright/test';

test('TC 01 User should land on the website', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
});

// Validations 
test('TC 02 User should be able to login successfully.', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.click('#login-button')
    // check the error message
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
});

test('TC 03 User enters username only.', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.fill('#user-name', 'standard_user');
    await page.click('#login-button')
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');
});

test('TC 04 User enters pasword only.', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Password').fill('dsadsadsad')
    await page.click('#login-button')
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
});

test('TC 03 Users username and password and successfully logged in.', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle('Swag Labs');
    await page.fill('#user-name', 'performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
})

test('TC 05 User clicks Sauce Labs Backpack Add to Cart.', async({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle('Swag Labs');
    await page.fill('#user-name', 'performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button'); 
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // 1. Adding of item to cart.
    await page.click('#add-to-cart-sauce-labs-backpack');

    // 2. Click the shopping cart icon to check.
    await page.click('[data-test="shopping-cart-link"]')
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    // 3. Check if the cart has 1 item. 
    await expect(page.locator('.cart_item')).toHaveCount(1);
});

test('TC 06 Checkout of item.', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle('Swag Labs');
    await page.fill('#user-name', 'performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button'); 
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // 1. Adding of item to cart.
    await page.click('#add-to-cart-sauce-labs-backpack');

    // 2. Click the shopping cart icon to check.
    await page.click('[data-test="shopping-cart-link"]')
    
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    await page.click('[data-test="checkout"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    await page.getByPlaceholder('First Name').fill('QA Roqs');
    await page.getByPlaceholder('Last Name').fill('Test');
    await page.getByPlaceholder('Zip/Postal Code').fill('1125');

    await page.click('[data-test="continue"]');

    // Verify you are on the overview step
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    await page.click('[data-test="finish"]');

    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    

    const screenshot = await page.screenshot();
    await test.info().attach('Checkout: Complete! screenshot', {
        body: screenshot,
        contentType: 'image/png'
    })
});