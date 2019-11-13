// Still work in progress...
export const optionalAttribute = (binding: any, bindingValue: any) => {
  return {...(!!binding ? {bindingValue}: {})}
}