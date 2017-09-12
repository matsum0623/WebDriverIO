const{ Client } = require('pg');

describe('webdriver.io ページ', () => {

  let client;

  before(() => {
    // postgreSQLと接続
    client = new Client({
      user      : 'postgres',
      database  : 'SINOPS-R6',
      port      : '5436',
      host      : '172.17.6.240',
      password : 'admin'
    });
    
    client.connect((err) => {
      if(err){
        console.error(err.stack);
      }else{
        console.log("connect");
        client.query("UPDATE admin_tool.tantou SET pwd = 'sinops' WHERE tantoucd = 'link'");
      }
    });
    
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
    
  });

  it('R6接続', () => {
    browser.timeouts('script', 60000);
    browser.url('http://172.17.6.240');
    browser.getTitle().should.be.equal('SINOPS-R6');
    
    browser.setValue('[name="ccode"]',"link");
    browser.setValue('[name="tcode"]',"link");
    browser.setValue('[name="pwd"]',"sinops");
    
    browser.click('.btn_login');
    
    browser.getTitle().should.be.equal('SINOPS-R6');
  });
    
  it('jar実行してみる', () => {
    console.log('bbbbbbbbbbbbb');
  });
    
  it('postgresqlとの接続', () => {
      
    let ccode = '';
    let tantoucd = '';
    let pwd = '';
    const sql = 'SELECT * FROM admin_tool.tantou WHERE authority = 0';

    // Promiseで実行（非同期）
    client.query(sql).then((res) =>{
      ccode    = res.rows[0].ccode;
      tantoucd = res.rows[0].tantoucd;
      pwd      = res.rows[0].pwd;
    }).catch((err) => {
      console.log(err.stack);
    }).then(() => {
      console.log('ccode/'+ ccode + ';tantoucd/'+tantoucd+';pwd/'+pwd);
    });
  });
  
});
