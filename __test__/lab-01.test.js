'use strict';


// DEPENDENCIES
const greet = require('../lib/greet');
const faker = require('faker');
const arithmetic = require('../lib/arithmetic');

// PREVENT DIVISION BY ZERO
let noZero = () => {
  let randomNum = faker.random.number();
  if(randomNum === 0) {
    return randomNum + 1;
  } else return randomNum;
};

// FUNCTION TO PASS IN OPERATORS AND LOOP THROUGH ARRAY - THIS IS ESSENTIALLY AN IF/ELSE STATEMENT THAT GETS AN ARRAY AND A MATH OPERATOR
let math = (array, operator) => {
  switch (operator) {
  case '+':
    let newSum = 0;
    for(let i in array){
      newSum += array[i];
    }
    return newSum;
  case '-':
    let newDifference = array[0];
    for(let i = 1 ; i < array.length ; i++){
      newDifference -= array[i];
    }
    return newDifference;
  case '*':
    let newProduct = array[0];
    for (let i = 1 ; i < array.length ; i++){
      newProduct *= array[i];
    }
    return newProduct;
  case '/':
    let newQuotient = array[0];
    for(let i = 1 ; i < array.length ; i++){
      newQuotient /= array[i];
    }
    return newQuotient;
  default:
    return null;

  }
};

// TESTS
describe('#lab-01.test.js', () => {
    
  // GREET MODULE
  test('Should return null if value is not a string', () => {
    const greetMessage = greet.message(faker.random.number());
    expect(greetMessage).toBeNull();
  });
  test('Should return hello world!', () => {
    const greetMessage = greet.message('world');
    expect(greetMessage).toEqual('hello world!');
  });
    
  // ARITHMETIC MODULE
  // MODIFIED FROM H'LIANA'S CODE
  test('Test should add numbers from an array', () => {
    let array = [faker.random.number(), faker.random.number(), noZero()];
    let result = math(array, '+');
    const sum = arithmetic.add(array);
    expect(sum).toEqual(result);
  });
  test('Test should subtract numbers from an array', () => {
    let array = [faker.random.number(), faker.random.number(), noZero()];
    let result = math(array, '-');
    const difference = arithmetic.subtract(array);
    expect(difference).toEqual(result);
  });
  test('Test should multiply numbers from an array', () => {
    let array = [faker.random.number(), faker.random.number(), noZero()];
    let result = math(array, '*');
    const product = arithmetic.multiply(array);
    expect(product).toEqual(result);
  });
  test('Test should divide numbers from an array', () => {
    let array = [faker.random.number(), noZero(), noZero(), noZero(), noZero(), noZero()];
    let result = math(array, '/');
    const quotient = arithmetic.divide(array);
    expect(quotient).toEqual(result);
  });
  test('The array should contain only integers', () => {
    let array = [faker.random.number(), noZero(), noZero(), noZero(), noZero(), noZero()];
    let newArray = [];
    for(let i in array) {
      newArray.push(typeof array[i]);
    }
    expect(newArray).toContain('number');
    expect(newArray).not.toContain('string');
  });
});
