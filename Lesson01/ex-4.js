// Kiểu strỉng
var sname = "Chung";
var message = "Xin ch\u00E0o ".concat(sname);
console.log("Name:", sname);
console.log("Message:", message);
// Kiểu Boolean
var lstStudent = true;
var hasGender = false;
console.log("lstStudent:", lstStudent);
console.log("hasGender:", hasGender);
// Kiểu null và undefined
var v = undefined;
var n = null;
console.log("v:", v);
console.log("n:", n);
// any: kiểu bất kỳ (hạn chế dùng)
var ranVal = 10;
console.log("Random value:", ranVal);
ranVal = "Chung chung";
console.log("Random value:", ranVal);
ranVal = true;
console.log("Random value:", ranVal);
// unknown: giống kiểu any nhưng an toàn hơn
var notStore = 10;
console.log("notStore:", notStore);
notStore = "hello";
console.log("notStore:", notStore);
if (typeof notStore === "string") {
    console.log("notStore:", notStore.toUpperCase());
}
// kiểu mảng: array
var scores = [10, 15, 20];
var names = ["An", "Bình", "Phú", "Thái"];
console.log("scores:", scores);
console.log("names:", names);
var flags = [true, false, true, true];
console.log("flags:", flags);
// tuple: Bộ
var student = ["Chung", 47];
console.log("Student:", student);
// Object: 
var person = {
    name: "Chung Chung",
    age: 47,
    email: "chungtrinhj@gmail.com"
};
console.log("person:", person);
console.log("Name:", person.name);
// function
function great(name, age) {
    return "Welcome to, " + name + ", Age:" + age;
}
console.log(great("Devaster", 10));
var func_great = function (name, age) {
    return "Welcome to, ".concat(name, ", age ").concat(age);
};
console.log(func_great("Devaster", 10));
