export function createDialogFromTemplate(
  { template, title, width, height }: { template: string; title: string; width: number; height: number },
  props?: Record<string, string>
) {
  const _template = HtmlService.createTemplateFromFile(template);
  if (props) _template.props = props;
  const html = _template.evaluate().setWidth(width).setHeight(height);
  SpreadsheetApp.getUi().showModalDialog(html, title);
}
