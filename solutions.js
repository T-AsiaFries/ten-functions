"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// 1. isTrue

function isTrue(input) {
    return input === true;
}

// 2. isFalse

function isFalse(input) {
    return input === false;
}

// 3. not
// ! -> not

function not(input) {
    return !input
}

// 4. addOne
// Number - always when infinity is included
function addOne(input) {
   return Number(input) + 1
}

// 5. isEven

function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else if (input === input) {
        return false;
    } else if (input === 0) {
        return false;
    }
}
// More solutions for same function

// function isEven(input) {
//     let evenInput - parseFloat(input)
//     return evenInput % 2 === 0;
// }

// const isEven = (even) => even % 2 === 0

// 6. isIdentical

function isIdentical(input1,input2) {
    return input1 === input2
}

// 7. isEqual

function isEqual(input1,input2) {
    return input1 == input2
}

// 8. or

function or(input1,input2) {
    return input1 || input2
}

// 9. and

function and(input1,input2) {
   return input1 && input2
}

// 10. concat

function concat(input1,input2) {
        return input1.toString() + input2.toString()
}

// Another example of concat

// function concat(input1, input2) {
//     return "".concat(input1, input2);
// }
