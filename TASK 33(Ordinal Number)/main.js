"use strict";
let Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] === 0) {
        console.log(`${i}0`);
    }
    else if (Numbers[i] === 1) {
        console.log(`${i}st`);
    }
    else if (Numbers[i] === 2) {
        console.log(`${i}nd`);
    }
    else if (Numbers[i] === 3) {
        console.log(`${i}rd`);
    }
    else if (Numbers[i] === 4) {
        console.log(`${i}th`);
    }
    else {
        console.log(`${Numbers[i]}th`);
    }
}
