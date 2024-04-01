let guestList:string[]=["Nabeel","Iqbal","Kamran","Imran","Ilyas","Salman"];
console.log("we cannot arrange a big table,Only two people will be invited");
//Remove Guest from list and informing them.
while(guestList.length >2){
let removeGuest = guestList.pop();
console.log(`Dear ${removeGuest} Sorry,we cannot invite you to dinner.`);}
//Informing remaining two guest.
for(let i=0;i<guestList.length;i++){
console.log(`Dear ${guestList[i]},You are still invited to dinner`);}
//Remove two guest from arrays.
guestList.splice(0)
console.log(guestList);