// console.log("Hellow World");

// 1.2 Variables
// keywords var, let, const

// *********** Data Types **************

// 7 data types

// 1> Numbers -> 1, 2.6
// 2> String -> "This is string"
// 3> Boolean -> true/false
// 4> null -> let num = null; , let num;
// 5> undefined -> let point;
// 6> Object -> array Object [] , Object {key:"value"}
// 7> symbol


// *********** String **************

let fName = "Saniyaj"
let lName = "Mallik"
// console.log(fName, lName) // OP > Saniyaj Mallik
let fullName = fName + lName
// console.log(fullName) // op > SaniyajMallik

// template literals
let name = `${fName} ${lName}` // console as formatted 
// console.log(name)

// string methods
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.indexOf("S")) //case sensitive, find first match
// console.log(fullName.lastIndexOf("a"))
// console.log(fullName.includes("Sa")) //case sensitive , return bool type
let demoSlice = "0123456789"
// console.log(demoSlice.slice(3, 9)) // (start, end)

let demo = "       This is a demo"
let result = demo.trim()
// console.log(result) //case sensitive
let d1 = "Demo string for split"
// console.log(d1.split(" "))

// string is immutable
let d2 = "Hellow World"
d2[2] = "S" // can not modify string once decleared
// console.log(d2)

// *********** Number **************
let n1 = 12
let n2 = 34

// loose Eqality (==) Vs strict equality(===)

// loose eqality > check the value only not the ttype 
// console.log(22 == "22")
// console.log(22 != "22")

// strict equality > check value and type
// console.log(22 === "22")
// console.log(22 !== "22")

// console.log(typeof (n1))

// type conversion
let n3 = "77"
let n4 = Number(n3)
// console.log(typeof (n3), ">", typeof (n4))

let n5 = String(n4)
// console.log(typeof (n4), ">", typeof (n5))


// **************** Boolean Type *************

// empty string > "" and 0 "zero" are false else true
let n6 = Boolean(0)
// console.log(n6) // > false


// **************** Object Type *************

// 1. Arrays
let arr1 = ["Sani", 23, true]
// console.log(arr1[1], arr1[2])

// modify
arr1[3] = "Shubha"
// console.log(arr1[3])

// methods

// console.log(arr1.join("@"))
// console.log(arr1.indexOf("Sani"))
let arr2 = ["Rohit", "Sombhu"]
let arr3 = arr1 + arr2
// console.log(arr3)
// console.log(arr1.length)
arr1.push("Update")
// console.log(arr1, arr1.length)s
// console.log(arr1.pop(), arr1)

















































