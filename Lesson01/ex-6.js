// Hàm và kiểu trả về, tham số 
//1. Hàm có khai báo tham số và kiểu trả vể
function greating(name) {
    return "Hello, ".concat(name);
}
console.log("greating:", greating('Devmaster'));
//2. Hàm kiểu void (Hàm không định kiểu, hàm không trả về giá trị)
function logMessage(message) {
    console.log("Log:", message);
}
logMessage("Error message!");
//3. Hàm kiểu never
/*
function throwError(msg:string):never{
    throw new Error(msg);
}
throwError("throw")
*/
//4. Hàm nạc danh / arrow function
var sum = function (a, b) {
    return a + b;
};
console.log("Sum:", sum(100, 222));
// 5. Hàm có tham số tùy chọn
var great_param_option = function (name, title) {
    return " Hello, ".concat(title !== null && title !== void 0 ? title : '', " - ").concat(name);
};
console.log("great_param_option:", great_param_option("Chung"));
console.log("great_param_option:", great_param_option("Chung", "Devmaster"));
// 6. rest parameter
var total = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
};
console.log("[1,2]:", total(1, 2));
console.log("[11,21,22,33]:", total(11, 21, 22, 33));
// 7. function type
var divide;
divide = function (a, b) {
    return a / b;
};
console.log("divide:", divide(20, 2));
