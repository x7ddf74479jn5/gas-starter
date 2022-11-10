import { getConfig } from "@/utils/config";

export const sendMail = ({
  body,
  mailingList,
  subject,
  sendBy,
}: {
  body: string;
  mailingList: Array<string> | string;
  subject: string;
  sendBy?: string;
}) => {
  // e.g. foo@example.com,bar@example.com
  const recipient = Array.isArray(mailingList) ? mailingList.join(",") : mailingList;

  const draft = GmailApp.createDraft(recipient, subject, body, {
    name: sendBy,
  });

  draft.send();
};

export const sendSlack = (body: string) => {
  const {
    slack: { SLACK_WEBHOOK_URL },
  } = getConfig();

  const jsonData = { text: body };
  const payload = JSON.stringify(jsonData);

  const response = UrlFetchApp.fetch(SLACK_WEBHOOK_URL, {
    method: "post",
    contentType: "application/json",
    payload,
  });

  if (response.getResponseCode() !== 200) {
    Logger.log(response.getContentText());
  }
};
