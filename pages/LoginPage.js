
export class LoginPage {
    constructor(page) {
        this.page = page;

        // Locators: declare them, but don't perform actions here
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
        this.productsTitle = page.locator('[data-test="title"]');
    }

    // Page actions
    async openLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
// Every action you see in the login page