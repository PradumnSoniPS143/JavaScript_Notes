//~ Object.defineProperty()

let obj = {}
Object.defineProperty(obj, "name", {
    value: "Pradumn"
})
console.log(obj);

//~ Object.defineProperties()

let obj2 = {}
Object.defineProperties(obj2, {
    "name": { value: "Pradumn Soni" },
    "age": { value: 26 },
    "sal": { value: 22000 }
})
console.log(obj2);
console.log(obj2.age);
console.log(typeof (obj2.age));
console.log(typeof obj2);
console.log(typeof (obj2.name));

//~ Object.keys()

console.log(Object.keys(obj2));

//~ Object.values()

console.log(Object.values(obj2));

//~ Object.entries()

console.log(Object.entries(obj2));

//~ Object.fromEntries()

let arr = [["id", 1], ["name", "Pradumn"], ["age", 26]];
console.log(Object.fromEntries(arr));


//~
let obj3 = {
    id : 1,
    name : "Pradumn Soni",
    age : 26,
    gender : "male"
}

Object.freeze(obj3);

console.log(obj3);

//~ Addition of new property
obj3.skills = "Java";

//~ Updation of existing property
obj3.name = "Pradumn Verma";

//~ Deletion of Property
delete obj3.gender;

console.log(obj3);

console.log(Object.isFrozen(obj3));

//~ seal

let obj4 = {
    id : 1,
    name : "Pradumn Soni",
    age : 26,
    gender : "male"
}

console.log(obj4);
Object.seal(obj4);
//~ Update
obj4.name = "Pradumn";

//~ addition
obj4.newProp = "abcderf";

//~ delete
delete obj4.gender;

console.log(obj4);

console.log(Object.isSealed(obj4));