export function registerMenu() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("🎈 Menu").addItem("Settings", "openSettings").addToUi();
}
