# GAS template with clasp and esbuild

## ð¨ Features

- [clasp](https://github.com/google/clasp)
- TypeScript
- [esbuild](https://esbuild.github.io/)
- [ESLint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [Tailwind CSS](https://tailwindcss.com/)

## ð Try it now

```shell
git clone https://github.com/x7ddf74479jn5/gas-starter
```

ã¾ãã¯[https://github.com/x7ddf74479jn5/gas-starter](https://github.com/x7ddf74479jn5/gas-starter)ããã³ãã¬ã¼ãã«ãã¦æ°è¦ã¬ãã¸ããªãä½æã

## â Usage

### Install clasp CLI if not installed

```shell
npm i -g @google/clasp
clasp login
```

### Config

```shell
mv .clasp.example.json .clasp.json
```

`.clasp.json`ã®`scriptId`ãèªèº«ã®AppScriptã®IDã§æ¸ãæãã¦ãã ããã  
â» AppScriptã®IDã¯AppScriptç®¡çç»é¢ã®ãã­ã¸ã§ã¯ãè¨­å®ããç¢ºèªã§ãã¾ãã  
â» **ãã©ã¼ã **ã®AppScript IDã§ã¯ãªã**ã¹ãã¬ããã·ã¼ã**ã®AppScript IDã§ãã

```json
{
  "scriptId": "<YOUR_SCRIPT_ID>",
  "rootDir": "./build"
}
```

### ç°å¢å¤æ°ã®è¨­å®

#### `.env`ã«æ¸ãå ´å

`config.property`ã`env`ã«è¨­å®

```shell
cp .env.example .env
SLACK_WEBHOOK_URL="https://hooks.slack.com/services/*************************"
```

#### GASã®ã¹ã¯ãªãããã­ããã£ã«è¨­å®ããå ´å

ãã­ã¸ã§ã¯ãã®ããã·ã¥ãã¼ãããè¨­å®ããã ããã  
ããã­ã¸ã§ã¯ãã®è¨­å®ã>ãã¹ã¯ãªãããã­ããã£ã®è¿½å ã

### ã¹ã³ã¼ãã®è¨­å®

`static/appsscript.json`ãç·¨éãã¦ä½¿ãããã¹ã³ã¼ããæå®ãã¦ãã ããã

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

HtmlServiceã®ãã³ãã¬ã¼ãæ©è½ãä½¿ãããå ´åã¯`/static`ãã£ã¬ã¯ããªä¸ã«ä»»æã®htmlãã¡ã¤ã«ãç½®ãã¦ãã ããã  
claspã®ããã©ã«ãã®è¨­å®ã§ã¯pushãããã¡ã¤ã«ã®æç¤ºçãªæå®ãå¿è¦ã§ã`.claspignore`ã«ä½æãããã¡ã¤ã«åãè¿½è¨ãã¦ãã ããã  
Tailwind CSSã®ã¹ã¿ã¤ãªã³ã°ãé©ç¨ããããã«ãã³ãã¬ã¼ããã¡ã¤ã«ã®headåã§`global.css`ãèª­ã¿è¾¼ãã§ãã ããã

### Build

```js
npm run build
```

### Deploy

```js
npm run push
```

### Trigger Setting

GASã®ããã·ã¥ãã¼ãããããªã¬ã¼ãè¨­å®ãã¦ãã ããã  
`config.ts`ã§`trigger`ãè¨­å®ãã¦ããå ´åã`main`é¢æ°ãå®è¡ãããã¨èªåçã«åé¢æ°ã®ããªã¬ã¼ãè¨­å®ããã¾ãã  
ãã¨ãã£ã¿ã¼ã>ã`main.gs`ã>ããã«ãã¦ã³ã¡ãã¥ã¼ãã`main`é¢æ°ãé¸æã>ãå®è¡ã  
ååå®è¡æã¯ã¢ããªãæ¿èªããå¿è¦ãããã¾ãã  
ããããã¢ããä¸­ã®è©³ç´°ãã¯ãªãã¯ã>ãåã®ãã¼ã¸ã¸æ»ããã¯ãªãã¯ã  
ã­ã¼ã«ã«ã®ã¿ã¼ããã«ããå®è¡ããå ´åï¼claspã®è¨­å®ã«ãã£ã¦ã¯å¤±æããå¯è½æ§ãããã¾ãï¼  

```shell
npm run set-triggers
```

ãããªã¬ã¼ã>ãããªã¬ã¼ãè¿½å ã

| æ¯æ¥å®æã«ããªã¬ã¼ãè¨­å® |  |
| - | - |
| å®è¡ããé¢æ°ãé¸æ | onScheduleããå§ã¾ãé¢æ° |
| å®è¡ããããã­ã¤ãé¸æ | HEAD |
| ã¤ãã³ãã®ã½ã¼ã¹ãé¸æ | æéä¸»å°å |
| æéãã¼ã¹ã®ããªã¬ã¼ã®ã¿ã¤ããé¸æ | æ¥ä»ãã¼ã¹ã®ã¿ã¤ãã¼ |
| æå»ãé¸æ | ä»»æã®æéå¸¯ |

| ãã©ã¼ã éä¿¡æã«ããªã¬ã¼ãè¨­å® |  |
| - | - |
| å®è¡ããé¢æ°ãé¸æ | onFormSubmitããå§ã¾ãé¢æ° |
| å®è¡ããããã­ã¤ãé¸æ | HEAD |
| ã¤ãã³ãã®ã½ã¼ã¹ãé¸æ | ãã©ã¼ã ãã |
| ã¤ãã³ãã®ç¨®é¡ãé¸æ | ãã©ã¼ã éä¿¡æ |

## Appendix

[> GAS Reference](https://developers.google.com/apps-script/reference/)
