'use strict';

const arithmetic = module.exports = {};

let math = (array, operator) => {
  switch (operator) {
  case '+': {
    let newSum = 0;
    for(let i in array){
      newSum += array[i];
    }
    return newSum;
  }
  case '-': {
    let newDifference = array[0];
    for(let i = 1 ; i < array.length ; i++){
      newDifference -= array[i];
    }
    return newDifference;
  }
  case '*': {
    let newProduct = array[0];
    for (let i = 1 ; i < array.length ; i++){
      newProduct *= array[i];
    }
    return newProduct;
  }
  case '/': {
    let newQuotient = array[0];
    for(let i = 1 ; i < array.length ; i++){
      newQuotient /= array[i];
    }
    return newQuotient;
  }
  default:
    return null;
  }
};

arithmetic.add = (array) => {
  return math(array, '+');
};

arithmetic.subtract = (array) => {
  return math(array, '-');
};

arithmetic.multiply = (array) => {
  return math(array, '*');
};

arithmetic.divide = (array) => {
  return math(array, '/');
};
