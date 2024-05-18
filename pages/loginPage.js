const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        
        this.page = page;
        this.url = 'https://freelance-learn-automation.vercel.app/login';
        this.username = '#email1';
        this.password = '#password1';
        this.loginbutton = '.submit-btn';
        this.signinScreen = "//h2[contains(.,'Sign In')]"
    }

    async verifySignIn() {
        await expect(this.page.locator(this.signinScreen)).toBeVisible()
    }

    async goToLoginPage() {
        await this.page.goto(this.url);
    }

    async loginToApplication(user, pass) {

        await this.goToLoginPage();

        await this.page.waitForSelector(this.username, { state: 'visible' });
        await this.page.fill(this.username,user);

        await this.page.waitForSelector(this.password, { state: 'visible' });
        await this.page.fill(this.password,pass); 

        await this.page.waitForSelector(this.loginbutton, { state: 'visible' });
        await this.page.click(this.loginbutton);


    }
}

module.exports = LoginPage;
