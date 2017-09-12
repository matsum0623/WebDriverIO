const{ Client } = require('pg');

describe('webdriver.io ページ', () => {

  let client;

  before(() => {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  });

  it('R6接続', () => {
    browser.url('http://172.17.6.240');
    browser.getTitle().should.be.equal('SINOPS-R6');
    
    browser.setValue('[name="ccode"]',"link");
    browser.setValue('[name="tcode"]',"link");
    browser.setValue('[name="pwd"]',"sinops");
    
    browser.click('.btn_login');
    
    browser.getTitle().should.be.equal('SINOSINO');
  });
});
