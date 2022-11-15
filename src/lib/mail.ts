type MailParams = { to: string; subject: string; body: string; cc?: string };

export const sendMail = ({ to, subject, body, cc }: MailParams) => {
  const recipient = normalizeRecipient(to);
  GmailApp.sendEmail(recipient, subject, body, {
    cc,
    noReply: true,
  });
};

export const createMailDraft = ({ to, subject, body, cc }: MailParams): GoogleAppsScript.Gmail.GmailDraft => {
  const recipient = normalizeRecipient(to);
  return GmailApp.createDraft(recipient, subject, body, {
    cc,
    noReply: true,
  });
};

const normalizeRecipient = (to: string | string[]): string => {
  return Array.isArray(to) ? to.join(",") : to;
};
