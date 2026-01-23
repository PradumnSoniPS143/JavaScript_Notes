//~ repeat()

let str = "QSpiders"
console.log(str.repeat(2));

//~ match()

let str2 = "I am Java Developer";
console.log(str2.match("am"));

//~ search()

let str3 = "I am Java Developer";
console.log(str3.search("Java"));

//~ Literal's way

let arr = [1, 2, 3, 4];
console.log(arr);

let arr2 = [1, "abc", null, undefined, true, () => { }];
console.log(arr2);

//~ Constructor's way

let arr3 = new Array(10, 20, 30, 40, 50);
console.log(arr3);

let arr4 = new Array(10);
console.log(arr4);
console.log(arr4.length);

//~ Array.of

let arr5 = Array.of(10);
console.log(arr5);

//~ read

let arr6 = [1, 2, "abc", null, "xyz"];
console.log(typeof arr["abc"]);

//~ update

arr6[3] = "qwerty";
console.log(arr6);

//~ delete

delete arr6[4];
console.log(arr6);

//~ method of the Array

//~ push()

let arr7 = [10, 20, 30, 40, -50]
let res = arr7.push(500)
console.log(arr7)
console.log(res)

//~ pop()

let arr8 = [10, 20, 30, 40, -50]
console.log(arr8)	// [10,20,30,40,-50] 
let res1 = arr8.pop()
console.log(arr8)	// [10,20,30,40] 
console.log(res1)

//~ unshift()

let arr9 = [10, 20, 30, 40, -50]
console.log(arr9)
let res2 = arr9.unshift(50)
console.log(arr9)
console.log(res2)

//~ shift()

let arr10 = [123,1, 20, 30, 50, 100];
console.log(arr10);
let res3 = arr10.shift();
console.log(arr10);
console.log(res3);