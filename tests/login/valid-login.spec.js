import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

let loginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
})

test('TC-01 User enters valid username and password.', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(loginPage.productsTitle())
        .toHaveText('Products');    

    const screenshot = await page.screenshot();

    await test.info().attach('User logged in successfully', {
        body: screenshot,
        contentType: 'image/png',
    });
})