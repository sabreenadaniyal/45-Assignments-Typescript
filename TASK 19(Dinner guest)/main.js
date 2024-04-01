var guestList = ["Nabeel", "Iqbal", "Kamran", "Imran", "Ilyas", "Salman"];
console.log("we cannot arrange a big table,Only two people will be invited");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Dear ".concat(removeGuest, " Sorry,we cannot invite you to dinner."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",You are still invited to dinner"));
}
guestList.splice(0, 2);
console.log(guestList);
console.log("number of guest ".concat(guestList.length));
