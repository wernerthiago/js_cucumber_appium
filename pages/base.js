const CustomWorld = require("../features/environment.js").CustomWorld
const wd = require('wd');

class basePage {
    constructor() {
    }

    async find_element(element) {
        const locator = await this.getLocator(element);

        el = await CustomWorld.driver.element(locator.method, locator.locator);

        return el;
    };
    
    async is_displayed(element) {
        const locator = await this.getLocator(element);
        let el = await CustomWorld.driver.element(locator.method, locator.locator);
        let isDisplayed = await el.isDisplayed();
        return isDisplayed
    };

    async click(element) {
        const locator = await this.getLocator(element);
        let el = await CustomWorld.driver.element(locator.method, locator.locator);
        return await el.click();
    };

    async type(element, value) {
        const locator = await this.getLocator(element);
        let el = await CustomWorld.driver.element(locator.method, locator.locator);
        return await el.type(value);
    };

    async match_text(element, text) {
        const locator = await this.getLocator(element);
        let el = await CustomWorld.driver.element(locator.method, locator.locator);
        let actual = await el.text();
        let result = text.localeCompare(actual);
        return (result === 0, actual);
    };

    async ifKeyboard_hide() {
        let keyboard = await CustomWorld.driver.isKeyboardShown();
        if (keyboard === true) {
            await CustomWorld.driver.hideDeviceKeyboard();
        }
    }

    async getPlatformName() {
        const capabilities = await CustomWorld.capabilities;
        return capabilities.platformName;
    }

    async getLocator(element) {
        let locator = await element.locator.get_locator(this.getPlatformName());
        return {
            method: locator.method,
            locator: locator.locator
        };
    }
}

module.exports = {
    basePage
}