import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

let loginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
});

test('TC-01 User enters correct username but incorrect password.', async ({ page }) => {
    await loginPage.login('standard_user', 'qaTest-123');

    await expect(loginPage.errorMessage())
        .toHaveText('Epic sadface: Username and password do not match any user in this service');

    const screenshot = await page.screenshot();

    await test.info().attach('Password does not match the username', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-02 User enters incorrect username but correct password.', async ({ page }) => {
    await loginPage.login('standard_userQA', 'secret_sauce');

    await expect(loginPage.errorMessage())
        .toHaveText('Epic sadface: Username and password do not match any user in this service');

    const screenshot = await page.screenshot();

    await test.info().attach('Username does not exist', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-03 User provides no input for both username and password fields.', async ({ page }) => {
    await loginPage.login('', '');

    await expect(loginPage.errorMessage())
        .toHaveText('Epic sadface: Username is required');

    const screenshot = await page.screenshot();

    await test.info().attach('Username required', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-04 User enters a username but no password.', async ({ page }) => {
    await loginPage.login('performance_glitch_user', '');

    await expect(loginPage.errorMessage())
        .toHaveText('Epic sadface: Password is required');

    const screenshot = await page.screenshot();

    await test.info().attach('Password required', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-05 User enters a password but leaves the username field empty.', async ({ page }) => {
    await loginPage.login('', 'secret_sauce');

    await expect(loginPage.errorMessage())
        .toHaveText('Epic sadface: Username is required');

    const screenshot = await page.screenshot();

    await test.info().attach('Username required', {
        body: screenshot,
        contentType: 'image/png',
    });
});

test('TC-06 User enters both correct username and password.', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(loginPage.productsTitle())
        .toHaveText('Products');

    const screenshot = await page.screenshot();

    await test.info().attach('Products page', {
        body: screenshot,
        contentType: 'image/png',
    });
});