//The original array will be unchanged, return the new array and store it in a separate array.
let magicians:string[]=["Shahrukh Zahoor","Teller","Criss Angel"]
function show_magicians(magiciansArray:string[]){
    for(let i=0;i<magiciansArray.length;i++){
        console.log(magiciansArray[i]);}   
    }
    function make_great(arrayVar:string[]){
        return arrayVar.map (ele => `${ele}!The Great Magicians`) 
    }
let copyArray = [...magicians]   // copy of array([...array])
let copyThegreat = make_great(copyArray) 
show_magicians(magicians)
show_magicians(copyThegreat)
