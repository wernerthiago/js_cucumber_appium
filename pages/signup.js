const base = require('./base.js').basePage;
const assert = require('assert');
const CustomWorld = require("../features/environment.js").CustomWorld

const elements = [
    {
        'name': 'Title',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@class="signup"]/h1'
    },
    {
        'name': 'Body',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@class="ab-signup-usa--free-text"]'
    },
    {
        'name': 'Name',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-form-signup-name-1"]'
    },
    {
        'name': 'Name Empty Error',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@id="nameError"]'
    },
    {
        'name': 'Email',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-form-signup-email-1"]'
    },
    {
        'name': 'Email Empty Error',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@id="emailError"]'
    },
    {
        'name': 'Password',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-form-signup-password-1"]'
    },
    {
        'name': 'Password Empty Error',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@data-testid="please-enter-your-password-1"]'
    },
    {
        'name': 'Legal',
        'type': 'CHECKBOX',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-form-signup-terms-1"]'
    },
    {
        'name': 'Legal Empty Error',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@id="termsError"]'
    },
    {
        'name': 'Newsletter',
        'type': 'CHECKBOX',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-form-signup-subscribe-1"]'
    },
    {
        'name': 'Get Started',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-form-signup-btn-start-1"]'
    },
    {
        'name': 'Single Sign-on',
        'type': 'SECTION',
        'method': 'xpath',
        'locator': '//*[@class="signup__referrer-container"]'
    },
    {
        'name': 'Free License',
        'type': 'SECTION',
        'method': 'xpath',
        'locator': '//*[@class="cxl-social-container"]'
    }
];

class SignUpPage {
    constructor() {
    }

    static get elements() {
        return elements;
    }

    static async element(name, type) {
        return elements.find(element => element.name === name && element.type === type);
    }

    static async navigate() {
        await CustomWorld.driver.get('https://www.miro.com/signup');
        await CustomWorld.driver.execute('return document.querySelector("#onetrust-banner-sdk").remove()')
        await CustomWorld.driver.execute('return document.querySelector("#js-branch-banner-iframe").remove()')
        this.trait();
    }

    static async trait() {
        let element = elements.find(element => element.name === "Title" && element.type === 'LABEL');
        let result = base.is_displayed(element.method, element.locator)
        assert(result, 'This is not the right page');
    }
}

module.exports = {
    SignUpPage
}