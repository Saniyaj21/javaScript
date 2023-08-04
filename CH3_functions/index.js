console.log("Functions");

// defaulf paramiter name=shubha
function hellow(name = "Shubha") {
    console.log(`Hellow ${name}`)
}

// anonymous function
let fun = function () {
    console.log("more one function")
}

hellow("Saniyaj")
fun()

// arrow function
const sum = (a, b) => a + b;

console.log(sum(3, 9))

// higher order function
const upperCase = function (str) {
    return str.toUpperCase()
}
const lowerCase = function (str) {
    return str.toLowerCase()
}

// example of higher order function
const transFormer = function (str, func) {
    return func(str)
}

console.log(transFormer("saNi", lowerCase))

// example two
const complement = function(msg){
    return function(name){
        console.log(`${msg} ${name}`)
    }
}

console.log(complement("You are a good coder")("Saniyaj"))


// Immediately invoked function expression

// (function(){
//     console.log("Invoked");
// })()


// set time out and set intervel

function greeting(){
    console.log("welcome saniyaj")
}

// delay a execution
// setTimeout(greeting,5000)

// setTimeout((name)=>{
//     console.log(`Arrow function in time out ${name}`)
// },5000, "Saniyaj")



// loop the execution with a delay
// setInterval(()=>{
//     console.log("looping")
// }, 1000)

// hoisting function 

// calling before defination like var variables


// last time - 2.45






















