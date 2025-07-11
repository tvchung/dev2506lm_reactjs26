// Kiểu strỉng
let sname:string = "Chung"
let message:string=`Xin chào ${sname}`

console.log("Name:",sname);
console.log("Message:",message);

// Kiểu Boolean

let lstStudent:boolean = true
let hasGender:boolean=false

console.log("lstStudent:",lstStudent);
console.log("hasGender:",hasGender);

// Kiểu null và undefined
let v:undefined = undefined
let n:null=null

console.log("v:",v);
console.log("n:",n);

// any: kiểu bất kỳ (hạn chế dùng)
let ranVal:any = 10
console.log("Random value:",ranVal);
ranVal="Chung chung"
console.log("Random value:",ranVal);
ranVal=true
console.log("Random value:",ranVal);

// unknown: giống kiểu any nhưng an toàn hơn
let notStore:unknown = 10
console.log("notStore:",notStore);
notStore="hello"
console.log("notStore:",notStore);
if(typeof notStore ==="string"){
    console.log("notStore:",notStore.toUpperCase());
}

// kiểu mảng: array
let scores:number[] = [10,15,20]
let names:string[] = ["An","Bình","Phú","Thái"]
console.log("scores:",scores);
console.log("names:",names);
let flags:Array<boolean> = [true, false, true, true]
console.log("flags:",flags);

// tuple: Bộ
let student:[string,number]=["Chung",47]
console.log("Student:",student);

// Object: 
let person:{name:string; age:number;email:string} = {
    name:"Chung Chung",
    age:47,
    email:"chungtrinhj@gmail.com"
}

console.log("person:",person);
console.log("Name:",person.name);

// function
function great(name:string, age:number){
    return "Welcome to, " + name + ", Age:" + age
}

console.log(great("Devaster",10));

const func_great=(name:string, age:number)=>{
    return `Welcome to, ${name}, age ${age}`
}

console.log(func_great("Devaster",10));
