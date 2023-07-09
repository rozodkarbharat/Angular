"use strict";
// Declaration of String
let lname;
lname = "Rozodkar";
// declaration of Number
let age;
age = 25;
// Declaring Array
let numList;
// let numList:number[]
numList = [1, 2, 3, 5, 8];
// Use Filter reduce find
let empList;
empList = ["bharat", "Aishwarya", "Lata", "Mukta"];
// Use of Find 
let emp = empList.find((emp) => emp == "bharat");
// console.log(emp)
let result = numList.filter((num) => num > 2);
// console.log(result)
// Use reduce 
let sum = numList.reduce((acc, num) => acc + num);
let c = 1 /* Color.Blue */;
// console.log(c)
// ? declaring tuples
let swapNumbs;
function swapnumber(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapnumber(10, 20);
console.log(swapNumbs[0]);
// console.log(swapNumbs[2]) we cannot access 2nd index because it has till 1 index only this shows error before compiling
// use any i s node recomended
let department;
department = "IT";
department = 10;
