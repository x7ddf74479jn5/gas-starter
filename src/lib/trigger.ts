/**
 * @see https://developers.google.com/apps-script/reference/script/clock-trigger-builder
 * @see https://developers.google.com/apps-script/reference/script/form-trigger-builder
 */

import { getSpreadsheet } from "@/lib/sheet";
import type { TimeBasedEvent } from "@/types";

export const setOnFormSubmitTrigger = (functionName: string) => {
  const sheet = getSpreadsheet();
  ScriptApp.newTrigger(functionName).forSpreadsheet(sheet).onFormSubmit().create();
};

export const setTimeBasedTrigger = (functionName: string, event: TimeBasedEvent) => {
  const { atHour, nearMinute = 0, frequency } = event;
  ScriptApp.newTrigger(functionName)
    .timeBased()
    .atHour(atHour)
    .nearMinute(nearMinute)
    .everyDays(frequency?.interval || 1) // Frequency is required if you are using atHour() or nearMinute()
    .create();
};

export const updateTimeBasedTrigger = (functionName: string, event: TimeBasedEvent) => {
  const { atHour, nearMinute = 0, frequency } = event;
  ScriptApp.getProjectTriggers()
    .filter((_) => _.getHandlerFunction() === functionName)
    .forEach((_) => ScriptApp.deleteTrigger(_));
  ScriptApp.newTrigger(functionName)
    .timeBased()
    .everyDays(frequency?.interval || 1)
    .atHour(atHour)
    .nearMinute(nearMinute)
    .create();
};
