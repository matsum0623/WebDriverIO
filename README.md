# WebDriver

R6のWEB側のテストの自動化ツール。
- ○○というテキストがページにあること
- リンクが機能していること
- DB登録データが出ていること

等が検証できる。
画面のスクリーンショットも取得可能


## 環境構築
以下の手順で、テスト用環境を構築する

### 1. node、npmのインストール

以下のサイトよりnodejsのLTS版をダウンロードする。
[nodejs](https://nodejs.org/en/)

以下のコマンドでバージョンが表示されればOK

```bash
$ node -v
$ npm -v
```

### 2. Chromeのインストール

[本家](https://www.google.com/chrome/browser/desktop/index.html)からダウンロードしてインストール
※新しいバージョンが出ると途端にテストが動かなくなることがある。ご愛嬌。

### 3. リポジトリのクローン

このリポジトリをクローン

### 4. 依存モジュールのインストール

クローンしたリポジトリをカレントとして、以下のコマンドを実行
```bash
npm install
```

## テストの実行

### WEB自動テストの実行

クローンしたリポジトリをカレントとして、以下のコマンドを実行
```bash
npm test
```

## テストについて

テストは`test/specs`フォルダ内のファイルが全て実行される。

テストの書き方は[http://webdriver.io/](http://webdriver.io/)か下記のQiitaを参考に


## Tips

[Qiita](http://qiita.com/matsum0623/items/126691d0b756592e514f)にまとめていっている


## TODO