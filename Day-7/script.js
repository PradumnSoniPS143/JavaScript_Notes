//~ Nested Function

// function grandParent(){
// 			console.log("Grand Parent Function");
// 			function parent(){
// 				console.log("Parent Function");
// 				function child(){
// 					console.log("Child Function");
// 				}
// 				child();
// 			}
// 			parent();
// 		}
// 		grandParent();

//~ JavaScript Currying

// function grandParent(){
// 			console.log("Grand Parent Function");
// 			return function parent(){
// 				console.log("Parent Function");
// 				return function child(){
// 					console.log("Child Function");
// 				}
// 			}
// 		}
// 		grandParent()()();

//         let parent = grandParent();


//~ Closure

function grandParent() {
    console.log("Grand Parent Function");
    let a = 10;
    return function parent() {
        console.log("Parent Function");
        console.log(a); // Here creating closure
        return function child() {
            console.log("Child Function");
        }
    }
}
grandParent()()();

//~ Recursion Function

function sum(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sum(n - 1);
    }
}

console.log(sum(5));

//~ genrative Function

function* genFun(){
    yield "Pradumn";
    yield "Soni";
    yield 100;
}

let res = genFun();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());