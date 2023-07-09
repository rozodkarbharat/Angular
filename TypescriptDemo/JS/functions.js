"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 5), "add");
const substract = (num1, num2) => num1 - num2;
console.log(substract(5, 3), "Sub");
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 3), "Mult");
// passing optional parameters to func .
function addition(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// without option param
console.log(addition(1, 2), "add 2 numbers");
// With optional param
console.log(addition(1, 2, 3), " Add three numbers");
//  3rd param value given default 
function addit(num1, num2, num3 = 10) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// without  default param
console.log(addit(1, 2), "add 2 numbers");
// With default param
console.log(addit(1, 2, 3), " Add three numbers");
// Rest operator 
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[1, 2, 3, 4, 5]));
console.log(add2(2, 3, 1, 2, 3, 4, 5));
// Generic function 
function getItem(items) {
    return new Array().concat(items);
}
let concatNums = getItem([1, 2, 3, 4, 5]);
let conatStr = getItem(['a', 's', 'c', 'd']);
console.log(concatNums, conatStr);
