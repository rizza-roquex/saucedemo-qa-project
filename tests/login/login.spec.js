import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  // This runs before every test
    await page.goto('https://www.saucedemo.com/');
});
// Test cases for login page.
test('TC-01 User enters correct username but incorrect password.', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('qaTest-123');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');

    // Check for screenshot

    const screenshot = await page.screenshot();
    await test.info().attach('Password does not match the username', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-02 User enters incorrect username but correct password.', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_userQA');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    
     // Check for screenshot

    const screenshot = await page.screenshot();
    await test.info().attach('Password does not match the username', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-03 User provides no input for both username and password fields', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Password').fill('');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
    
    // Check for screenshot

    const screenshot = await page.screenshot();
    await test.info().attach('Username required', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-04 User enters a username but no password.', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('performance_glitch_user');
    await page.getByPlaceholder('Password').fill('');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');

    // Check for screenshot

    const screenshot = await page.screenshot();
    await test.info().attach('Required password', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-05 User enters a password but leaves the username field empty.', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('performance_glitch_user');
    await page.getByPlaceholder('Password').fill('');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');

    // Check for screenshot

    const screenshot = await page.screenshot();
    await test.info().attach('Required password', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-06 User enters a username but leaves the password field empty.', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');

     // Check for screenshot

    const screenshot = await page.screenshot();
    await test.info().attach('Required password', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-07 User enters a password but leaves the username field empty.', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');

     // Check for screenshot

    const screenshot = await page.screenshot();
    await test.info().attach('Required username', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-08 User provides no input for both username and password fields.', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Password').fill('');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');

    // Check for screenshot

    const screenshot = await page.screenshot();
    await test.info().attach('Required username', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-08 User enters both correct username and password.', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.click('#login-button');

    // Check if the user successfully logs in.

    await expect(page.locator('[data-test="title"]')).toHaveText('Products');

    const screenshot = await page.screenshot();
    test.info().attach('Products page', {
        body: screenshot,
        contentType: 'image/png',
    });
});