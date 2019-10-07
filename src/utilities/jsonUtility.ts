import _camelCase from "lodash/camelCase";
import _snakeCase from "lodash/snakeCase";

// https://stackoverflow.com/questions/5480570/json-stringify-change-the-case-of-the-key/5480605#5480605
export const parseJsonResponsetoCamelCase = (rawResponse: string) => {
  return JSON.parse(rawResponse, function (_key, value) {
    if (value && typeof value === "object") {
      for (let subKey in value) {
        if (Object.hasOwnProperty.call(value, subKey)) {
          const camelKey = _camelCase(subKey);
          if (subKey !== camelKey) {
            // key swap
            value[camelKey] = value[subKey];
            delete value[subKey];
          }
        }
      }
    }
    return value;
  });
};

export const stringifyObjectToSnakeCase = (toTranslate: any) => {
  return JSON.stringify(toTranslate, (_key, value) => {
    if (!!value && typeof value === "object") {
      const replacement: any = {};
      for (let subKey in value) {
        if (Object.hasOwnProperty.call(value, subKey)) {
          replacement[_snakeCase(subKey)] = value[subKey];
        }
      }
      return replacement;
    }
    return value;
  });
}