import { resetTriggers, setTriggers } from "@/core/trigger";
import { registerMenu } from "@/core/ui";

const greeting = () => {
  Logger.log("Hello World");
};

// @ts-expect-error
(global as any).greeting = greeting;

const main = () => {
  resetTriggers();
  setTriggers();
};

const onOpen = () => {
  registerMenu();
};

// @ts-expect-error
(global as any).main = main;
// @ts-expect-error
(global as any).onOpen = onOpen;
// @ts-expect-error
(global as any).resetTriggers = resetTriggers;
