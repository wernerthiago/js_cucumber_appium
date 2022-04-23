const basePage = require('./base.js').basePage;
const assert = require('assert');
const Locator = require('../support/locator.js')
const CustomWorld = require("../features/environment.js").CustomWorld

class LoginPage extends basePage {
    constructor() {
        super();
        this.locators = [];
        this.init();
    }

    newLocator(name, type, method_ios=null, locator_ios=null, method_android=null, locator_android=null) {
        let newElement = new Locator(this, name, type, method_ios=method_ios, locator_ios=locator_ios, method_android=method_android, locator_android=locator_android);
        this.locators.push(newElement);
        return newElement;
    }

    init() {
        this.SIGN_UP_BUTTON = this.newLocator('Sign Up', 'BUTTON', 'xpath', '//android.widget.Button[@content-desc="sign up"]', undefined, undefined);
        this.EMAIL_FIELD = this.newLocator('Email', 'FIELD', 'xpath', '//android.widget.EditText[@content-desc="email"]', undefined, undefined);
        this.PASSWORD_FIELD = this.newLocator('Password', 'FIELD', 'xpath', '//android.widget.EditText[@content-desc="password"]', undefined, undefined);
        this.SIGN_IN_BUTTON = this.newLocator('Sign in', 'BUTTON', 'xpath', '//android.widget.Button[@content-desc="sign in"]', undefined, undefined);
        this.SINGLE_SIGN_ON_BUTTON = this.newLocator('Single Sign-on', 'BUTTON', 'xpath', '//android.widget.Button[@content-desc="get magic link, no password needed"]', undefined, undefined);
        this.LOGININVALID_LABEL = this.newLocator('Login Invalid', 'LABEL', 'xpath', '//*[@resource-id="android:id/alertTitle"]', undefined, undefined);
        this.FORGOTPASSWORD_LINK = this.newLocator('Forgot Password', 'LINK', 'xpath', '//android.widget.Button[@content-desc="forgot password"]', undefined, undefined);
        this.GOOGLE_BUTTON = this.newLocator('Google', 'BUTTON', 'xpath', '//android.widget.Button[@content-desc="google account"]', undefined, undefined);
        this.SLACK_BUTTON = this.newLocator('Slack', 'BUTTON', 'xpath', '//android.widget.Button[@content-desc="slack"]', undefined, undefined);
        this.MICROSOFT_BUTTON = this.newLocator('Microsoft', 'BUTTON', 'xpath', '//android.widget.Button[@content-desc="microsoft"]', undefined, undefined);
        this.FACEBOOK_BUTTON = this.newLocator('Facebook', 'BUTTON', 'xpath', '//android.widget.Button[@content-desc="facebook"]', undefined, undefined);
        this.SSO_BUTTON = this.newLocator('SSO', 'BUTTON', 'xpath', '//android.widget.Button[@content-desc="sso"]', undefined, undefined);
    }

    searchLocator(name, type) {
        const element = this.locators.filter(element => element.name === name && element.type === type);
        assert(element.length > 0, `The ${name} element is not implemented inside ${this} or the Name and Type properties are not the same.`)
        return element[0]
    }

    get elements() {
        return elements;
    }

    async element(name, type) {
        return this.searchLocator(name, type);
    }

    async navigate() {
        this.trait();
    }

    async trait() {
        let result = await this.is_displayed(this.EMAIL_FIELD);
        assert(result, 'This is not the right page');
    }

    async type_credentials() {
        let username = process.env.MIRO_USERNAME;
        let password = process.env.MIRO_PASSWORD;
        await this.type(this.EMAIL_FIELD, username);
        await this.type(this.PASSWORD_FIELD, password);
    }

    async login() {
        await this.type_credentials()
        await this.click(this.SIGN_IN_BUTTON);
    }

    async tap_signup() {
        await this.click(this.SIGN_UP_BUTTON);
    }
}

module.exports = {
    LoginPage
}