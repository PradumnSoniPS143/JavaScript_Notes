//~ Object.assign(target, source)

let obj = {
    id : 1,
    name : "Pradumn"
}

let obj1 = Object.assign({}, obj);
console.log(obj1);

let arr = Object.assign([], obj);
console.log(arr);

console.log(arr[1]);

//~ for-in loop

let obj2 = {
    id : 1,
    name : "Pradumn",
    age : 26,
    sal : 22000,
    skills : "Java"
}

for(let key in obj2){
    console.log(key, " : ", obj2[key])
}

//~ for-of loop (array, string, set)

let arr1 = [1, "Pradumn", true, null, "Soni"];
for(let ele of arr1){
    console.log(ele);
}

//~ String

let str = "Pradumn Verma";
for(let itStr of str){
    console.log(itStr);
}

//~ set

let newSet = new Set([1, 2, 3, 4, 4, 4, 5, 6, 6]);
for(let data of newSet){
    console.log(data);
}

//~ forEach()

let arr2 = ["A", "B", "C", "D", "E"];
arr2.forEach((value, index, ele) => {
    console.log(value, index, ele);
})

//~ destructing in array

let arr3 = [1, 2, "Pradumn Soni", true, null, ["Java"], 10n];

let [a, b, c, ...spreading] = arr3;

console.log(a);
console.log(b);
console.log(c);
console.log(spreading);

let [ , , , f, s] = arr3;
console.log(f);
console.log(s);

//~ destructin in object

let obj3 = {
    id : 10,
    name : "Pradumn Soni",
    age : 25,
    sal : 22000,
    skills : "Java"
}

let { id, name, ...spread } = obj3;

console.log(id);
console.log(name);
console.log(spread);

//~ destructing inside function

function fun(arg){
    let {sal} = arg;
    console.log(sal);
}

fun({id : 1,
    sal : 1234
})

let obj4 = {
    id : 1,
    name : "Pradumn Soni",
    age : 23,
    sal : 22000,
    skills : "java"
}

function func(data){
    let {obj4} = data;
    console.log(obj4);
    let {sal} = obj4;
    console.log(sal);
}

func({obj4})

//~ destructing inside parameters

function rest(...data){
    console.log(data);
}

rest(obj4)