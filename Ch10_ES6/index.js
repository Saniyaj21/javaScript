// destructering using array

let items = [1, 2, 3, 4, 5, 6]

// normal way
let x = items[1]
let y = items[3]
let z = items[4]

// destructering way
// let [a,b,c,d] = [...items] // [a,b,c,d] = [1,2,3,4,5,6]
// let [a,b,c,d] = items // [a,b,c,d] = [1,2,3,4,5,6]
// console.log(a,b,c,d)

// to skip any value place extra , (coma)
let [first, , third] = items // [a,b,c,d] = [1,2,3,4,5,6]
// console.log(first, third)

// swaping of first and third
let [one, two] = [1, 2]

// [one, two] = [two, one]
let arr = [1, 2, 3, [4, 5]]
let [a, b, , [c, d]] = arr
// console.log(a, b, c, d)



// destructering of objects
let hotel = {
    _name: 'Taj',
    _location: 'Delhi',
    _categories: ['Chinease', 'Italian', 'Indian'],
    _mainMenu: ['food1', 'food2', 'food3'],
    _openingHours: {
        sunday: { open: '9:00AM', close: '11.00PM' },
        monday: { open: '10:00AM', close: '10.00PM' }
    }
}
// names should be match
// let {_name, _location, _mainMenu} = hotel;
// console.log(_name, _location, _mainMenu)

// other way

// chenging the key names
let { _name: hotelName, _location: hotelLocation, _mainMenu: hotelMenu } = hotel;
// console.log(hotelName, hotelLocation, hotelMenu)

// default values
// let {_name="default_name", _location, _mainMenu} = hotel;


// destructering of nested objects
let {_openingHours:{sunday, monday} } = hotel;

// 2nd way
// let {monday} = _openingHours
// console.log(sunday,monday)



// Spread operator

let nums = [1,2,3,7]
// console.log(...nums)

// useCase
let newArr = [9,0, ...nums]  // returns a copy
// console.log(...newArr)

let someString = "Saniyaj"
console.log(...someString)





// Rest pattern or paraneter or operator
let someNums = [1,2,3,4]
let [l,m, ...restValues] = someNums  
// l, m will get the first two values and rest of them will bw assign to restValues variable
console.log(l,m, restValues)





// Short Circuiting (&&, ||)

// false -> 0, false, null, undefined, " " (empty string)

// chenning the && and || operator 
let result = 500 && "Saniyaj" // last value assigned if condition returns true
console.log(result)

let result2 = false && "Saniyaj" // in this case first value is false
console.log(result2)

// in real life this is used in react

// or ||

let result3 = false || "Saniyaj"  // first value assigned if any condition returns true
let result4 = 500 || "Saniyaj"  // first value assigned if any condition returns true
console.log(result3, result4)

// nullish coalishing operator (??)
// in this case false -> null , undefined

// if first one is false then 2nd one will be assigned else 1st one 

// let name = null ?? 'saniyaj'
// let name = 'shubha' ?? 'saniyaj'
let name = 'shubha' ?? null
console.log(name)


// for of loop
let arr0 = [1,2,3,4,4,5,6,7,8]
for(i of arr0.entries()) console.log(i)

// arr0.forEach((i)=>{
//     console.log(i)
// })

// optional chenning
let list = {
    name:'saniyaj',
    roll:2
}

// if list have a name field it will return a value of name
console.log(list?.name)
// if list did not have a name field it will return undefined not an error
console.log(list?.place)


// keys and values property of objects
let keysOfList = Object.keys(list)
let valuesOfList = Object.values(list)
console.log(keysOfList, valuesOfList)


// objects are not iterable

let completeArr = Object.entries(list)
console.log(completeArr)

for ([key, value] of completeArr){
    console.log(key, value)
}