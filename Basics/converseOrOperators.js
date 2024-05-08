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

console.log(stringNumber);
console.log(typeof stringNumber);
