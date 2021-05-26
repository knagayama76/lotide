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

const assertArraysEqual = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++)
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      } else {
        return false;
      }
    }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
