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
        // this.ifKeyboard_hide();
        let keyboard = await CustomWorld.driver.isKeyboardShown();
        if (keyboard === true) {
            await CustomWorld.driver.hideDeviceKeyboard();
        }
        let element = await CustomWorld.driver.element(method, locator);
        let isDisplayed = await element.isDisplayed();
        return isDisplayed
    };

    static async click(method, locator) {
        let element = await CustomWorld.driver.element(method, locator);
        return await element.click();
    };

    static async type(method, locator, value) {
        let element = await CustomWorld.driver.element(method, locator);
        return await element.type(value);
    };

    static async match_text(method, locator, text) {
        let element = await CustomWorld.driver.element(method, locator);
        let actual = await element.text();
        let result = text.localeCompare(actual);
        return (result === 0, actual);
    };

    static async ifKeyboard_hide() {
        let keyboard = await CustomWorld.driver.isKeyboardShown();
        if (keyboard === true) {
            await CustomWorld.driver.hideDeviceKeyboard();
        }
    }
}

module.exports = {
    basePage
}