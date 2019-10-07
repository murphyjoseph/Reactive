import isEqual from "lodash/isEqual";

/**
 * 
 * @param value object to pick values from
 * @param properties select provided properties from value into new object. great
 *    for taking a subset of properties in props to pass into a child component
 *    or for flattening objects to pass as props
 */
export const pick = <T extends {}, P extends keyof T>(value: T, ...properties: P[]): Pick<T, P> =>
  properties.reduce((result, property) =>
    ({ ...result, [property]: value[property] }),
  {} as any); // there's probably a better type here but this type is not exposed. result is Pick<T, P>.

export const pickIsEqual = <T extends {}, P extends keyof T>(left: T, right: T, ...properties: P[]): boolean =>
  isEqual(pick(left, ...properties), pick(right, ...properties));