/* Spreadsheet */

let spreadSheetCache: GoogleAppsScript.Spreadsheet.Spreadsheet;

export const getSpreadsheet = () => {
  if (spreadSheetCache) return spreadSheetCache;
  spreadSheetCache = SpreadsheetApp.getActiveSpreadsheet();
  return spreadSheetCache;
};

let sheetCache: GoogleAppsScript.Spreadsheet.Sheet;

export const getActiveSheet = () => {
  if (sheetCache) return sheetCache;
  sheetCache = getSpreadsheet().getActiveSheet();
  if (!sheetCache) {
    throw new Error("スプレッドシートのシートが見つかりませんでした。");
  }

  return sheetCache;
};

export const getSheetData = (sheet: GoogleAppsScript.Spreadsheet.Sheet) => {
  const sheetData = sheet.getDataRange().getValues() as string[][];
  return sheetData;
};

/* Form */

let formCache: GoogleAppsScript.Forms.Form;

export const getFormByUrl = (url: string) => {
  if (formCache) {
    return formCache;
  }

  formCache = FormApp.openByUrl(url);

  return formCache;
};

export const getForm = () => {
  if (formCache) {
    return formCache;
  }

  const spreadSheet = getSpreadsheet();
  const _formUrl = spreadSheet.getActiveSheet().getFormUrl();

  if (!_formUrl) {
    throw new Error("紐付けられたフォームが見つかりませんでした。");
  }

  const form = getFormByUrl(_formUrl);

  return form;
};

/* Util */

export type Urls = {
  spreadSheetUrl: string;
  formUrls: {
    summaryUrl: string;
    editUrl: string;
    viewUrl: string;
  };
};

export const getUrls = (): Urls => {
  const spreadSheet = getSpreadsheet();
  const spreadSheetUrl = spreadSheet.getUrl();
  const form = getForm();
  const summaryUrl = form.shortenFormUrl(form.getSummaryUrl());
  const viewUrl = form.shortenFormUrl(form.getPublishedUrl());
  const editUrl = form.shortenFormUrl(form.getEditUrl());
  const formUrls = { summaryUrl, viewUrl, editUrl };
  return { spreadSheetUrl, formUrls };
};
