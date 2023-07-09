"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We can make any property optional by adding ? after thatinside interface declaration like in id
let user = {
    name: "bharat",
    age: 23,
    id: 1,
    email: 'rozodkarbharat@gmail.com'
};
// we can  destructure user obj as
let { name, age, email } = {
    name: "bharat",
    age: 23,
    email: 'rozodkarbharat@gmail.com'
};
// Without id
let user1 = {
    name: "bharat",
    age: 23,
    email: 'rozodkarbharat@gmail.com'
};
let employees = {
    name: "bharat",
    age: 23,
    email: 'rozodkarbharat@gmail.com',
    salary: 54000
};
let [user3, user2] = [
    {
        name: "bharat",
        age: 23,
        email: 'rozodkarbharat@gmail.com'
    },
    {
        name: "bharat",
        age: 23,
        email: 'rozodkarbharat@gmail.com'
    }
];
console.log(user2, user3);
