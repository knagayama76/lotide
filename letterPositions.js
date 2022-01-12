"use strict";

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Imprelent assertArraysEqual which will take two arrays
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function (sentence) {
  const results = {};
  const arr = sentence.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") continue;

    if (!results[arr[i]]) {
      results[arr[i]] = [i];
    } else {
      results[arr[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);
