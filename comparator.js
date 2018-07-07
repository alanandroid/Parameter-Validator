/**
 * This file comtains comparators used for parameter validation. index.js is the
 * primary point of entry for this application. More information on its use is
 * found in the readme.
 */

/*
 * definedComparator is used in comparisons for this utility. It accepts a
 * single parameter, and returns true only if that parameter is defined.
 */
export function definedComparator(argument) {
  return argument !== undefined;
}

/*
 * notNullComparator is used in comparisons for this utility. It accepts a single
 * parameter, and returns true only if that parameter is a non-null value.
 */
export function notNullComparator(argument) {
 return argument !== null;
}

/*
 * truthyComparator is used in Truthy/Falsey comparisons for this utility. It
 * accepts a single parameter, and returns its truthiness.
 */
export function truthyComparator(argument) {
  return Boolean(argument);
}
