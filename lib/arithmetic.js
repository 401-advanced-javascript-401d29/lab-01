'use strict'

const arithmetic = module.exports = {};
const doMath = require("arithmetic");

// SOURCE OF NPM ARITHMETIC - https://www.npmjs.com/package/arithmetic

arithmetic.add = (array) => {
    return doMath.sum(array);
};

arithmetic.subtract = (array) => {
    return doMath.difference(array);
};

arithmetic.multiply = (array) => {
    return doMath.product(array);
};

arithmetic.divide = (array) => {
    return doMath.quotient(array);
};
