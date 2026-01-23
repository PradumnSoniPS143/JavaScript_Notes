// Constructor way

let obj = new Object({id : 1, sal : 20000, address : "Gorakhpur"});
console.log(obj);

// Object.create() 

let obj2 = Object.create(obj);
console.log(obj2);
console.log(obj2.sal);
console.log(obj.sal);
console.log(obj2.address);
console.log(obj2.age);

// Prototype :-

console.log(obj2.__proto__.__proto__);
console.log(String.prototype);
console.log(Array.prototype);
console.log(Object.prototype);

// Constructor function

function ConstructorFn(id, name, add) {
    console.log(this);
    this.id = id;
    this.name = name;
    this.add = add;
}

let obj3 = new ConstructorFn(101, "Pradumn", "Gurugram");
console.log(obj3);

//~ this

let obj4 = {
    id : 1,
    print : function() {
        console.log(this);
    },
    print2 : () => {
        console.log(this);
    }
}

obj4.print();
obj4.print2();

//~ use strict this

"use strict"

console.log(this);

function fun(){
    console.log(this);
}

fun();

var a = 10;

let obj5 = {
    a : 100,
    print3 : function (){
        console.log(this.a);
    },
    print4 : () => {
        console.log(this.a);
    }
}

obj5.print3();
obj5.print4();