function make_sandwich(...items:string[]){   //Rest parameter(...items:string[])-multiple item in an array
    console.log("-Making your sandwich with:");
for (let i=0;i<items.length;i++){
console.log(`${items[i]}`);
}
console.log("=Enjoy your sandwich!=");
}
make_sandwich("Chicken","Cheese","Mayonese");
make_sandwich("Lettuce","Beef");
make_sandwich("Turkey","Butter-Garlic");  
