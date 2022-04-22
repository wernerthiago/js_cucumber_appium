const base = require('./base.js').basePage;
const assert = require('assert');
const CustomWorld = require("../features/environment.js").CustomWorld
const LoginPage = require('./login.js').LoginPage

const elements = [
    {
        'name': 'Title',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//android.widget.TextView[@text="Sign Up"][1]'
    },
    {
        'name': 'Back',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.view.ViewGroup/android.widget.ImageView'
    },
    {
        'name': 'Name',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//android.widget.EditText[1]'
    },
    {
        'name': 'Email',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//android.widget.EditText[2]'
    },
    {
        'name': 'Password',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//android.widget.EditText[3]'
    },
    {
        'name': 'Newsletter',
        'type': 'CHECKBOX',
        'method': 'xpath',
        'locator': '//android.widget.TextView[@text="I agree to Miro Terms of Service and Privacy Policy"]'
    },
    {
        'name': 'Legal',
        'type': 'CHECKBOX',
        'method': 'xpath',
        'locator': '//android.widget.TextView[@text="I agree to receive news and product updates from Miro"]'
    },
    {
        'name': 'Sign Up',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.widget.TextView[@text="Sign Up"][2]'
    },
    {
        'name': 'Email Invalid Error',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@resource-id="android:id/alertTitle" and @text="Email is not valid"]'
    },
    {
        'name': 'Password Minimum Characters',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@resource-id="android:id/alertTitle" and @text="Password has to be longer than 8 symbols"]'
    },
    {
        'name': 'Legal Empty Error',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@resource-id="android:id/alertTitle" and @text="Review the Terms"]'
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
        await LoginPage.tap_signup();
        this.trait();
    }

    static async trait() {
        let element = await this.element('Title', 'LABEL');
        let result = await base.is_displayed(element.method, element.locator)
        assert(result, 'This is not the right page');
    }
}

module.exports = {
    SignUpPage
}