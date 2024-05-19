const user = {
    username: "Lakhan",
    price: 1999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Lucky"
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "Lakhan"
//     console.log(this.username);
// }

// chai();

const chai = () => {  // Arrow Functions syntax
    let username = "Lucky"
    console.log(this.username);
}

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Lakhan"})

// const arr = [2, 5, 9, 13, 19]

// arr.forEach(() => ())

console.log(addTwo(11, 9));