'use strict';

function ourEvery(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        if (!callback(theArray[i])) {
            return false;
        }
    }
    return true;
}

const isUppercase = letter => letter === letter.toUpperCase();
const isLowercase = letter => letter === letter.toLowerCase();

const arrayLower = ['a', 'b', 'c', 'd', 'e', 'f'];
const arrayMixed = ['a', 'B', 'C', 'd', 'e', 'f'];
const arrayUpper = ['A', 'B', 'C', 'D', 'E', 'F'];

console.log('ourEvery(arrayLower,isUppercase)', ourEvery(arrayLower, isUppercase));
console.log('ourEvery(arrayMixed,isUppercase)', ourEvery(arrayMixed, isUppercase));
console.log('ourEvery(arrayUpper,isUppercase)', ourEvery(arrayUpper, isUppercase));

console.log('ourEvery(arrayLower,isLowercase)', ourEvery(arrayLower, isLowercase));
console.log('ourEvery(arrayMixed,isLowercase)', ourEvery(arrayMixed, isLowercase));
console.log('ourEvery(arrayUpper,isLowercase)', ourEvery(arrayUpper, isLowercase));

console.log('arrayLower.every(isUppercase)', arrayLower.some(isUppercase));
console.log('arrayMixed.some(isUppercase)', arrayMixed.some(isUppercase));
console.log('arrayUpper.some(isUppercase)', arrayUpper.some(isUppercase));

console.log('arrayLower.some(isLowercase)', arrayLower.some(isLowercase));
console.log('arrayMixed.some(isLowercase)', arrayMixed.some(isLowercase));
console.log('arrayUpper.some(isLowercase)', arrayUpper.some(isLowercase));

function ourSome(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i])) {
            return true;
        }
    }
    return false;
}

console.log('ourSome(arrayLower,isUppercase)', ourSome(arrayLower, isUppercase));
console.log('ourSome(arrayMixed,isUppercase)', ourSome(arrayMixed, isUppercase));
console.log('ourSome(arrayUpper,isUppercase)', ourSome(arrayUpper, isUppercase));

console.log('ourSome(arrayLower,isLowercase)', ourSome(arrayLower, isLowercase));
console.log('ourSome(arrayMixed,isLowercase)', ourSome(arrayMixed, isLowercase));
console.log('ourSome(arrayUpper,isLowercase)', ourSome(arrayUpper, isLowercase));

console.log('arrayLower.some(isUppercase)', arrayLower.some(isUppercase));
console.log('arrayMixed.some(isUppercase)', arrayMixed.some(isUppercase));
console.log('arrayUpper.some(isUppercase)', arrayUpper.some(isUppercase));

console.log('arrayLower.some(isLowercase)', arrayLower.some(isLowercase));
console.log('arrayMixed.some(isLowercase)', arrayMixed.some(isLowercase));
console.log('arrayUpper.some(isLowercase)', arrayUpper.some(isLowercase));

function onlyIf(theArray, test, action) {
        for (let i = 0; i < theArray.length; i++) {
        if (test(theArray[i])) {
            action(theArray[i]);
        }
    }    
}

onlyIf(arrayMixed, isUppercase, console.log);
onlyIf(arrayUpper, isUppercase, console.log);
onlyIf(arrayLower, isUppercase, console.log);

console.log((arrayMixed.filter(isUppercase)));


