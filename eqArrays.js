"use strict";

const eqArrays = function (values1, values2) {
  for (let i = 0; i < values1.length; i++)
    for (let j = 0; j < values2.length; j++) {
      if (values1[i] === values2[j]) {
        return true;
      } else {
        return false;
      }
    }
};

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// loop value
// compare 2 values and see if 2 values are exactly the same
// return result -> true or false

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
