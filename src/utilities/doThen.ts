
/**
 * use this when promise then chaining when you need to run a function that returns void
 * @param f function to execute
 */
export const doThen = <T extends any>(f: (arg: T) => void) => (arg: T) => {
  f(arg);
  return arg;
};