import { openSettings, registerMenu, saveProperties } from "@/lib/property";

export const onOpen = () => {
  registerMenu();
};

// NOTE: main.ts内でグローバル関数として露出させる
export { openSettings, saveProperties };
