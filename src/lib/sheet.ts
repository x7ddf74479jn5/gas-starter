let ssCache: GoogleAppsScript.Spreadsheet.Spreadsheet;

export const getSpreadsheet = () => {
  if (ssCache) return ssCache;
  ssCache = SpreadsheetApp.getActiveSpreadsheet();
  return ssCache;
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

export const getEndRow = getActiveSheet().getLastRow() - 1;
