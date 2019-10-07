import _isFunction from 'lodash/isFunction'
import _merge from 'lodash/merge';

export const checkIsArray = (thing: any) => {
  if (Array.isArray(thing)) return true
}

export const checkIsObject = (thing: any) => {
  if (thing instanceof Object) return true
}

// This is a recursive function to try and get around deep cloning. Still a work in progress.
export const setBindings = (iteratee: any, newObj: any) => {

  for (let key of Object.keys(iteratee)) {
    if (checkIsArray(iteratee[key])) {
      if (!newObj[key]) newObj[key] = []
      newObj[key] = setBindings(iteratee[key], newObj[key])
    } else if (checkIsObject(iteratee[key]) && !_isFunction(iteratee[key])) {
      if (!newObj[key]) newObj[key] = {}
      newObj[key] = setBindings(iteratee[key], newObj[key])
    } else {
      newObj[key] = iteratee[key]
    }
  }

  return newObj
}

export const createNewBindings = (baselineOptions: any, passedOptions: any) => {
  // let defaultObj: any = {}
  // let newObj: any = {}
  // defaultObj = setBindings(baselineOptions, defaultObj)
  // console.log("Default")
  // console.log(defaultObj)
  // newObj = setBindings(passedOptions, defaultObj)
  // console.log("New")
  // console.log(newObj)
  // return newObj
  return _merge(baselineOptions, passedOptions);
}