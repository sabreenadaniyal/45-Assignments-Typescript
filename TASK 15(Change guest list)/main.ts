let guestList:string[]=["Iqbal","Imran","Afzaal"]
// one guest not attend dinner
let cannotAttend=["Afzaal"];
console.log(`${cannotAttend} cannot attend the dinner`);
console.log(guestList.pop());
//afzaal remove from arrays
console.log(guestList);
//replace Ilyas
console.log(guestList.push("Ilyas"));
//new guest list 
console.log(guestList);
//new guest list with invitation
let newguestList:string[]=["Iqbal","Imran","Ilyas"]
for(let i=0;i<newguestList.length;i++){
    console.log(`Dear ${newguestList[i]}, you are invited to the dinner`);
}

