let PersonName:string="Sabreena Ali";
console.log("UpperCase:",PersonName.toUpperCase());
console.log("LowerCase:",PersonName.toLowerCase());
console.log("TitleCase:",PersonName.replace(/\bw/g,c => c.toUpperCase()));