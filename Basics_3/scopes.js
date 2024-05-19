let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: " + a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

// Global scopes are different for node & windows environment.

function one() {
    const username = "Lakhan"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}

// one()

if (true) {
    const username = "Lakhan"
    if (username === "Lakhan") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
    // console.log(username);
}
// console.log(username);


// ******************** Interesting *****************

console.log(addone(8))
function addone(num) {
    return num + 1
}


console.log(addTwo(18));

const addTwo = function(num) { // - Expressions
    return num + 2
}

