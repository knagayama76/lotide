"use strict";

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// Implement the function findKey which takes in an object and a callback.
const findKey = function (object, callback) {
  let result = "";
  let keys = Object.keys(object);
  //console.log(keys);
  for (const key of keys) {
    //console.log(object[key].stars);
    if (callback(object[key])) {
      return (result += key);
    }
  }
  return undefined;
};

//It should scan the object and return the first key for which the callback returns a truthy value.

//If no key is found, then it should return undefined.

// findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); // => "noma"

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);
