const CustomWorld = require("../features/environment.js").CustomWorld

class basePage {
    constructor() {
    }

    async find_element(method, locator) {
        let element;

        element = await CustomWorld.driver.element(method, locator);

        return element;
    };
    
    static async is_displayed(method, locator) {
        let element = await CustomWorld.driver.element(method, locator);
        let isDisplayed = await element.isDisplayed;
        return isDisplayed
    };

    static async click(method, locator) {
        let element = await CustomWorld.driver.element(method, locator);
        return await element.click();
    }
}

module.exports = {
    basePage
}