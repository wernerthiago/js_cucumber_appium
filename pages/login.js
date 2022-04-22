const base = require('./base.js').basePage;
const assert = require('assert');
const CustomWorld = require("../features/environment.js").CustomWorld

const elements = [
    {
        'name': 'Sign Up',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.widget.Button[@content-desc="sign up"]'
    },
    {
        'name': 'Email',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//android.widget.EditText[@content-desc="email"]'
    },
    {
        'name': 'Password',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//android.widget.EditText[@content-desc="password"]'
    },
    {
        'name': 'Sign in',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.widget.Button[@content-desc="sign in"]'
    },
    {
        'name': 'Single Sign-on',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.widget.Button[@content-desc="get magic link, no password needed"]'
    },
    {
        'name': 'Login Invalid',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@resource-id="android:id/alertTitle"]'
    },
    {
        'name': 'Forgot Password',
        'type': 'LINK',
        'method': 'xpath',
        'locator': '//android.widget.Button[@content-desc="forgot password"]'
    },
    {
        'name': 'Google',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.widget.Button[@content-desc="google account"]'
    },
    {
        'name': 'Slack',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.widget.Button[@content-desc="slack"]'
    },
    {
        'name': 'Microsoft',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.widget.Button[@content-desc="microsoft"]'
    },
    {
        'name': 'Facebook',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.widget.Button[@content-desc="facebook"]'
    },
    {
        'name': 'SSO',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//android.widget.Button[@content-desc="sso"]'
    }
];

class LoginPage {
    constructor() {
    }

    static get elements() {
        return elements;
    }

    static async element(name, type) {
        return elements.find(element => element.name === name && element.type === type);
    }

    static async navigate() {
        this.trait();
    }

    static async trait() {
        let element = await this.element('Email', 'FIELD');
        let result = await base.is_displayed(element.method, element.locator)
        assert(result, 'This is not the right page');
    }

    static async type_credentials() {
        let username = process.env.MIRO_USERNAME;
        let password = process.env.MIRO_PASSWORD;
        let element_username = await this.element('Email', 'FIELD')
        let element_password = await this.element('Password', 'FIELD');
        await base.type(element_username.method, element_username.locator, username);
        await base.type(element_password.method, element_password.locator, password);
    }

    static async login() {
        await this.type_credentials()
        let element_signin = await this.element('Sign in', 'BUTTON');
        await base.click(element_signin.method, element_signin.locator);
    }

    static async tap_signup() {
        let element = await this.element('Sign Up', 'BUTTON');
        await base.click(element.method, element.locator, true);
    }
}

module.exports = {
    LoginPage
}