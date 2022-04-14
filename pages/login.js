const base = require('./base.js').basePage;
const assert = require('assert');
const CustomWorld = require("../features/environment.js").CustomWorld

const elements = [
    {
        'name': 'Title',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@class="signup"]'
    },
    {
        'name': 'Single Sign-on',
        'type': 'SECTION',
        'method': 'xpath',
        'locator': '//*[@class="signup__social"]'
    },
    {
        'name': 'Separator',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@class="signup__separator"]'
    },
    {
        'name': 'Email',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-form-login-email-1"]'
    },
    {
        'name': 'Email Empty Error',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@id="emailError"]'
    },
    {
        'name': 'Login Invalid',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@id="loginError"]'
    },
    {
        'name': 'Password',
        'type': 'FIELD',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-form-login-password-1"]'
    },
    {
        'name': 'Password Empty Error',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@id="passwordError"]'
    },
    {
        'name': 'Password Minimum Characters',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@id="password-hint"]/div[@id="signup-form-password"]'
    },
    {
        'name': 'Forgot Password',
        'type': 'LINK',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-link-forgot-password-1"]'
    },
    {
        'name': 'Sign in',
        'type': 'BUTTON',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-form-login-btn-signin-1"]'
    },
    {
        'name': 'Single Sign-on',
        'type': 'LINK',
        'method': 'xpath',
        'locator': '//*[@data-testid="mr-link-signin-with-sso-1"]'
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
        await CustomWorld.driver.get('https://www.miro.com/login');
        await CustomWorld.driver.execute('return document.querySelector("#onetrust-banner-sdk").remove()')
        await CustomWorld.driver.execute('return document.querySelector("#js-branch-banner-iframe").remove()')
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
}

module.exports = {
    LoginPage
}