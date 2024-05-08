const accountId = 127673
let accountEmail = "lakhan.patil008@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2; not allowed in JS.

accountEmail = "patillakhan25@gmail.com"
accountPassword ="98765"
accountCity = "Bengaluru"

// console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// .table is a function used to print more than one thing at a time.

/*
prefer not to use var variable, because of issue in block scope & functional scope.
*/