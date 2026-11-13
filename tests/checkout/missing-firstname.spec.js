import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test('Missing first name in checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.openLoginPage();
    await loginPage.login('performance_glitch_user', 'secret_sauce');

    await productsPage.addItemToCart('sauce-labs-backpack');
    await productsPage.openCart();
    await expect(cartPage.cartItem('Sauce Labs Backpack')).toBeVisible();
    await cartPage.clickCheckOut();
    await checkoutPage.fillCheckOutInfo('', 'Test', '1125');
    await checkoutPage.clickContinue();
    await expect(checkoutPage.errorMessage)
        .toHaveText('Error: First Name is required'
    );
});
