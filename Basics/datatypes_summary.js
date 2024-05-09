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

// console.log(typeof movies);

// ********************** Memory Management ************************

// Stack (primitive), Heap (Non-primitive)

let myYoutubeName = "LuckySings"

let anotherName = myYoutubeName;
anotherName = "code aur Lucky"

// console.log(myYoutubeName);
// console.log(anotherName);

let user1 = {
    email: "patillakhan25@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "lakhan.patil008@gmail.com"

console.log(user1.email);

