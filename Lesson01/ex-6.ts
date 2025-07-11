// Hàm và kiểu trả về, tham số 
//1. Hàm có khai báo tham số và kiểu trả vể
function greating(name:string) :string{
    return `Hello, ${name}`
}

console.log("greating:", greating('Devmaster'));


//2. Hàm kiểu void (Hàm không định kiểu, hàm không trả về giá trị)
function logMessage(message:string):void{
    console.log("Log:", message);
}
logMessage("Error message!")

//3. Hàm kiểu never
/*
function throwError(msg:string):never{
    throw new Error(msg);
}
throwError("throw")
*/

//4. Hàm nạc danh / arrow function

const sum = (a:number, b:number):number => {
    return a+b;
}
console.log("Sum:", sum(100,222));

// 5. Hàm có tham số tùy chọn
const great_param_option = (name:string,title?:string):string =>{
    return ` Hello, ${title??''} - ${name}`
}
console.log("great_param_option:", great_param_option("Chung"))
console.log("great_param_option:", great_param_option("Chung","Devmaster"))

// 6. rest parameter
const total = (...numbers:number[]):number =>{
    return numbers.reduce((sum,num)=> sum+num,0)
}
console.log("[1,2]:",total(1,2));

console.log("[11,21,22,33]:",total(11,21,22,33));

// 7. function type
let divide:(x:number, y:number)=>number;
divide = (a,b)=>{
    return a/b;
}

console.log("divide:",divide(20,2));

// 8. 
