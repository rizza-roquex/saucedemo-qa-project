export class CheckoutPage {
    constructor(page) {
        this.page = page;
        // Locators
        this.checkoutTitle = page.locator('[data-test="title"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipPostalCode = page.locator('[data-test="postalCode"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.errorMessage = page.locator('[data-test="error"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }
    async fillCheckOutInfo(firstName, lastName, zipPostalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipPostalCode.fill(zipPostalCode);
    }
    async clickContinue() {
        await this.continueButton.click();
    }
    async clickCancel() {
        await this.cancelButton.click();
    }
    async clickFinish() {
        await this.finishButton.click();
    } 
    successMessage() {
        return this.page.locator('[data-test="complete-header"]');
    }   
}