import * as _ from "lodash";

export const configureKlassNames = (klassArray: string[] | string) => {
  let newKlassArray = new Map();
  _.each(klassArray, function (value, key) {
    let updatedValue: string | boolean = formatKlasses(value);
    // TODO - below could be handled more elegangtly.
    if (updatedValue === "True") {
      updatedValue = true
    } else if (updatedValue === "False") {
      updatedValue = false
    }
    newKlassArray.set(key, updatedValue);
  });
  return newKlassArray
}

export const formatKlasses = (val: any) => {
  let nuVal = _.chain(val).camelCase().capitalize().value();
  _.chain(nuVal).camelCase().capitalize();
  return nuVal
}