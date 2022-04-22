const { Given, When, Then } = require('@cucumber/cucumber');
const { World } = require('@cucumber/cucumber')
const base = require('../../pages/base.js');
const page_factory = require('../../support/page_factory.js')
const assert = require('assert');

// Given steps
Given('the app displays the {string} page', {timeout: 1000 * 10000}, async (string) => {
    page_factory.page_factory[string].navigate()
    World.currentPage = page_factory.page_factory[string]
    await World.driver.sleep(10000);
});

// Then steps
Then('the app should display the {string} label', {timeout: 2 * 10000}, async (string) => {
    let element = World.currentPage.element(string, 'LABEL');
    assert(base.basePage.is_displayed(element.method, element.locator), 'The element is not displayed');
});

Then('the app should display the {string} field', {timeout: 2 * 10000}, async (string) => {
    let element = World.currentPage.element(string, 'FIELD');
    assert(base.basePage.is_displayed(element.method, element.locator), 'The element is not displayed');
});

Then('the app should display the {string} checkbox', {timeout: 2 * 10000}, async (string) => {
    let element = World.currentPage.element(string, 'CHECKBOX');
    assert(base.basePage.is_displayed(element.method, element.locator), 'The element is not displayed');
});

Then('the app should display the {string} button', {timeout: 2 * 10000}, async (string) => {
    let element = World.currentPage.element(string, 'BUTTON');
    assert(base.basePage.is_displayed(element.method, element.locator), 'The element is not displayed');
});

Then('the app should display the {string} section', {timeout: 2 * 10000}, async (string) => {
    let element = World.currentPage.element(string, 'SECTION');
    assert(base.basePage.is_displayed(element.method, element.locator), 'The element is not displayed');
});