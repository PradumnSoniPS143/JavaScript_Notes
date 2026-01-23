//~ slice()

let arr = ["Pradumn", "Dinkar", "Ranjan", "Ankit", "Ayush"];

console.log(arr);
let res = arr.slice(2, 4);
console.log(res);
console.log(arr);
let res2 = arr.slice(3);
console.log(res2);
console.log(arr);

//~ splice()

let arr2 = ["Pradumn", "Dinkar", "Ranjan", "Ankit", "Ayush"];

console.log(arr2);
let res3 = arr2.splice(2, 3);
console.log(res3);
console.log(arr2);

let res4 = arr2.splice(1, 1, "Mia");
console.log(res4);
console.log(arr2);

//~ flat()

let arr3 = [[[[[[1, 2, 3, "abc"]]]]]];
console.log(arr3);
let res5 = arr3.flat(Infinity);
console.log(res5);
console.log(arr3);

//~ reverse()

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr4);
let res6 = arr4.reverse();
console.log(res6);
console.log(arr4);

//~ find()

let arr5 = [10, 20, 30, 40, 50, 60];

console.log(arr5);
let res7 = arr5.find(m => m > 28)

console.log(res7);
console.log(arr5);

//~ findIndex()

let arr6 = [10, 20, 30, 40, 50, 60, 70];

console.log(arr6);
let res8 = arr6.findIndex(m => m > 28)

console.log(res8);
console.log(arr6);

//~ reverse the string

let str = "qwerty";

console.log(str.split("").reverse().join(""));

//~ some()

let arr7 = [10, 20, 30, 40, 50, 60, 70];

let res9 = arr7.some(m => m > 40)

console.log(res9);

//~ every()

let arr8 = [10, 20, 30, 40, 50, 60, 70];

let res10 = arr8.every(m => m > 40)

console.log(res10);