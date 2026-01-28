
let btn = document.querySelector("button")

// console.log("Task 1")

// // for(let i = 0; i <= 10000; i++){
// //     console.log("Task 2")
// // }

// let clear = setTimeout(() => {
//     console.log("Task 2")
// }, 5000)

// btn.addEventListener('click', () => {
//     clearTimeout(clear)
// })

// console.log("Task 3")

// let i = 0

// let cancelInterval = setInterval(() => {
//     console.log(i)
//     i++
// }, 1000)

// btn.addEventListener('click', () => {
//     clearInterval(cancelInterval)
//     console.log("Button is clicked")
// })

let pro = new Promise((resolve, reject) => {
    resolve("Promise is Resolved!!")
    reject("Promise is rejected!!")
})

console.log(pro)

pro
    .then(() => {
        console.log("Promise Resolved!!")
    })
    .catch(() => {
        console.log("Promise Rejected!!")
    })
    .finally(() => {
        console.log("Finally Block!!")
    })