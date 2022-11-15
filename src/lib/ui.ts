export type MenuParam = { title?: string; items: MenuListItem[] };
export type MenuItemParam = { label: string; functionName: string };
export type MenuListItem = MenuParam | MenuItemParam;

const isMenuItem = (value: unknown): value is MenuItemParam => {
  return typeof value === "object" && !!value && "label" in value && "functionName" in value;
};

export const createMenu = (
  { title = "カスタムメニュー", items }: MenuParam,
  ui: GoogleAppsScript.Base.Ui = SpreadsheetApp.getUi()
): GoogleAppsScript.Base.Menu => {
  const menu = items.reduce((m, item) => {
    return isMenuItem(item) ? m.addItem(item.label, item.functionName) : m.addSubMenu(createMenu(item, ui));
  }, ui.createMenu(title));
  menu.addToUi();
  return menu;
};

// Usage
// const onOpen = () => {
//   createMenu({
//     items: [
//       { label: '実行する', functionName: 'myFunction1' },
//       { title: 'サブメニュー', items: [{ label: '実行する', functionName: 'myFunction2' }] }
//     ]
//   })
// }
