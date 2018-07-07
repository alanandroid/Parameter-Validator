/**
 * This file represents the entrypoint into our parameter validation utility.
 * For detailed information on the use of this tool, please consult the readme.
 */

import { definedComparator, notNullComparator, truthyComparator } from './comparator';
import { validateFunctionArguments } from './utility';

/*
 * This function validates that all the named parameters for a function are
 * not undefined.
 */
export function allParametersDefined(func = allParametersDefined.caller) {
  return validateFunctionArguments(
    func,
    definedComparator,
    {
      errorMessage: `${func.name} requires that all of its parameters are defined`
    }
  );
}

/*
 * This function validates that all the named parameters for a function are
 * neither undefined nor null.
 */
export function allParametersDefinedAndNotNull(func = allParametersDefinedAndNotNull.caller) {

  allParametersDefined(func);

  return validateFunctionArguments(
    func,
    notNullComparator,
    {
      errorMessage: `${func.name} requires that all of its parameters are non-null`
    }
  );
}

/*
 * This function validates that all the named parameters for a function are
 * truthy.
 */
export function allParametersTruthy(func = allParametersTruthy.caller) {
  return validateFunctionArguments(
    func,
    truthyComparator,
    {
      errorMessage: `${func.name} requires that all of its parameters are truthy`
    }
  );
}

/*
 * Alias for allParametersDefined
 */
export function noParametersUndefined(func = noParametersUndefined.caller) {
  return allParametersDefined(func);
}

/*
 * Alias for allParametersDefinedAndNotNull
 */
export function noParametersUndefinedOrNull(func = noParametersUndefinedOrNull.caller) {
  return allParametersDefinedAndNotNull(func);
}

/*
 * Alias for allParametersTruthy
 */
export function noParametersFalsy(func = noParametersFalsy.caller) {
  return allParametersTruthy(func);
}
