//Found big dinner table information to oldguest.
var oldguestList = ["Iqbal", "Imran", "Ilyas"];
for (var i = 0; i < oldguestList.length; i++) {
    console.log("Dear ".concat(oldguestList[i], ",we found big dinner table so we invite 3 more guests"));
}
//add one guest at starting in array(Nabeel)
oldguestList.unshift("Nabeel");
//add one more guest at the middle in array(Kamran)
oldguestList.splice(2, 0, "Kamran");
//add one more guest in the last of the array(Salman)
oldguestList.push("Salman");
//new array of six guests
console.log(oldguestList);
//again invitation to six guests
for (var i = 0; i < oldguestList.length; i++) {
    console.log("Dear ".concat(oldguestList[i], ",You are invited to the Dinner,Thank you!"));
}
