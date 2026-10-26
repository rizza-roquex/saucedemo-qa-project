export class ProductsPage {
    constructor(page) {
        this.page = page;
    }

    async addItemToCart(item) {
        await this.page.locator(`[data-test="add-to-cart-${item}"]`).click();
    }
    async removeItemFromCart(item) {
        await this.page.locator(`[data-test="remove-${item}"]`).click();
    }
    async openCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }
}

// Every action you see in ProductsPage including error messages. 