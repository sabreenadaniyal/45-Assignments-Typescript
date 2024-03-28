var guestList = ["Iqbal", "Imran", "Afzaal"];
// one guest not attend dinner
var cannotAttend = ["Afzaal"];
console.log("".concat(cannotAttend, " cannot attend the dinner"));
console.log(guestList.pop());
//afzaal remove from arrays
console.log(guestList);
//replace Ilyas
console.log(guestList.push("Ilyas"));
//new guest list 
console.log(guestList);
//new guest list with invitation
var newguestList = ["Iqbal", "Imran", "Ilyas"];
for (var i = 0; i < newguestList.length; i++) {
    console.log("Dear ".concat(newguestList[i], ", you are invited to the dinner"));
}
