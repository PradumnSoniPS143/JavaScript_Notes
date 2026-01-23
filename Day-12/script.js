//~ map()

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let res = arr.map(m => m * 10)
// console.log(res);

let res = arr.map(m => {
    return m * 10
});

console.log(res);

//~ filter()

let marks = [35, 40, 20, 45, 56, 79, 99];

let even = marks.filter((m) => {
    return m % 2 === 0
});

console.log(even);

//~ reduce()

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res1 = num.reduce((acc, currentVal) => {
    return acc + currentVal
}, 10)
console.log(res1);

//~ sort()

let arr2 = [10, 20, 11, 12, 23, 9, 4, 5];

let res2 = arr2.sort((a, b) => {
    return a - b
})
console.log(res2);

let res3 = arr2.sort((a, b) => {
    return b - a
})
console.log(res3)

//~ Object

//~ CRUD- Create

let empDetails = {
    empId : 1,
    empName : "Pradumn",
    age : 26,
    isMarried : false,
    isDeveloper : undefined,
    skills : ["HTML", "CSS", "JS", "JAVA", {exp : "null"}],
    address : {
        pinCode : 273164,
        hNo : 423,
        street : "Sarojani Nagar",
        details : [{details : () => {
            console.log("My name is Pradumn Soni")
        }}]
    },
    printName : () => {
        console.log("Myself Pradumn Verma")
    }
}

//~ Read

console.log(empDetails);
console.log(empDetails.empName);
console.log(empDetails.skills[4].exp);
empDetails.address.details[0].details();
empDetails.printName();

//~ Update

console.log(empDetails.isMarried);
empDetails.isMarried = undefined;
console.log(empDetails.isMarried);

//~ Delete

console.log(empDetails.address);
delete empDetails.address
console.log(empDetails.address);