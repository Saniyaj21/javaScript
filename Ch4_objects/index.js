// console.log("Objects")

let car = {
    color: "black",
    year: "2022",
    campany: "Honda"
}

// object read methods
// console.log(car.campany)
let propartyName = "color"
// console.log(car[propartyName])


// modify object
car["color"] = "red";
// console.log(car.color)


// delete proparty of object
let obj = {
    prop1: "value1",
    prop2: "value2"
}
delete obj.prop2  // return true
// console.log(obj)

//methods -> function that defined in objects

let person = {
    ageCalculate: function (birthYear) {
        return 2023 - birthYear
    }
}

// console.log(person.ageCalculate(2012))

// this keyword
// like self keyword in python
let ex2 = {
    name: "Saniyaj",
    age: 21,
    summary: function () {
        // console.log(`Age of ${this.name} is ${this.age} `)
    }
}
ex2.summary()

// forEach method
let names = ["saniyaj", "shubha", "papu", "rohit"]

names.forEach((elm) => {
    // console.log(elm)
})


// objects inside array

let list = [{ name: "johm", salary: 100 }, { name: "shubha", salary: 110 }]

for(i = 0; i< list.length; i++){
    // console.log(list[i].name, list[i].salary)
}

list.map((element)=>{
    // console.log(element.name, element.salary)
})

// math object built in object in javaScript
let num = 12.53
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.trunc(num))  // remove numbers after . like .53 here

let rand = Math.random()*2
// console.log(Math.ceil(rand)) // return 0 to 1
// console.log(Math.floor(rand))  // return 1 to 2

// this keyword call  and use
let mainPlane = {
    name:"Saniyaj",
    airLine : "Indigo",
    bookings : [],
    book : function(sit){
        this.bookings.push({name:`${this.name}`, sit:`${sit}`, airline:`${this.airLine}`})
    }
}
mainPlane.book(3)
mainPlane.book(5)
// console.log(mainPlane)


let childPlane = {
    name:"Shubhajit",
    airLine : "AirIndia",
    bookings : [],
}

let book = mainPlane.book; 
// book() we can not call like this it cant read this.properties now
book.call(childPlane, 4) // so call function is used 1st argument newObject 2nd function arguments
book.apply(childPlane, [4]) //same as call but takes a array of arguments
// console.log(childPlane)

// bind 

function greet(){
    // console.log(`welcome ${this.name} to ${this.place}`)
}

let obj2 ={
    name:"Saniyaj",
    place: "Kolkata"
}

let greets = greet.bind(obj2); // bind assign a function to a object method
greets()

// pass by reference
// for array and objects
let arr = [1,2,3,4,5,6]
let ref = arr

ref.push(9)
// if i chenge ref it will also chenge the arr array
// because this two bariable pointing to the same array

// console.log(arr)
// console.log(ref)

// pass by value
let arr2 = [9,8,7,6]
let ref2 = [...arr2] // ref2 has the values of arr2 not pointing to the arr2 

ref2.push(90)//so chenging the reference not effect arr2
// console.log(arr2)
// console.log(ref2)

// forIn loop
let obj3 = {
    name:"saniyaj",
    lastName:"mallik"
}
for(key in obj3){
    console.log(`key is ${key} and value is ${obj3[key]}`)
}

// last time 3.40