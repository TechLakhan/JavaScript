// Singleton 
// Object.create -> Constructor Method

const mySym = Symbol("key1")

// Object Literals
const jsUSer = {
    name: "Lakhan",
    "Full Name": "Lakhan Patil",
    [mySym]: "mykey1", // -> To define a symbol in an object
    age: 23,
    location: "Pune",
    email: "lakhan@google.com",
    isLogged: false,
    lastLoginDays: ["Monday", "Thursday"]
}

// console.log(jsUSer.email);
// console.log(jsUSer["email"])
// console.log(jsUSer["Full Name"]);
// console.log (jsUSer[mySym]);

// jsUSer.email = "lakhan@chatgpt.com"
// Object.freeze(jsUSer) // -> To make the object unchangable
// jsUSer.email = "lakhan@microsoft.com"
// console.log(jsUSer);


jsUSer.greeting = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUSer.greeting());