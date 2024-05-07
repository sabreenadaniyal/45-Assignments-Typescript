"use strict";
let userNames = ["Admin", "Eric", "Micheal", "jackson", "Thompson"];
userNames.splice(0, 5);
if (userNames.length == 0) {
    console.log("we need to find some users!");
}
else {
    console.log("we have users!");
}
console.log(userNames);
