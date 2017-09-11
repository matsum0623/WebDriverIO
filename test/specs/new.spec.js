var assert = require('assert');
describe('webdriver.io ページ', () => {
    it('タイトル確認 - the fancy generator way', () => {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
    
    it('R6接続', () => {
        browser.url('http://172.17.6.240');
        var title = browser.getTitle();
        assert.equal(title, 'SINOPS-R6');
    });
});