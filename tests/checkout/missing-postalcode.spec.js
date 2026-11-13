import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { CartPage } from '../../pages/CartPage';
import { ProductsPage } from '../../pages/ProductsPage';


test('Missing postal code in checkout page.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const checkoutPage = new CheckoutPage(page);
    const productsPage = new ProductsPage(page); // Fixed!
    const cartPage = new CartPage(page);

    // Opens login page then login. 
    await loginPage.openLoginPage();
    await loginPage.login('performance_glitch_user', 'secret_sauce');

    await productsPage.addItemToCart('sauce-labs-bike-light')
    await productsPage.openCart();
    await expect(cartPage.cartItem('Sauce Labs Bike Light')).toBeVisible();
    await cartPage.clickCheckOut();
    await checkoutPage.fillCheckOutInfo('QA Engineer', 'Roqs', '');
    await checkoutPage.clickContinue();
    await expect(checkoutPage.errorMessage).toHaveText('Error: Postal Code is required');
})
