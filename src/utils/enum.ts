
export const getEnumKeys = (enumerable) => Object.keys(enumerable).filter(x => !(parseInt(x) >= 0));

export const getEnumValues = <T>(enumerable) => Object.values<T>(enumerable).filter( (x: any) => !(parseInt(x) >= 0));
