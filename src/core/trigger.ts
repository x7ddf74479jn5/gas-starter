import { setOnFormSubmitTrigger, setTimeBasedTrigger } from "@/lib/trigger";

export const resetTriggers = () => {
  const triggers = ScriptApp.getProjectTriggers();
  if (triggers.length === 0) return;
  for (let i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
};

export const setTriggers = () => {
  setOnFormSubmitTrigger("greeting");
  setTimeBasedTrigger("greeting", { atHour: 9 });
};
