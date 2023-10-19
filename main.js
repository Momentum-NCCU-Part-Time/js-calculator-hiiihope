const zero = document.getElementById("zero")
const three = document.getElementById("three")
const display = document.getElementById("display")
const numb = document.getElementsByClassName("number")
const add = document.getElementById("add")
const sum = document.getElementById("sum")
const one = document.getElementById("one")
const two = document.getElementById("two")
const four = document.getElementById("four")
const five= document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const period = document.getElementById("period")
const sub= document.getElementById("sub")
const mult = document.getElementById("mult")
const divide = document.getElementById("divide")

zero.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})

three.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})

one.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})
two.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})
four.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})
five.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})
six.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})
seven.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})
eight.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})

nine.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})

sub.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})

// numb.addEventListener('click', (e) => {
//     numb.innerText += e.target.innerText
// })  need a for loop, to apply for all class, of numb

add.addEventListener('click', (e) => {
    console.log(display)
    display.innerText += e.target.innerText
})

sum.addEventListener('click', (e) => {
    display.innerText = eval(display.innerText)
})

mult.addEventListener('click', (e) => {
    display.innerText = eval(display.innerText)
})

