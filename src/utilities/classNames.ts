/**
 * join classnames (by <space> character) in order provided.
 * @param args classnames to join
 */
export const classNames = (...args: (string | undefined)[]) => !!args ? args.join(" ") : "";

// what is this, bash?
// mimic https://github.com/JedWatson/classnames without unnecessary junk
const cat = classNames;
export default cat;