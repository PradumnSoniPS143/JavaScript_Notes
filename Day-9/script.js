//~ String Property

let str = "Hello World Hello";
let str2 = "          JSpider             ";
let str3 = " Training Centre";

console.log(str[6]);
console.log(str.charAt(6));
console.log(str.charCodeAt(6));
console.log(str.at(6));

//~ slice :- taking two argument 
console.log(str.slice(1, 5));
// console.log(str.slice(5, 1));

//~ substring
console.log(str.substring(5, 0)); // If this then swap
console.log(str.substring(-5, 5)); // If this then negative value convert in zero 0.
console.log(str.substring(5, -5)); // Convert in zero and swap
console.log(str.substring(0, 5));

//~ toLowerCase(), toUpperCase(), concat()
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.concat(str2, str3));

//~ trim()
console.log(str2.trimStart());
console.log(str2.trimEnd());
console.log(str2.trim());

//~ padStart(), padEnd()
let str4 = "123";

console.log(str4.padStart(5, "a"));
console.log(str4.padEnd(5, "a"));

//~ indexOf()
console.log(str.indexOf("World"));
console.log(str.indexOf("abc"));

//~ includes()
console.log(str.includes("World"));

//~ replace() and replaceAll()
console.log(str.replace("Hello", "Hii"));
console.log(str.replaceAll("Hello", "Hii"));