let score = true

// console.log(typeof score); // string

let valueInNumber = Number(score)

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); //NaN - not a number : when the string value contains any of the alphabets

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "Lucky"

let confirmLogin = Boolean(isLoggedIn);

// console.log(typeof confirmLogin);
// console.log(confirmLogin);

// 1 => true; 0 => false
// "" => false
// "lucky" => true

let someNumber = 2000

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************************** Operation **************************************

let value = 3
let negValue = -value
// console.log(negValue);

let greetings = "hello "
let name = "Lucky"
// console.log(greetings + name);

// console.log("1" + 2); // => 12
// console.log(4 + "5"); // => 45
// console.log("1" + 2 + 2); // => 122
// console.log(1 + 2 + "2"); // => 32

// console.log(true);

// postfix operator => here value remains the same before output.
let x = 1
const y = x++;

console.table([x, y]);

// prefix operator => Value changes with the output or before output.

let a = 10
const b = ++a;

console.table([a, b]);


