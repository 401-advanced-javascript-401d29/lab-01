'use strict';

//DEPENDENCIES
const greet = require('./lib/greet');
const faker = require('faker');
const arithmetic = require('./lib/arithmetic');

//PREVENT DIVISION BY ZERO
let noZero = () => {
    let randomNum = faker.random.number();
    if(randomNum === 0) {
        return randomNum + 1;
    } else return randomNum;
};

//ARRAY
let array = [faker.random.number(), noZero()];

//CONSOLE LOGS
console.log(greet.message('world'));
console.log('The sum of the array equals: ' + arithmetic.add(array));
console.log('The difference of the array equals: ' + arithmetic.subtract(array));
console.log('The product of the array equals: ' + arithmetic.multiply(array));
console.log('The quotient of the array equals: ' + arithmetic.divide(array));

