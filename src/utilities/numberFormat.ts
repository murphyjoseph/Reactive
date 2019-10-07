import { isNumber, isUndefined } from "util";

const currencyToLocale = {
  "USD": "en-US",
  // if we start supporting other currencies, add them here.
};

/**
 * format number to currency.
 * @param value number to format as currency
 * @param currency currency type locale (ex: USD). defaults to USD.
 */
export const toCurrency = (value: number, currency: keyof typeof currencyToLocale = "USD") => {
  const safeInput = safeNumber(value)!;
  const locale = currencyToLocale[currency];

  return safeInput.toLocaleString(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2
  });
}

export const toPercentage = (input: number, decimals: number = 2, suffix: string = "%") => {
  const safeInput = safeNumber(input)!;
  if (!safeInput || isNaN(safeInput)) return "0.00" + suffix;
  return Math.round(safeInput * Math.pow(10, decimals + 2)) / Math.pow(10, decimals) + suffix
}

export const toDistance = (value: number | string | undefined) => {
  const safeInput = safeNumber(value)!;
  return `${Math.floor(safeInput/12)}' ${safeInput%12}\"`
}

export const safeNumber = (value: number | string | undefined) =>
  isNumber(value) || isUndefined(value)
    ? value
    : parseFloat(value as unknown as string);
