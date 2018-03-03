#!/usr/bon/env node

var name = "Justin";
var born = 1979;
var year = 2018
var age = year - born;

console.log("My Name is " + name);
console.log("I am " + age + " years old");

if ( age > 40 ) {
    console.log("Damn....you're looking good");
} else if ( age == 40) {
    console.log("soon you will be old as well!")
} else {
    console.log("Bob hates you")
}

// if (age > 40) {
//     console.log("Damn....you're looking good");
// } else {
//     console.log("Damn, I was hoping to be younger than you");
//     if (age == 40) {
//         console.log("soon you will be old as well!")
//     } else {
//         console.log("Bob hates you")
//     }
// }

