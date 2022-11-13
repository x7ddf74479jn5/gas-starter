import { Hook, Trigger } from "./core";

const greeting = () => {
  Logger.log("Hello World");
};

const main = () => {
  Trigger.resetTriggers();
  Trigger.setTriggers();
};

/**
 * Note: GAS側で関数を使うにはglobalに露出させる必要がある。
 * esbuild-gas-pluginで置換するとき`global[key] = module`にすると**key**という関数名で置換されてしまう。
 * 必ず以下のように関数名を愚直に列挙する
 */

// @ts-expect-error
global.greeting = greeting;
// @ts-expect-error
global.main = main;
// @ts-expect-error
global.onOpen = Hook.onOpen;
// @ts-expect-error
global.openSettings = Hook.openSettings;
// @ts-expect-error
global.resetTriggers = Trigger.resetTriggers;
