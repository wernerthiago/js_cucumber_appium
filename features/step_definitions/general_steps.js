const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const CustomWorld = require("../environment.js").CustomWorld
const get_page_class = require('../../support/page_factory.js').get_page_class
const base = require('../../pages/base.js').basePage;

// Given steps
Given('the app displays the {string} page', {timeout: 1000 * 10000}, async (string) => {
    get_page_class(string).navigate
    CustomWorld.currentPage = get_page_class(string)
    await CustomWorld.driver.sleep(10000);
});

// When steps
When('the user clicks on the {string} button', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'BUTTON');
    await CustomWorld.currentPage.click(element);
});

When('the user clicks on the {string} field', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'FIELD');
    await CustomWorld.currentPage.click(element)
});

When('the user types {string} on the {string} field', {timeout: 2 * 10000}, async (string, string2) => {
    let element = await CustomWorld.currentPage.element(string2, 'FIELD');
    await CustomWorld.currentPage.type(element, string);
});

When('the user types valid credentials', {timeout: 2 * 10000}, async () => {
    await CustomWorld.currentPage.type_credentials();
});

// Then steps
Then('the app should display the {string} label', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'LABEL');
    let el = await CustomWorld.currentPage.is_displayed(element)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} field', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'FIELD');
    let el = await CustomWorld.currentPage.is_displayed(element)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} checkbox', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'CHECKBOX');
    let el = await CustomWorld.currentPage.is_displayed(element)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} button', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'BUTTON');
    let el = await CustomWorld.currentPage.is_displayed(element)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} section', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'SECTION');
    let el = await CustomWorld.currentPage.is_displayed(element)
    assert(el, 'The element is not displayed');
});

Then('the app should not display the {string} label', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'LABEL');
    let el = await CustomWorld.currentPage.is_displayed(element)
    assert(!el, 'The element is displayed');
});

Then('the app should display the {string} label text', {timeout: 2 * 10000}, async (string, docString) => {
    let element = await CustomWorld.currentPage.element(string, 'LABEL');
    let result, actual = await CustomWorld.currentPage.match_text(element, docString);
    assert(result, 'The text of element is not the same: ' + actual);
});

Then('the app should display the {string} link', {timeout: 2 * 10000}, async (string) => {
    let element = await CustomWorld.currentPage.element(string, 'LINK');
    let el = await CustomWorld.currentPage.is_displayed(element)
    assert(el, 'The element is not displayed');
});

Then('the app should display the {string} page', {timeout: 1000 * 10000}, async (string) => {
    await CustomWorld.driver.sleep(20000);
    get_page_class(string).trait()
    await CustomWorld.driver.sleep(10000);
    CustomWorld.currentPage = get_page_class(string)
});