let guestList:string[]=["Nabeel","Iqbal","Kamran","Imran","Ilyas","Salman"];
console.log("we cannot arrange a big table,Only two people will be invited"); 
while(guestList.length >2){
let removeGuest = guestList.pop();
console.log(`Dear ${removeGuest} Sorry,we cannot invite you to dinner.`);}
for(let i=0;i<guestList.length;i++){
console.log(`Dear ${guestList[i]},You are still invited to dinner`);}
guestList.splice(0,2)
console.log(guestList); 
console.log(`number of guest ${guestList.length}`);	