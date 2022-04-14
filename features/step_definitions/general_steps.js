const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const CustomWorld = require("../environment.js").CustomWorld
const page_factory = require('../../support/page_factory.js')
const base = require('../../pages/base.js').basePage;

// Given steps
Given('the app displays the {string} page', {timeout: 1000 * 10000}, async (string) => {
    page_factory.page_factory[string].navigate()
    CustomWorld.currentPage = page_factory.page_factory[string]
    await CustomWorld.driver.sleep(10000);
});

// When steps
When('the user clicks on the {string} button', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'BUTTON');
    await base.click(element.method, element.locator)
});

// Then steps
Then('the app should display the {string} label', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'LABEL');
    let el = await base.is_displayed(element.method, element.locator)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} field', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'FIELD');
    let el = await base.is_displayed(element.method, element.locator)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} checkbox', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'CHECKBOX');
    let el = await base.is_displayed(element.method, element.locator)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} button', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'BUTTON');
    let el = await base.is_displayed(element.method, element.locator)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} section', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'SECTION');
    let el = await base.is_displayed(element.method, element.locator)
    assert(el, 'The element is not displayed');
});