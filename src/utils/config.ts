import { getProperties } from "@/lib/property";

import { getEnv } from "./env";

let cache: Record<string, any> | undefined;

export const getConfig = () => {
  if (cache) return cache;
  const finalConfig = mergeConfigs();
  cache = finalConfig;
  return finalConfig;
};

// envとProperty Serviceのキーが被る場合、Property Serviceの値を正とする
const mergeConfigs = () => {
  const properties = getProperties();
  const env = getEnv();
  return { ...env, ...properties };
};
