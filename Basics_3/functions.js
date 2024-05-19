function sayMyName() {
    console.log(`Hi, My name is Lakhan !`);
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2) {

    let result = num1 + num2
    return result
}


const result = addTwoNumbers(6, 8);

// console.log(result);

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter an username");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Lakhan"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1) { // -> Rest Operator in functions
    return num1
}

// console.log(calculateCartPrice(200, 1200, 893, 197))

const user = {
    username: "Lakhan",
    price: 299
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 499
})

const arr = [200, 400, 600, 800]

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(arr));

console.log(returnSecondValue([200, 400, 600, 800]));