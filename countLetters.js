"use strict";

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (sentence) {
  const results = {};
  // loop over the sentence and get each letter
  for (let letter of sentence) {
    // find if there are any letters which is the same
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  // if the same, count +
  return results;
};

console.log(countLetters("LHL")); //

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }

// for (const item of allItems) {
//   if (itemsToCount[item]) {
//     if (results[item]) {
//       results[item] += 1;
//     } else {
//       results[item] = 1;
//     }
//   }
// }
// return results;
