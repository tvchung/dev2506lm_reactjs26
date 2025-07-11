// Các kiểu dữ liệu nang cao
// Union type
let value:string | number
value = "Chung Trịnh"
console.log("string:",value);
value = 1234
console.log("number:",value);

// value=true => error

// Alias - Bí danh (Định danh kiểu)
type UserID = string | number
let id1:UserID = "Chung"
let id2:UserID = 123
console.log("User id 1:",id1)
console.log("User id 2:",id2)


// interface

interface Person{
    name:string,
    age:number,
    email?:string // thuộc tính tùy chọn
}

let user_1:Person = {
    name:"Devmaster",
    age:10
}
let user_2:Person = {
    name:"Devmaster",
    age:10,
    email:"chungtrinhj@gmail.com"
}
console.log("User_1",user_1);
console.log("User_2",user_2);
