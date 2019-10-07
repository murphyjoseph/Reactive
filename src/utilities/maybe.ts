
export type Maybe<T> = {
  map: <R extends any>(f: (wrapped: T) => R) => Maybe<R>;
  flatMap: <R extends any>(f: (wrapped: T) => Maybe<R>) => Maybe<R>;
  done: () => void;
  getOrDefault: (defaultValue: T) => T;
  hasValue: boolean;
  value: T | undefined;
}

const hasValue = <T extends any>(value: T | undefined): value is T => typeof value !== "undefined";

/**
 * wrap a possibly undefined value in a type with helpful
 * functions that allow easier interrogation of the value
 * and chaining dependent calls when value is defined.
 * 
 * allows for safer object navigation with less logical boilerplate.
 * 
 * example:
 * ```
// instead of doing this
const currentUser: IUser | undefined = users.find(user => user.id === window.currentUser.id);
const currentUserAddress: IAddress | undefined = !!currentUser ? currentUser.address : undefined;
const currentUserZip: number | undefined = !!currentUserAddress ? currentUserAddress.zipCode : undefined;

// do this
const currentUserZip: number | undefined = maybe(users.find(user => user.id))
  .map(user => user.address)
  .map(address => address.zipCode)
  .value;
```
 * 
 * @param value a value that is _maybe_ undefined...
 */
export const maybe = <T extends any>(value: T | undefined): Maybe<T> => ({
  map: <R extends any>(f: (wrapped: T) => R) =>
    hasValue(value)
      ? maybe<R>(f(value))
      : maybe<R>(undefined),
  flatMap: <R extends any>(f: (wrapped: T) => Maybe<R>) =>
    hasValue(value)
      ? f(value)
      : maybe<R>(undefined),
  getOrDefault: (defaultValue: T) =>
    hasValue(value)
      ? value
      : defaultValue,
  done: () => {},
  hasValue: hasValue(value),
  value
});
