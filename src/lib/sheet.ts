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

/**
 * シート名とテンプレート名を指定して新規作成、もしくは当てはまる名前のシートを取得。
 *
 * @param {string} sheetName
 * @param {string} [templateName]
 * @return {*}  {GoogleAppsScript.Spreadsheet.Sheet}
 */
export const createSheetIfNotExists = (
  sheetName: string,
  templateName?: string
): GoogleAppsScript.Spreadsheet.Sheet => {
  const spreadsheet = getSpreadsheet();
  const existSheet = spreadsheet.getSheetByName(sheetName);
  const sheet = (() => {
    if (existSheet) return existSheet;
    if (templateName) {
      const template = spreadsheet.getSheetByName(templateName);
      if (template) return spreadsheet.insertSheet(sheetName, { template });
    }
    return spreadsheet.insertSheet(sheetName);
  })();
  return sheet.showSheet();
};

/**
 * 取得したデータをシートの末尾に一括挿入する。
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 */
export const insertRows = (sheet: GoogleAppsScript.Spreadsheet.Sheet) => (data: Record<string, any>[][]) => {
  const lastIndex = sheet.getLastRow();
  const insertRange = sheet.getRange(lastIndex + 1, 1, data.length, Math.max(...data.map((d) => d.length)));
  return insertRange.setValues(data);
};
