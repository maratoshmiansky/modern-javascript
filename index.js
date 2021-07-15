var math = require("mathjs");

console.log("Hello from JavaScript!");
var answer = math.evaluate("7.13 / (8.14 - 2.49)");
console.log(answer);
console.log(math.round(math.e, 3));
let name = "Jenny";
let now = "today";
console.log(`Hello, ${name}!  It is currently ${now}.`);
let array = [5, 1, 3, 4, 2];
console.log(array.sort().map((num) => num * 2));
