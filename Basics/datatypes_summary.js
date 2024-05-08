// PRIMITIVE

// 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 1223333335446554677n;

// refernce ( Non Primitive)

// Array, Objects, Functions.

const movies = ["KGF", "Animal", "Pushpa", "Phir-Hera-Pheri"]

let myObj = {
    name : "Lakhan",
    age : 23,
    profession : "Software Engineer",
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof movies);