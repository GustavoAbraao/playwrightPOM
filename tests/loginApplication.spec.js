const { test } = require('@playwright/test');
const LoginPage = require('../pages/loginPage'); 
const HomePage = require('../pages/homePage')

test.describe('Login Application', () => {
    let page;
    let loginPage;
    let homePage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Login to Application using Page Object', async () => {

        await loginPage.goToLoginPage();

        await loginPage.loginToApplication("gustavotest@gmail.com", "password");

        await homePage.verifyPlaywrightText();

        await homePage.logoutFromApplication();

        await loginPage.verifySignIn();


    });
});
