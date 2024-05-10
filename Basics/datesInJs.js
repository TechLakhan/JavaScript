// Dates 

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let createdDate = new Date(2023, 0, 23);
// let createdDate = new Date(2023, 0, 23, 5, 12, 30);

let createdDate = new Date("01-14-2024");

// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth()+ 1);

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'IN'
})