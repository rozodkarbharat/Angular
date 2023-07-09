function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(2, 5), "add");

const substract = (num1: number, num2: number): number => num1 - num2;

console.log(substract(5, 3), "Sub");

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log(mult(2, 3), "Mult");

// passing optional parameters to func .

function addition(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

// without option param
console.log(addition(1, 2), "add 2 numbers");

// With optional param
console.log(addition(1, 2, 3), " Add three numbers");


//  3rd param value given default 

function addit(num1: number, num2: number, num3= 10): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
  }


// without  default param
console.log(addit(1, 2), "add 2 numbers");

// With default param
console.log(addit(1, 2, 3), " Add three numbers");


// Rest operator 

function add2(num1:number,num2:number,...num3:number[]):number{
    return num1+num2+ num3.reduce((a,b)=>a+b,0)
}

let numbers=[1,2,3,4,5]

console.log(add2(2,3,...numbers))

console.log(add2(2,3,...[1,2,3,4,5]))

console.log(add2(2,3,1,2,3,4,5))


// Generic function 


function getItem<Type>(items:Type[]):Type[]{
  return new Array<Type>().concat(items)
}

let concatNums=getItem<number>([1,2,3,4,5])

let conatStr=getItem<string>(['a','s','c','d'])

console.log(concatNums,conatStr)