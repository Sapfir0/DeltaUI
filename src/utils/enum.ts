
export const getEnumKeys = (enumerable) => Object.keys(enumerable).filter(x => !(parseInt(x) >= 0));

export const getEnumValues = (enumerable) => Object.values(enumerable).filter(x => !(parseInt(x) >= 0));
