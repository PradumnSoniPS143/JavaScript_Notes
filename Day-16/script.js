//~ shallow copy

// let obj = {
//     id : 1,
//     name : "Karan",
//     skills : "Java",
//     sal : 22000,
//     companyDetails : {
//         cName : "Testoyantra",
//         cId : 10283,
//         cLocation : "Banglore"
//     }
// }

//~! way-1
// let newObj = Object.assign({}, obj);

//~! way-2
// let newObj = {...obj};

//~! way-3
// let newObj = {}
// for(let keys in obj){
//     newObj[keys] = obj[keys];
// }

// newObj.name = "Pradumn Soni";
// newObj.companyDetails.cName = "QSpiders";

// console.log(obj.name);
// console.log(newObj.name);
// console.log(obj.companyDetails.cName);
// console.log(newObj.companyDetails.cName);

//~ deep copy

// let newObj1 = structuredClone(obj);

// let newObj1 = JSON.parse(JSON.stringify(obj));

// newObj1.name = "Pradumn Soni";
// newObj1.companyDetails.cName = "QSpiders";

// console.log(obj.name);
// console.log(newObj1.name);
// console.log(obj.companyDetails.cName);
// console.log(newObj1.companyDetails.cName);

//~ Call, Apply, Bind

// let person1 = {
//     eName : "Pradumn"
// }

// let person2 = {
//     eName : "Dinkar"
// }

// let person3 = {
//     eName : "Ranjan"
// }

// let person4 = {
//     eName : "Ankit"
// }

// function makeBill(sal, add){
//     console.log(`Name is ${this.eName} and salary is ${sal} and address is ${add}`);
// }

// //~! call
// makeBill.call(person1, 22000, "Gurugram");
// makeBill.call(person2, 23000, "Noida");
// makeBill.call(person3, 32000, "Gurgaon");
// makeBill.call(person3, 25000, "Bajaj");

// //~! apply
// makeBill.apply(person1, [ 22000, "Gurugram" ]);
// makeBill.apply(person2, [ 23000, "Noida" ]);
// makeBill.apply(person3, [ 32000, "Gurgaon" ]);
// makeBill.apply(person3, [ 25000, "Bajaj" ]);

// //~! bind
// let p1 = makeBill.bind(person1, [ 22000, "Gurugram" ]);
// p1();
// let p2 = makeBill.bind(person2, [ 23000, "Noida" ]);
// p2();
// let p3 = makeBill.bind(person3, [ 32000, "Gurgaon" ]);
// p3();
// let p4 = makeBill.bind(person3, [ 25000, "Bajaj" ]);
// p4();

//~! Date Object

let d1 = new Date();

console.log(d1);
console.log(d1.getDate());
console.log(d1.getDay());
console.log(d1.getFullYear());
console.log(d1.getHours());
console.log(d1.getSeconds());
console.log(d1.getMinutes());
console.log(d1.getMilliseconds());
console.log(d1.getFullYear());
console.log(d1.getMonth());
console.log(d1.getTime());

let d2 = new Date();
let d3 = new Date("1998-10-29");
let d4 = new Date(0);

console.log(d2);
console.log(d3);
console.log(d4);

