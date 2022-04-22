const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const CustomWorld = require("../environment.js").CustomWorld
const page_factory = require('../../support/page_factory.js').page_factory
const base = require('../../pages/base.js').basePage;

// Given steps
Given('the app displays the {string} page', {timeout: 1000 * 10000}, async (string) => {
    page_factory[string].navigate()
    CustomWorld.currentPage = page_factory[string]
    await CustomWorld.driver.sleep(10000);
});

// When steps
When('the user clicks on the {string} button', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'BUTTON');
    await base.click(element.method, element.locator)
});

When('the user clicks on the {string} field', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'FIELD');
    await base.click(element.method, element.locator)
});

When('the user types {string} on the {string} field', {timeout: 2 * 10000}, async (string, string2) => {
    let element = await CustomWorld.currentPage.element(string2, 'FIELD');
    await base.type(element.method, element.locator, string);
});

When('the user types valid credentials', {timeout: 2 * 10000}, async () => {
    await CustomWorld.currentPage.type_credentials();
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

Then('the app should not display the {string} label', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'LABEL');
    let el = await base.is_displayed(element.method, element.locator)
    assert(!el, 'The element is displayed');
});

Then('the app should display the {string} label text', {timeout: 2 * 10000}, async (string, docString) => {
    let element = await CustomWorld.currentPage.element(string, 'LABEL');
    let result, actual = await base.match_text(element.method, element.locator, docString);
    assert(result, 'The text of element is not the same: ' + actual);
});

Then('the app should display the {string} link', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'LINK');
    let el = await base.is_displayed(element.method, element.locator)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} page', {timeout: 1000 * 10000}, async (string) => {
    await CustomWorld.driver.sleep(20000);
    page_factory[string].trait()
    await CustomWorld.driver.sleep(10000);
    CustomWorld.currentPage = page_factory[string]
});