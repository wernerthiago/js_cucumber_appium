const base = require('./base.js').basePage;
const LoginPage = require('./login.js').LoginPage;
const assert = require('assert');
const CustomWorld = require("../features/environment.js").CustomWorld

const elements = [
    {
        'name': 'Boards',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.view.View[@content-desc="boards" and @selected="true"]'
    }
];

class HomePage {
    constructor() {
    }

    static get elements() {
        return elements;
    }

    static async element(name, type) {
        return elements.find(element => element.name === name && element.type === type);
    }

    static async navigate() {
        LoginPage.navigate();
        LoginPage.login();
        this.trait();
    }

    static async trait() {
        let element = await this.element('Boards', 'BUTTON');
        let result = await base.is_displayed(element.method, element.locator)
        assert(result, 'This is not the right page');
    }
}

module.exports = {
    HomePage
}