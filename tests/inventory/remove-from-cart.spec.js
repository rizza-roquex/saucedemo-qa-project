import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';
import { LoginPage } from '../../pages/LoginPage';

let loginPage; // Global variable
let productsPage; // Global variable

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage (page);
    productsPage = new ProductsPage(page);

    await loginPage.openLoginPage();
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    await expect(loginPage.productsTitle()).toHaveText('Products')
})
test('Adding of items.', async ({ page }) => {
    await productsPage.addItemToCart('sauce-labs-backpack');
})
test('Remove of items.', async ({ page }) => {
    await productsPage.addItemToCart('sauce-labs-backpack');
    await productsPage.removeItemFromCart('sauce-labs-backpack');
});