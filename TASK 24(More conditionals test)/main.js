"use strict";
let name1 = "Sabreena";
let name2 = "Sabreena";
//Equality with string
console.log(name1 == name2); //true
console.log(name1 != name2); //false
//lowerCase function
console.log(name1.toLowerCase() == name2); //false
//numerical test
console.log(10 > 3); //true
console.log(50 < 5); //false
//And && Or ||
console.log((3 < 10) && (50 > 8)); //true
console.log((50 < 12) || (80 <= 44)); //false
//item in array
let fruits = ["apple", "banana", "orange"];
console.log("is 'apple' in fruits?");
console.log(fruits.includes("apple")); //true
//item not in an array
console.log("is 'mango' in fruits?");
console.log(fruits.includes("mango")); //false
