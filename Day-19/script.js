// //~ Accessing the variable

// let inp = document.querySelector("#inpTag")
// console.log(inp)

// console.log(inp.type)
// console.log(inp.name)
// console.log(inp.placeholder)

// //~! Updating the value of the attributes
// inp.type = "password"

// //~! Adding new Attributes
// inp.maxLength = 10

// //~! By method  getAttribute()

// console.log(inp.getAttribute("type"))
// console.log(inp.getAttribute("placeholder"))

// //~! setAttribute()

// inp.setAttribute("type", "radio")

//~! innerHTML innerText textContent

// let head = document.querySelector("h1")
// console.log(head)

// console.log(head.innerHTML)
// console.log(head.innerText)
// console.log(head.textContent)

//~! Inline styling

// let head = document.querySelector("h1")

// head.style.color = "red"
// head.style.fontSize = "30px"
// head.style.fontFamily = "sans-serif"

// head.style.cssText = `color : green; fontSize : 60px; font-Family : Algerian`

//~! Internal or External Styling

let head = document.querySelector("h1")

//~ classList.add()

head.classList.add("heading")

//~ classList.remove()
head.classList.remove("heading")

//~ classList.toggle()
head.classList.toggle("heading")