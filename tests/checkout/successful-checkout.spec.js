import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

let loginPage;
let productsPage;
let cartPage;
let checkoutPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage (page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.openLoginPage();
    await loginPage.login('performance_glitch_user', 'secret_sauce')
})
test('Successful checkout.', async ({ page }) => {
    await productsPage.addItemToCart('sauce-labs-backpack');
    await productsPage.openCart();
    await cartPage.clickCheckOut();

    await checkoutPage.fillCheckOutInfo('QA Test', 'Roqs', '1125');

    await checkoutPage.clickContinue();

    await checkoutPage.clickFinish();
    
    await expect(checkoutPage.successMessage())
    .toHaveText('Thank you for your order!');

    await test.info().attach('Checkout Success', {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png',
    });
})