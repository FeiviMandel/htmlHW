'use strict';

function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 5), multiply(6, 5), multiply(6, 6));

function getMultiplier() {
    return function (c,d) {
        return multiply(c,d);
    };
}

const multiplier = getMultiplier();
console.log(multiplier(2, 6), multiplier(8, 6), multiplier(10, 6));

function getBestMultiplier(a) {
    return function (d) {
        return multiply(a, d);
    };
}

const multiplyByFive  = getBestMultiplier(5);
console.log(multiplyByFive (2));

const multiplyBySix = getBestMultiplier(6);
console.log(multiplyBySix(2));