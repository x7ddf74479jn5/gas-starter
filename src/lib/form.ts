// NOTE: Formにバインドされたスクリプトでのみ使用可能

type FormSubmitEvent = {
  authMode: GoogleAppsScript.Script.AuthMode;
  response: GoogleAppsScript.Forms.FormResponse;
  source: GoogleAppsScript.Forms.Form;
  triggerUid: string;
};
export const onSubmit = (event: FormSubmitEvent) => {
  const sender = event.response.getRespondentEmail();
  const itemResponses = event.response.getItemResponses();
  const qAndA = itemResponses.map((r) => ({
    question: r.getItem().getTitle(),
    answer: r.getResponse().toString(),
  }));
};
