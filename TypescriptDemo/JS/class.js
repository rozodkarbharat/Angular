"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, adress) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.adress = adress;
    }
    get EmpId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set EmpId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static employeeCount() {
        return 50;
    }
    login() {
        return { name: "bharat",
            age: 23,
            email: 'rozodkarbharat@gmail.com' };
    }
    getNameWithadress() {
        return `${this.name} stays at ${this.adress}`;
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, 'john', 'highway 17');
let nameAdress = john.getNameWithadress();
// We can acess static methods without create new instance of class
let count = Employee.employeeCount();
// console.log(nameAdress)
// console.log(john.name)
// like name #id or private id is not accessible outside of class because it's private variabel
// console.log(john.id)
//  and same with protected key word we cannot access adress outside class
// console.log(john.adress)
// Getters and setters
// Getter 
const id = john.EmpId;
console.log(id);
john.EmpId = 50;
console.log(john.EmpId);
class Manager extends Employee {
    constructor(id, name, adress) {
        super(id, name, adress);
    }
    getNameWithadress() {
        return `${this.name} is a manager at ${this.adress}`;
    }
}
let mike = new Manager(2, 'mike', "savda");
// Inheritance
// if we comment getNameWithadress in Manager it will inherite from Employee and give result
// console.log(mike.getNameWithadress())
