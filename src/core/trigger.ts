/**
 * @see https://developers.google.com/apps-script/reference/script/clock-trigger-builder
 * @see https://developers.google.com/apps-script/reference/script/form-trigger-builder
 */

import { getSpreadsheet } from "@/lib/sheet";
import type { TimeBasedEvent } from "@/types";

const setOnFormSubmitTrigger = (fn: string) => {
  const sheet = getSpreadsheet();
  ScriptApp.newTrigger(fn).forSpreadsheet(sheet).onFormSubmit().create();
};

const setTimeBasedTrigger = (fn: string, event: TimeBasedEvent) => {
  const { atHour, nearMinute = 0, frequency } = event;
  ScriptApp.newTrigger(fn)
    .timeBased()
    .atHour(atHour)
    .nearMinute(nearMinute)
    .everyDays(frequency?.interval || 1) // Frequency is required if you are using atHour() or nearMinute()
    .create();
};

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
