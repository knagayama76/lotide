"use strict";

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// Comparing identical strings
assertEqual("Bootcamp", "Bootcamp");
// Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");
// Comparing identical numbers
assertEqual(1, 1);
// Comparing non-identical numbers
assertEqual(1, 3);
