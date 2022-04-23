const basePage = require('./base.js').basePage;
const assert = require('assert', undefined, undefined);
const Locator = require('../support/locator.js')
const LoginPage = require('./login.js').LoginPage

class SignUpPage extends basePage {
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
        this.TITLE_LABEL = this.newLocator('Title', 'LABEL', 'xpath', '//android.widget.TextView[@text="Sign Up"][1]', undefined, undefined);
        this.BACK_BUTTON = this.newLocator('Back', 'BUTTON', 'xpath', '//android.view.ViewGroup/android.widget.ImageView', undefined, undefined);
        this.NAME_FIELD = this.newLocator('Name', 'FIELD', 'xpath', '//android.widget.EditText[1]', undefined, undefined);
        this.EMAIL_FIELD = this.newLocator('Email', 'FIELD', 'xpath', '//android.widget.EditText[2]', undefined, undefined);
        this.PASSWORD_FIELD = this.newLocator('Password', 'FIELD', 'xpath', '//android.widget.EditText[3]', undefined, undefined);
        this.NEWSLETTER_CHECKBOX = this.newLocator('Newsletter', 'CHECKBOX', 'xpath', '//android.widget.TextView[@text="I agree to Miro Terms of Service and Privacy Policy"]', undefined, undefined);
        this.LEGAL_CHECKBOX = this.newLocator('Legal', 'CHECKBOX', 'xpath', '//android.widget.TextView[@text="I agree to receive news and product updates from Miro"]', undefined, undefined);
        this.SIGN_UP_BUTTON = this.newLocator('Sign Up', 'BUTTON', 'xpath', '//android.widget.TextView[@text="Sign Up"][2]', undefined, undefined);
        this.EMIALINVALID_LABEL = this.newLocator('Email Invalid Error', 'LABEL', 'xpath', '//*[@resource-id="android:id/alertTitle" and @text="Email is not valid"]', undefined, undefined);
        this.PASSWORDMINIMUM_LABEL = this.newLocator('Password Minimum Characters', 'LABEL', 'xpath', '//*[@resource-id="android:id/alertTitle" and @text="Password has to be longer than 8 symbols"]', undefined, undefined);
        this.LEGALEMPTY_LABEL = this.newLocator('Legal Empty Error', 'LABEL', 'xpath', '//*[@resource-id="android:id/alertTitle" and @text="Review the Terms"]', undefined, undefined);
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
        await LoginPage.tap_signup();
        this.trait();
    }

    async trait() {
        let result = await this.is_displayed(this.TITLE_LABEL)
        assert(result, 'This is not the right page');
    }
}

module.exports = {
    SignUpPage
}