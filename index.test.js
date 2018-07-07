/**
 * Tests. What did you expect?
 */
import {
  allParametersDefined,
  allParametersDefinedAndNotNull,
  allParametersTruthy } from './index';


describe('tests for allParametersDefined', () => {

  beforeAll(() => {
    function noParameterFunction() {
      return allParametersDefined();
    }
    function oneParameterFunction(paramOne) {
      return allParametersDefined();
    }
    function twoParameterFunction(paramOne, paramTwo) {
      return allParametersDefined();
    }
  });

  afterAll(() => {
  });

  test("returns true for a function without named parameters with no parameters passed in.", () => {
    let validationResult = noParameterFunction();
    expect(validationResult).toBe(true);
  });

  test("returns true for a function without named parameters with parameters passed in.", () => {
    let validationResult = noParameterFunction(null, 0, false, undefined);
    expect(validationResult).toBe(true);
  });

  test("returns true for a function with one named parameter with a defined parameter.", () => {
    let validationResult = oneParameterFunction(null);
    expect(validationResult).toBe(true);
  });

  test("returns true for a function with one named parameter with multiple parameters pased in, so long as the first is defined.", () => {
    let validationResult = oneParameterFunction(null, 0, false, undefined);
    expect(validationResult).toBe(true);
  });

});
