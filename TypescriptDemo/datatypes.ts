// Declaration of String
let lname:string

lname="Rozodkar"


// declaration of Number
let age:number

age=25


// Declaring Array

let numList:Array<number>

// let numList:number[]

numList=[1,2,3,5,8]



// Use Filter reduce find


let empList:string[]

empList=["bharat","Aishwarya","Lata","Mukta"]


// Use of Find 

let emp=empList.find((emp)=>emp=="bharat")

// console.log(emp)


let result= numList.filter((num)=>num>2)

// console.log(result)

// Use reduce 

let sum= numList.reduce((acc,num)=>acc+num)

// console.log(sum)



// Declaring Enum 

//  declare enum withn const will make it unchangable

const enum Color{
  Red,
  Blue,
  Green
}

let c:Color=Color.Blue

// console.log(c)


// ? declaring tuples

let swapNumbs:[FirstNumber:number,SecondNumber:number]

function swapnumber(num1:number,num2:number):[number,number]{
  return [num2,num1]
}

swapNumbs=swapnumber(10,20)

console.log(swapNumbs[0])

// console.log(swapNumbs[2]) we cannot access 2nd index because it has till 1 index only this shows error before compiling


// use any i s node recomended

let department:any

department="IT"

department=10



