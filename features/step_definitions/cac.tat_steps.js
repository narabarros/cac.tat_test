// File: features/step_definitions/firstValidation_steps.js

const { Given, When, Then } = require('@cucumber/cucumber');
const CacTatPage = require('../../page/cac.tat.page.js');

Given('I am on the home page', async function () {
    await global.cacTatPage.navigate();
});

When('I fill in the "First Name" field with "John"', async function () {
    await global.cacTatPage.fillFirstName('John');
});

When('I fill in the "Last Name" field with "Doe"', async function () {
    await global.cacTatPage.fillLastName('Doe');
});

When('I fill in the "Email" field with "johndoe@gmail.com"', async function () {
    await global.cacTatPage.fillEmail('johndoe@gmail.com');
});

When('I fill in the "Phone" field with "19998098090"', async function () {
    await global.cacTatPage.fillPhone('19998098090');
});

When('I select "blog" in the "Product" field', async function () {
    await global.cacTatPage.selectProduct('blog');
});

When('I check the "Email" checkbox', async function () {
    await global.cacTatPage.clickEmailCheckbox();
});

When('I fill in the text area with "help with my blog please, i need more space for write my ideas"', async function () {
    await global.cacTatPage.fillTextArea('help with my blog please, i need more space for write my ideas');
});

When('I upload the file', async function () {
    await global.cacTatPage.uploadFile('/Users/nara.silva/docker_app_tests/files/NaraBarros.pdf');
});

When('I take a screenshot and save it as "screenshot.png"', async function () {
    await global.cacTatPage.takeScreenshot('screenshot.png');
});

Then('I click on the submit button', async function () {
    await global.cacTatPage.submitForm();
});