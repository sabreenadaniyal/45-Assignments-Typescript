let magician:string[]=["Shahrukh Zahoor","Teller","Criss Angel"]
function make_great(magicianVar:string[]){
  return magicianVar.map (ele => ` ${ele}!The Great magicians`)//return the value in single statement 
}
function show_magician(magician:string[]){
    for (let i=0;i<magician.length;i++){
        console.log(magician[i]);     
}
}
let magicianName = make_great(magician)  //modified function
show_magician(magicianName)   // list has been updated




