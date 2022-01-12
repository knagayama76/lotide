"use strict";

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (str) {
  const results = {};
  const splittedStr = str.split("");
  console.log(splittedStr);

  for (const letter of splittedStr) {
    if (!letter.trim()) continue;

    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));
