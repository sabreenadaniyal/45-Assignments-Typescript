let users:string[]=["Admin","Eric","Micheal","jackson","Thompson"]
for(let	user of users){
if(user === "Admin"){
console.log("Hello Admin,would you like to see a status report?");}
else{
console.log(`Hello ${user}, thankyou for logging in again!`);}
}