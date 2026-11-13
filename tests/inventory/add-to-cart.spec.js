import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';

let loginPage;

test.beforeEach(async ({ page }) => {
    // Create an instance of the LoginPage class
    loginPage = new LoginPage(page);

    // Open the login page before each test
    await loginPage.openLoginPage();
    // Log in with valid credentials before each test
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(loginPage.productsTitle)
        .toHaveText('Products');
});

test('TC-01 User adds a single item to the cart.', async ({ page }) => {
    // Create an instance of the ProductsPage class
    const productsPage = new ProductsPage(page);
    
    // Click on the "Add to cart" button for the first item
    await productsPage.addItemToCart('sauce-labs-backpack');

    const screenshot = await page.screenshot();

    await test.info().attach('Item added to cart successfully', {
        body: screenshot,
        contentType: 'image/png',
    });
});

