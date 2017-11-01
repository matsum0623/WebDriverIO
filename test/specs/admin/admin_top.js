
describe('admin_top', () => {

  before(() => {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  });

  it('connect by administrator', () => {
    browser.url('http://localhost');
    browser.getTitle().should.be.equal('admin Login');

    browser.setValue('[name="ccode"]',"ccode");
    browser.setValue('[name="tcode"]',"tcode");
    browser.setValue('[name="pwd"]',"pwd");

    browser.click('.btn_login');

    browser.getTitle().should.be.equal('admin Top');

    browser.getText('#company_user*=ID').should.be.equal('ID：管理者');
  });

  describe('check in iframe',() => {

    before(() => {
      browser.url('http://localhost');
      browser.waitForExist('iframe[name="subVIEW"]');
      browser.frame($('iframe[name="subVIEW"]').value);

    });

    it('check alarm list',() => {

      browser.getText('#tr_comment_0_click').should.be.equal('tr_comment_0_click');
    });
  });
});
