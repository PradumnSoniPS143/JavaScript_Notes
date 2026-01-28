let p1 = new Promise((resolve, reject) => {
    resolve("Promise 1 resolved")
})
let p2 = new Promise((resolve, reject) => {
    // resolve("Promise 2 resolved")
    reject("Promise 2 is rejected")
})
let p3 = new Promise((resolve, reject) => {
    // resolve("Promise 3 resolved")
    reject("Promise 3 rejeceted!!")
})

Promise.allSettled([p1, p2, p3])
    .then((resolve) => {
        console.log("Promise resolved :- " , resolve)
    })
    .catch((reject) => {
        console.log("Promise rejected :- " , reject)
    })