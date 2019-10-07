
/**
 * force value to be negative.
 * @param value negative absolute value of value
 */
export const neg = (value: number) => -1 * Math.abs(value);

export const roundTo = (value: number, power=2) => {
  return (Math.round(value * Math.pow(10, power)) / Math.pow(10, power));
}