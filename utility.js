/**
 * This file contains utility functions to facilitate parameter validation.
 * index.js is the primary point of entry for this application. More information
 * on its use is found in the readme.
 */

/*
 * validateFunctionArguments validates that a function, func (passed in as the
 * first parameter), has no arguments which return true from a comparison
 * function (the second parameter). In the case that the comparison fails, an
 * error is thrown.
 *
 * An options object can be passed in as an optional third parameter, with the
 * following schema:
 * {
 *   errorMessage: a message to pass through the aforementioned error.
 * }
 */
export function validateFunctionArguments(func, comparator, { errorMessage = `Parameter validation failed for function '${func.name}'` } = {}) {
  // pull relevant function data
  const expectedParameterLength = func.length;
  const functionName = func.name;
  const args = Array.from(func.arguments);

  /* if the function has no declared parameters, or we're not within a
   * function's scope, return true.
   */
  if (!expectedParameterLength) {
    return true;
  }

  for (let i = 0; i < expectedParameterLength; i++) {
    const argument = args[i];
    const passesValidation = comparator(argument);
    if (!passesValidation) {
      throw new Error (errorMessage);
    }
  }

  return true;
}
