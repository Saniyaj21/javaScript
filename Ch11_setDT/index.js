// set data type


let mySet = new Set([1,2,3,2,3,2,4])
console.log(mySet)
console.log(mySet.size)
console.log(mySet.has(2))
console.log(mySet.add(20))
console.log(mySet.delete(2))

// set items cannot get by index

// for(let i of mySet){
//     console.log(i)
// }

mySet.forEach((i) =>{
    console.log(i)
})

// Q. Find how many unique characters are in this name 
let name = "Saniyaj"
let newName = new Set(name)
console.log(newName.size)


// Map data structer
// similar to object 
// but here anything can be a key like true or false or array\
let myMap = new Map()

myMap.set("user", "saniyaj")  // key and value 
myMap.set("roll", 2).set(true, "Yes, a student").set(false, 'No, not a student')

// myMap.delete('KeyHere')
console.log(myMap)
console.log(myMap.get('user'))
console.log(myMap.size)






































