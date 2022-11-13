# GAS template with clasp and esbuild

## 🎨 Features

- [clasp](https://github.com/google/clasp)
- TypeScript
- [esbuild](https://esbuild.github.io/)
- [ESLint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Try it now

```shell
git clone https://github.com/x7ddf74479jn5/gas-starter
```

または[https://github.com/x7ddf74479jn5/gas-starter](https://github.com/x7ddf74479jn5/gas-starter)をテンプレートにして新規レポジトリを作成。

## ⚒ Usage

### Install clasp CLI if not installed

```shell
npm i -g @google/clasp
clasp login
```

### Config

```shell
mv .clasp.example.json .clasp.json
```

`.clasp.json`の`scriptId`を自身のAppScriptのIDで書き換えてください。  
※ AppScriptのIDはAppScript管理画面のプロジェクト設定から確認できます。  
※ **フォーム**のAppScript IDではなく**スプレッドシート**のAppScript IDです。

```json
{
  "scriptId": "<YOUR_SCRIPT_ID>",
  "rootDir": "./build"
}
```

### 環境変数の設定

#### `.env`に書く場合

`config.property`を`env`に設定

```shell
cp .env.example .env
SLACK_WEBHOOK_URL="https://hooks.slack.com/services/*************************"
```

#### GASのスクリプトプロパティに設定する場合

プロジェクトのダッシュボードから設定しください。  
「プロジェクトの設定」>「スクリプトプロパティの追加」

### スコープの設定

`build/appsscript.json`を編集して使いたいスコープを指定してください。

```json
{
  "timeZone": "Asia/Tokyo",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets.currentonly",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.compose",
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/script.scriptapp",
    "https://www.googleapis.com/auth/forms.currentonly",
    "https://www.googleapis.com/auth/forms",
    "https://www.googleapis.com/auth/script.container.ui"
  ]
}
```

### Template

HtmlServiceのテンプレート機能を使いたい場合は`/static`ディレクトリ下に任意のhtmlファイルを置いてください。  
claspのデフォルトの設定ではpushするファイルの明示的な指定が必要です`.claspignore`に作成したファイル名を追記してください。  
Tailwind CSSのスタイリングを適用するためにテンプレートファイルのhead内で`global.css`を読み込んでください。

### Build

```js
npm run build
```

### Deploy

```js
npm run push
```

### Trigger Setting

GASのダッシュボードからトリガーを設定してください。  
`config.ts`で`trigger`を設定している場合、`main`関数が実行されると自動的に各関数のトリガーが設定されます。  
「エディター」>「`main.gs`」>「プルダウンメニューから`main`関数を選択」>「実行」  
初回実行時はアプリを承認する必要があります。  
「ポップアップ中の詳細をクリック」>「元のページへ戻るをクリック」  
ローカルのターミナルから実行する場合（claspの設定によっては失敗する可能性があります）  

```shell
npm run set-triggers
```

「トリガー」>「トリガーを追加」

| 毎日定時にトリガーを設定 |  |
| - | - |
| 実行する関数を選択 | onScheduleから始まる関数 |
| 実行するデプロイを選択 | HEAD |
| イベントのソースを選択 | 時間主導型 |
| 時間ベースのトリガーのタイプを選択 | 日付ベースのタイマー |
| 時刻を選択 | 任意の時間帯 |

| フォーム送信時にトリガーを設定 |  |
| - | - |
| 実行する関数を選択 | onFormSubmitから始まる関数 |
| 実行するデプロイを選択 | HEAD |
| イベントのソースを選択 | フォームから |
| イベントの種類を選択 | フォーム送信時 |

## Appendix

[> GAS Reference](https://developers.google.com/apps-script/reference/)
