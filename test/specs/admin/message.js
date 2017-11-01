const{ Client } = require('pg');
const conf = require('config');

var chai = require('chai');
chai.Should();

describe('message', () => {
  before(() => {
    // postgreSQLと接続
    let client = new Client(conf.db);

    client.connect((err) => {
      if(err){
        console.error(err.stack);
      }else{
        console.log("connect");
        client.query("TRUNCATE TABLE test.sample;");
        let insert_sql = getInsertMessageSql();
        client.query(insert_sql,['a','b','2017-09-01','test_title','test_body',30],(err,res) => {
          if (err) {
            console.log(err.stack)
          } else {
            console.log("データ登録OK")
          }
          client.end();
        });
      }
    });
  });

  it('transition to message list',()=>{
    browser.waitForExist('iframe[name="subVIEW"]');
    browser.frame($('iframe[name="subVIEW"]').value);

    browser.getText('//*[@id="sub_main"]/div/div/table/tbody/tr/td[1]/span[2]')
      .should.be.equal('トップ > お知らせ一覧');;
  });

  it('view message',() => {
    browser.waitForExist('iframe[name="informVIEW"]');
    browser.frame($('iframe[name="informVIEW"]').value);
    browser.getText('//*[@id="id_inform"]/table[1]/tbody/tr[2]/td[3]/span').should.be.equal('test_title');

    browser.getAttribute('//*[@id="id_inform"]/table[1]/tbody/tr[2]/td[2]/img','src')
      .should.be.equal(conf.weburl + '/sinopsr6/img/top/D-mm.png');

    // メッセージタイトルのクリック
    browser.click('//*[@id="id_inform"]/table[1]/tbody/tr[2]/td[3]/span');
    browser.waitForExist('.cke_wysiwyg_frame');
    browser.frame($('.cke_wysiwyg_frame').value);
    browser.getText('/html/body/p').should.be.equal('test_body');
    browser.saveScreenshot(conf.screenShotPath + '/メッセージ内容の表示.png');

    browser.frameParent();
    browser.click('//*[@id="back"]')
  });

  it('confirm read message',() => {
    browser.frameParent();
    $('//*[@id="id_pre_read"]/select').selectByIndex(2);
    browser.saveScreenshot(conf.screenShotPath + '/既読メッセージ確認.png');
  });
});

function getInsertMessageSql() {
  let sql = "";

  sql += "INSERT INTO test.sample2";
  sql += "(a,b,c,d,e,f)";
  sql += "VALUES";
  sql += " ($1,$2,$3,$4,$5,$6)";
  sql += " RETURNING a";

  return sql;
}