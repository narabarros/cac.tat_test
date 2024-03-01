const CacTatPage = require('../page/cac.tat.page.js');

const { test, expect } = require('@playwright/test');

test('access the app and insert the informations in first validation', async ({ page }) => {
    const cacTatPage = new CacTatPage(page); // Crie uma instância da classe de Page Objects

    await cacTatPage.navigate();
    await cacTatPage.fillFirstName('John');
    await cacTatPage.fillLastName('Doe');
    await cacTatPage.fillEmail('johndoe@gmail.com');
    await cacTatPage.fillPhone('19998098090');
    await cacTatPage.selectProduct('blog');
    await cacTatPage.clickEmailCheckbox();
    await cacTatPage.fillTextArea('help with my blog please, i need more space for write my ideas');
    await cacTatPage.clickFileUpload();
    await cacTatPage.uploadFile('/Users/nara.silva/docker_app_tests/files/NaraBarros.pdf');
    await cacTatPage.takeScreenshot('screenshot.png');
    await cacTatPage.submitForm();
});