var PersonName = "Sabreena Ali";
console.log("UpperCase:", PersonName.toUpperCase());
console.log("LowerCase:", PersonName.toLowerCase());
console.log("TitleCase:", PersonName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
