// console.log(document.querySelectorAll('p'))

let result = document.querySelector('div')
// console.log(result)

// document.querySelector('')
// document.querySelectorAll('')
// document.getElementById('')
// document.getElementsByClassName('')

// chenging the elements

let head = document.querySelector("#dom")

// console.log(head.innerHTML) // print spaces also and other elements inside it
// console.log(head.innerText)
head.innerText = "Saniyaj"

// attributes
let link = document.querySelector("a")
// console.log(link.href)
// console.log(link.getAttribute('href'))

// set link
link.setAttribute('href', "saniyajmallik.vercel.app")
// console.log(link.getAttribute('href'))
link.innerText += " Saniyaj"
link.style.color = "red"

// chenging the class name
head.classList.add('active')
head.classList.remove('active')
head.classList.replace('previousClass', 'newClass')

// parent child
let parentDiv = document.querySelector('#box')
// console.log(parentDiv.children)
// console.log(parentDiv.children[0])

// child to parent find
const childP = document.querySelector(".child")
// console.log(childP.parentElement)
// console.log(childP.nextSibling)
// .previousElementSibling

// events
const elements = document.querySelectorAll('li')

// elements.forEach((element) => {
//     element.addEventListener('click',(e) => {
//         e.target.style.textDecoration = "line-through"
//         console.log(e.target.innerText)
//     })
// });

// elements.forEach((element) => {
//     element.addEventListener('click',(e) => {
//         e.target.remove()
//     })
// });

const ul = document.querySelector('ul')
const addItem = document.querySelector('button')

addItem.addEventListener('click', ()=>{
    let li = document.createElement('li')  // just put the tag name inside like h2, span, p
    li.innerText = 'somethig new added'
    ul.append(li)
    // ul.prepend(li) // add at top
})

// event Bubling
// one event listener climb top on his parent and it will continue to body tag
ul.addEventListener('click', (e)=>{
if(e.target.nodeName == "LI"){
    e.target.remove()
}
})

// cut copy paste events
let copyP = document.querySelector('.copy')
copyP.addEventListener('copy', ()=>{
    console.log("Can't copy")
})

let hoverBox = document.querySelector('.hover-box')
hoverBox.addEventListener('mousemove', (e)=>{
    // console.log(e)
    console.log(e.offsetX, e.offsetY)
})

// form events -> submit
// e.preventDefault()
// e.target.value

