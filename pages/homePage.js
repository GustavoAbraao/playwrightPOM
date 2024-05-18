const { expect } = require('@playwright/test');

class HomePage{


    constructor(page) {

        this.page = page;
        this.textoption = "//h2[contains(.,'Playwright')]"
        this.menu = "//img[@alt='menu']"
        this.singout = "//button[contains(.,'Sign out')]"

    }

    async verifyPlaywrightText() {
        await expect(this.page.locator(this.textoption)).toBeVisible()

    }

    async logoutFromApplication() {

        await this.page.waitForSelector(this.menu, { state: 'visible' });
        await this.page.click(this.menu)

        await this.page.waitForSelector(this.singout, { state: 'visible' });
        await this.page.click(this.singout)

    }

}

module.exports = HomePage;