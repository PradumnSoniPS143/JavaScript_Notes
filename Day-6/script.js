//~ Function with Expression

let fun = () => {
	console.log("Function with expression");
}
fun();


//~ IIFE Immediate Invoke Function Expression

(() => {
	console.log("IIFE Function");
})()

//~ Higher Order Function and Callback Function

function HOF(a, b, callback) {
	console.log(callback);
	return callback(a, b);
}

HOF(10, 20, (a, b) => {
	console.log(a + b);
})

//~ Default Parameter

function sum(a) {
	console.log(a);
}

sum();

function sum1(a, b) {
	console.log(a + b);
}

sum1(10);

function sum2(a, b = 100) { //Default Parameter
	console.log(a + b);
}

sum2(10);