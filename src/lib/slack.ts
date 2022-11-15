export type SlackAttachment = {
  title: string;
  title_link: string;
  fields: SlackAttachmentField[];
};
export type SlackAttachmentField = {
  title: string;
  value: string;
  short: boolean;
};
export type SlackUser = {
  username: string;
  icon_url?: string;
};
export const postToSlack = (params: {
  channel: string;
  webhookUrl: string;
  user: SlackUser;
  attachments: SlackAttachment[];
}): string => {
  const res = UrlFetchApp.fetch(params.webhookUrl, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    payload: JSON.stringify({
      channel: params.channel,
      username: params.user.username,
      icon_url: params.user.icon_url,
      attachments: params.attachments.length > 0 ? params.attachments : undefined,
    }),
  });
  return res.getContentText();
};
