const tinderUser = new Object() // -> Singleton Object

// const tinderUser2 = {} // -> Non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Tony"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const user = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Lakhan",
            lastname: "Patil"
        }
    }
}

// console.log(user.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} // ----> Spread operator
// console.log(obj3);

const dbUser = [
    {
        id: 1,
        email: "lakhan@gmail.com"
    },
    {
        id: 1,
        email: "lakhan@gmail.com"
    }
]

// console.log(dbUser[1].email)

// console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

console.log(dbUser.toString());