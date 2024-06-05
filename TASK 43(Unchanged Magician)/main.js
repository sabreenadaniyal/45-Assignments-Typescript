"use strict";
//copy of an array of the magician names
let magicians = ["Shahrukh Zahoor", "Teller", "Criss Angel"];
function show_magicians(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        console.log(magiciansArray[i]);
    }
}
function make_great(arrayVar) {
    return arrayVar.map(ele => `${ele}!The Great Magicians`);
}
let copyArray = [...magicians];
let copyThegreat = make_great(copyArray);
show_magicians(magicians);
show_magicians(copyThegreat);
