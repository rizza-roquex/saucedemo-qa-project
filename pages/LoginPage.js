export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async openLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.click('#login-button');
    }

    errorMessage() {
        return this.page.locator('[data-test="error"]');
    }

    productsTitle() {
        return this.page.locator('[data-test="title"]');
    }
}