export class CartPage {
    constructor(page) {
        this.page = page;
    }

    async removeItem(item) {
        await this.page.locator(`[data-test="remove-${item}"]`).click();
    }

    cartItem(item) {
        return this.page
            .locator('[data-test="inventory-item-name"]')
            .filter({ hasText: item });
    }
    async clickCheckOut() {
        await this.page.locator('[data-test="checkout"]').click();
    }

    async continueShopping() {
        await this.page.locator('[data-test="continue-shopping"]').click();
    }
}