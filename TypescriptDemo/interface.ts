export interface User {
    name: string
    age: number
    id?: number
    email: string
}

// We can make any property optional by adding ? after thatinside interface declaration like in id
let user: User = {
    name: "bharat",
    age: 23,
    id: 1,
    email: 'rozodkarbharat@gmail.com'
}

// we can  destructure user obj as

let { name, age, email }: User = {
    name: "bharat",
    age: 23,
    email: 'rozodkarbharat@gmail.com'
}

// Without id
let user1: User = {
    name: "bharat",
    age: 23,
    email: 'rozodkarbharat@gmail.com'
}



interface Employee extends User {
    salary: number
}

let employees = {
    name: "bharat",
    age: 23,
    email: 'rozodkarbharat@gmail.com',
    salary: 54000
}

// To export we use Export keyword we export it in class now

export interface Login {
    login(): User
}


let [user3, user2]: User[] = [
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
]

console.log(user2,user3)