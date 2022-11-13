export const getProperties = () => {
  const scriptProperties = PropertiesService.getScriptProperties();
  return scriptProperties.getProperties();
};

export function openSettings() {
  const template = HtmlService.createTemplateFromFile("settings");
  template.settings = getProperties();
  const html = template.evaluate().setWidth(500).setHeight(400);
  SpreadsheetApp.getUi().showModalDialog(html, "Settings");
}

export function saveProperties(formObj: Record<string, string>) {
  const scriptProperties = PropertiesService.getScriptProperties();
  const { example } = formObj;
  scriptProperties.setProperties({
    EXAMPLE: example,
  });
}

export function registerMenu() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("🎈 Menu").addItem("Settings", "openSettings").addToUi();
}
