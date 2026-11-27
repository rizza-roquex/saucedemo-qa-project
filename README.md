# 🛒 SauceDemo UI Test Automation (`playwright-sd`)

Welcome to my QA Automation repository! This project is an end-to-end automated testing suite built with **Playwright** and **JavaScript** for [Swag Labs (SauceDemo)](https://www.saucedemo.com/).

As a QA Tester transitioning into test automation, I created this project as a hands-on stepping stone to practice writing clean, maintainable automated tests, implementing the Page Object Model (POM), and verifying core e-commerce user flows.

## 🎯 Project Objectives

* **Learn & Apply Automation Fundamentals:** Practice locating web elements, leveraging Playwright's auto-waiting mechanisms, and writing reliable assertions.
* **Design Patterns:** Implement the **Page Object Model (POM)** to separate test logic from page locators and improve code reusability.
* **End-to-End Testing:** Automate critical e-commerce workflows across login, inventory, cart, navigation, and checkout modules.

## 🛠️ Tech Stack

* **Language:** JavaScript (Node.js)
* **Automation Framework:** [Playwright](https://playwright.dev/)
* **Design Pattern:** Page Object Model (POM)
* **Reporting & Debugging:** Playwright HTML Reporter & Screenshot Captures

## 🧪 Automated Test Scenarios

This suite is organized by feature modules and covers the following functional test cases:

### 1. Authentication (`tests/login/`)

- [x] **Valid Login (`valid-login.spec.js`):** Successful authentication with valid credentials (`standard_user`).
- [x] **Invalid Login (`invalid-login-tests.spec.js`):** Error handling for locked-out users and invalid username/password combinations.

### 2. Inventory (`tests/inventory/`)

- [x] **Add to Cart (`add-to-cart.spec.js`):** Adding products directly from the inventory page.
- [x] **Remove from Cart (`remove-from-cart.spec.js`):** Removing items directly from the inventory view.

### 3. Shopping Cart (`tests/cart/`)

- [x] **Cart Badge Count (`cart-badge-count.spec.js`):** Verifying the shopping cart badge dynamically updates as items are added/removed.
- [x] **View Cart (`view-cart.spec.js`):** Navigating to the cart and verifying added product details.
- [x] **Remove Item (`remove-item-cart.spec.js`):** Removing items from within the cart page.

### 4. Checkout Flow (`tests/checkout/`)

- [x] **Successful Checkout (`successful-checkout.spec.js`):** Completing an end-to-end purchase flow with valid user details.
- [x] **Missing First Name (`missing-firstname.spec.js`):** Validation error handling when the First Name field is left blank.
- [x] **Missing Postal Code (`missing-postalcode.spec.js`):** Validation error handling when the Zip/Postal Code field is left blank.

### 5. Navigation & End-to-End (`tests/navigation/` & root specs)

- [x] **Navigation (`navigation/`):** Verifying sidebar menu links, logout functionality, and page routing.
- [x] **Core E2E Flows (`saucedemo.spec.js`):** Comprehensive end-to-end user journeys.

## 📂 Project Structure

```text
playwright-sd/
├── pages/                          # Page Object Model (POM) classes
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── LoginPage.js
│   └── ProductsPage.js
├── screenshots/                    # Captured screenshots for debugging/verification
├── test-results/                   # Playwright test execution artifacts
├── tests/                          # Modular test specification files
│   ├── cart/
│   │   ├── cart-badge-count.spec.js
│   │   ├── remove-item-cart.spec.js
│   │   └── view-cart.spec.js
│   ├── checkout/
│   │   ├── missing-firstname.spec.js
│   │   ├── missing-postalcode.spec.js
│   │   └── successful-checkout.spec.js
│   ├── inventory/
│   │   ├── add-to-cart.spec.js
│   │   └── remove-from-cart.spec.js
│   ├── login/
│   │   ├── invalid-login-tests.spec.js
│   │   └── valid-login.spec.js
│   ├── navigation/                 # Navigation test specs
│   ├── saucedemo.spec.js
│   └── test.spec.js
├── .gitignore
├── package.json                    # Project dependencies and scripts
├── playwright.config.js            # Playwright configuration file
└── README.md                       # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* npm (comes with Node.js)
* Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/playwright-sd.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd playwright-sd
   ```

3. **Install dependencies and Playwright browsers:**
   ```bash
   npm install
   npx playwright install
   ```

### Running the Tests

You can run the test suite using the following Playwright CLI commands:

* **Run all tests (headless mode):**
  ```bash
  npx playwright test
  ```

* **Run tests in headed mode (watch the browser):**
  ```bash
  npx playwright test --headed
  ```

* **Run tests with Playwright UI Mode (interactive):**
  ```bash
  npx playwright test --ui
  ```

* **Run a specific test folder (e.g., checkout tests):**
  ```bash
  npx playwright test tests/checkout
  ```

* **View the HTML test report:**
  ```bash
  npx playwright show-report
  ```

## 📈 Future Improvements

As I continue to grow my automation skills, I plan to enhance this project with:

- [ ] Setting up CI/CD pipelines using GitHub Actions to run tests automatically on push
- [ ] Data-driven testing using external JSON/CSV files for test credentials and user info
- [ ] Cross-browser testing configuration across Chromium, Firefox, and WebKit
- [ ] Custom fixtures in Playwright to handle pre-authenticated states (`storageState`)

## 👤 Author

**Rizza Roque**  
*Software QA Tester | Aspiring QA Automation Engineer*

* **LinkedIn:** https://www.linkedin.com/in/rizzafranchescaroque/
* **GitHub:** [Your GitHub Profile URL]