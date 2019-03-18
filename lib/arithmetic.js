'use strict';

const arithmetic = module.exports = {};
const doMath = require('arithmetic');

// SOURCE OF NPM ARITHMETIC - https://www.npmjs.com/package/arithmetic

let add = (array) => {
  return doMath.sum(array);
};
arithmetic.add = add;

arithmetic.subtract = (array) => {
  return doMath.difference(array);
};

arithmetic.multiply = (array) => {
  return doMath.product(array);
};

arithmetic.divide = (array) => {
  return doMath.quotient(array);
};
