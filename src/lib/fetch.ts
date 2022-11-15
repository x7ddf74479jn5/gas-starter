export const fetch = (url: string, accessToken: string) => {
  const res: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = JSON.parse(res.getContentText());
  const headers = res.getHeaders();
  return {
    headers,
    data,
  };
};
