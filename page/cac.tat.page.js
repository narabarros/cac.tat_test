class CacTatPage {
    constructor(page) {
        this.page = page;
        this.delayTime = 300;
    }

    async delay() {
        await new Promise(resolve => setTimeout(resolve, this.delayTime));
    }

    async navigate() {
        await this.page.goto('http://localhost/');
        await new Promise(resolve => setTimeout(resolve, 2500));
    }

    async fillFirstName(name) {
        await this.delay();
        await this.page.fill('#firstName', name);
    }

    async fillLastName(name) {
        await this.delay();
        await this.page.fill('#lastName', name);
    }

    async fillEmail(email) {
        await this.delay();
        await this.page.fill('#email', email);
    }

    async fillPhone(phone) {
        await this.delay();
        await this.page.fill('#phone', phone);
    }

    async selectProduct(product) {
        await this.delay();
        await this.page.selectOption('#product', product);
    }

    async clickEmailCheckbox() {
        await this.delay();
        await this.page.click('#email-checkbox');
    }

    async fillTextArea(text) {
        await this.delay();
        await this.page.fill('#open-text-area', text);
    }

    async uploadFile(filePath) {
        await this.delay();
        await this.page.setInputFiles('#file-upload', filePath);
    }

    async takeScreenshot(path) {
        await this.delay();
        await this.page.screenshot({ path: path });
    }

    async submitForm() {
        await this.delay();
        await this.page.click('.modern-button');
    }
}

module.exports = CacTatPage;