export class ProductsPage {
    constructor(page) {
        this.page = page;
    }

    async addBackpackToCart() {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
}