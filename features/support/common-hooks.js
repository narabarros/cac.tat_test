// File: features/support/common-hooks.js

const { BeforeAll, After } = require('@cucumber/cucumber');
const CacTatPage = require('../../page/cac.tat.page.js');
const page = require('@playwright/test')
const {webkit} = require("playwright-core");
const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(5000);

BeforeAll(async function () {
    let browser = await page.webkit.launch({ headless: false });

    global.browser = browser;
    const context = await browser.newContext()
    context.setDefaultTimeout(5000)

    global.context = context;
    global.page = await context.newPage();
    global.cacTatPage = new CacTatPage(global.page);
});
