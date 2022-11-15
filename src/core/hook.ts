import { createDialogFromTemplate } from "@/lib/html";
import { savePropertiesFromForm, useProperty } from "@/lib/property";
import { createMenu } from "@/lib/ui";

const registerMenu = () => {
  const properties = useProperty();
  createDialogFromTemplate({ template: "settings", title: "Settings", width: 500, height: 400 }, properties.getAll());
};

const menuItems = [{ label: "プロパティ設定", functionName: "openSettings" }];

export const onOpen = () => {
  createMenu({
    items: menuItems,
  });
};

// NOTE: main.ts内でグローバル関数として露出させる
export { registerMenu, savePropertiesFromForm };
