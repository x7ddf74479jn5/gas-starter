export function savePropertiesFromForm(formObj: Record<string, string>) {
  const { setMany } = useProperty();
  setMany(formObj);
}

export const useProperty = (prop: GoogleAppsScript.Properties.Properties = PropertiesService.getScriptProperties()) => {
  return {
    set: (key: string, value: string) => prop.setProperty(key, value),
    setMany: (obj: Record<string, string>) => prop.setProperties(obj),
    get: (key: string) => prop.getProperty(key),
    getAll: () => prop.getProperties(),
    delete: (key: string) => prop.deleteProperty(key),
  };
};

// Usage
// const prop = properties();
// prop.set("EXAMPLE_KEY", "hoge");
// prop.get("EXAMPLE_KEY"); // => 'hoge'
// prop.delete("EXAMPLE_KEY");
