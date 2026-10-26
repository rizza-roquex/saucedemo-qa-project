import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test('Remove item from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.openLoginPage();
    await loginPage.login('performance_glitch_user', 'secret_sauce');

    await productsPage.addItemToCart('sauce-labs-backpack');

    await productsPage.openCart();

    await cartPage.removeItem('sauce-labs-backpack');

    await expect(
        page.locator('[data-test="inventory-item-name"]')
    ).toHaveCount(0);
});