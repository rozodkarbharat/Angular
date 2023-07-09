import { Login, User } from "./interface";

class Employee implements Login{

    #id:number;
    name:string;
    protected adress:string;

    constructor(id:number,name:string,adress:string){
        this.#id=id
        this.name=name
        this.adress=adress
    }

    get EmpId():number{
        return this.#id
    }

    set EmpId(id:number){
        this.#id=id
    }

    static employeeCount():number{
        return 50
    }
    
    login(): User {
    return {name:"bharat",
    age:23,
    email:'rozodkarbharat@gmail.com'}
    }

    getNameWithadress():string{
        return `${this.name} stays at ${this.adress}`
    }
}

let john=new Employee(1,'john','highway 17')



let nameAdress=john.getNameWithadress()


// We can acess static methods without create new instance of class
let count=Employee.employeeCount()

// console.log(nameAdress)


// console.log(john.name)
// like name #id or private id is not accessible outside of class because it's private variabel
// console.log(john.id)


//  and same with protected key word we cannot access adress outside class

// console.log(john.adress)



// Getters and setters

// Getter 

const id=john.EmpId

console.log(id)

john.EmpId=50

console.log(john.EmpId)


class Manager extends Employee{

    constructor(id:number,name:string,adress:string){
        super(id,name,adress)
    }

    getNameWithadress(): string {
        return `${this.name} is a manager at ${this.adress}`
        
    }
}

let mike= new Manager(2,'mike',"savda")

// Inheritance
// if we comment getNameWithadress in Manager it will inherite from Employee and give result
// console.log(mike.getNameWithadress())

