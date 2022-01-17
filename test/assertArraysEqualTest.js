"use strict";

const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", 4, "3"], ["5", "2", "3"]);
