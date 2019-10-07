import { isUndefined } from "util";

// you don't need lodash!

/**
 * Get a random element from provided array
 * @param nary array to pick from
 */
export const sample = <T>(nary: T[]) => nary.length > 0
  ? nary[Math.floor(Math.random() * nary.length)]
  : undefined;

/**
 * Sort Array by some key
 * @param nary array to pick from
 */
export const sortBy = <T>(key: keyof T) => {
  return (a: T, b: T) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
};

/**
 * Group an array of objects by callback derived key
 * @param nary array of type T to group by
 * @param callback return a key to group on
 */
export const groupBy = <T>(nary: T[], callback: (item: T) => string) =>
  nary.reduce((group, item) => {
    const key = callback(item);
    (group[key] || (group[key] = [] as T[])).push(item);
    return group;
  }, {} as { [key: string]: T[] | undefined });

/**
 * Get the sum of all elements in provided array
 * @param nary array to sum
 * @param callback function providing the value from each element in nary
 */
export const sum = <T>(nary: T[], callback: (value: T) => number) =>
  nary.reduce((total, n) => total + callback(n), 0);

export const flatten = <T>(nary: T[][]) => nary.reduce((a, b) => a.concat(b), [] as T[]);

/**
 * Get the sum of all elements in provided array by property key
 * @param nary array to sum
 * @param key key of elements in nary
 */
export const sumBy = <T, K extends keyof T>(nary: T[], key: K) =>
  nary.reduce((total, n) =>
    total + (isNumber(n[key]) ? n[key] as unknown as number : NaN)
  , 0);

export const isLast = (index: number, ary: any[]) => index === ary.length - 1;

const isNumber = (checkable: any): checkable is number => typeof checkable === "number";

export const percentile = (rank: number, size: number) => Math.ceil(100 * ((rank + 1) / size));

// export const uniq = <T>(nary: T[]) => [...new Set(nary)];

export const uniqBy = <T>(nary: T[], callback: (value: T) => number | string): T[] =>
  Object.values(nary.reduce((result, item) => ({ ...result, [callback(item)]: item }), {}));

export const boxToArray = <T extends any>(value: T | T[]) => Array.isArray(value) ? value : [value];

export const whereKeyDefined = <T extends any>(values: T[], key: keyof T) =>
  values.filter(value => !isUndefined(value[key]));

