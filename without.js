"use strict";

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) return true;
  }
};

// Imprelent assertArraysEqual which will take two arrays
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function take in source array and itemsToRemove array
// return a new array with only elements from source that are not present in the itemsToRemove array
const without = function (source, itemsToRemove) {
  const output = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        output.push(source[i]);
      }
    }
  }
  console.log(output);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
