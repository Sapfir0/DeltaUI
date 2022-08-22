
export const getEnumKeys = (enumerable: Record<string, string>) =>
  Object.keys(enumerable).filter((x) => !(parseInt(x) >= 0));

export const getEnumValues = (enumerable: Record<string, string>) =>
  Object.values(enumerable).filter((x) => !(parseInt(x) >= 0));
