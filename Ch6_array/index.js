console.log("Array methods")

// mutating -> chenge the original array
// nonmutating -> does not chenge the original array

let latters = ['a', 'b', 'c']

// console.log(latters.reverse())  // mutating method 

let nums = [1, 2, 3, 4, 4, 5, 6]
let concated = nums.concat(latters) //non mutating 
console.log(concated)


// join method  array -> string
let joined = latters.join("-") // non mutating
// console.log(latters)
// console.log(joined)

// slice method
let sliced = nums.slice(1, 4) // 4 will be exclude  nonmutating method
// console.log(sliced)
// console.log(nums)


// splice method

// splice(index where to delete, number  how many to delete, number that will replace that space)
let newNum = nums.splice(2, 1, 9)  // mutating -> return the deleted element
// console.log(newNum)
// console.log(nums)

// at method
console.log(nums.at(- 1))

let nameOf = "saniyaj"
console.log(nameOf.at(-2))


// higher order function
// map filter reduce  

// map  nonMutating
let salary = [100, 200, 300, 400, 500]
let newSalary = salary.map((element) => {
    return element * 2
})
console.log(newSalary)
console.log(salary)

// filter  nonMutating
let arr = ["SANIYAJ", "SHUBHAJIT", "ROHIT", "PAPU"]
let filterArr = arr.filter((elm) => {
    if (elm == 'SANIYAJ') {
        return elm
    }
})
console.log(filterArr)
console.log(arr)


// reduce  -> it return single value // nonmutating
let sumOfSalary = salary.reduce((total, elm) => {   // total and current element
    return total + elm
}, 0)  // 0 as initial value

// console.log(sumOfSalary) 
// console.log(salary)


// find
// find the first match, always return one item
let students = [{ id: 1, name: 'saniyaj' }, { id: 2, name: 'shubha' }]
let result = students.find((student) => {
    return student.id === 1
})
console.log(result)


// findIndex
let index = salary.findIndex((elm) => {
    return elm > 200
})
console.log(salary)
console.log(`index of gratter than 200 salary is ${index}`)

// some and every 

// some return true if any one condition satisfied
let rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let present = rolls.some((roll) => {
    return roll > 3
})
console.log(present)

// every return true if every condition satisfied
let present2 = rolls.every((roll) => {
    return roll > 3
})
console.log(present2)

// flat method  -> nonMutating
let arrFlat = [12, 3, 53, [0, 1, [2, 3], 33]]
// by default ir takes 1 as argument that means one level upto do flat
let result3 = arrFlat.flat()
console.log('level one flat', result3)
let level2 = arrFlat.flat(2)
console.log('level two flat', level2)


// flatMap
let cart = [{
    name: 'mobile phone',
    qty: 2,
    price: 500
}, {
    name: 'tablet',
    qty: 1,
    price: 900
}]

let newCart = cart.flatMap(item => {
    if (item.name === "mobile phone") {
        return [item, {
            name: 'display protector',
            qty: 1,
            price: 0
        }]
    } else {
        return [item]
    }
})

// console.log(newCart)
// console.log(cart)

// sorting  -> mutating method
let sorttt = ['s', 'a', 'n', 'i', 'y', 'a', 'j']
let sortedArr = sorttt.sort()
console.log(sortedArr)
console.log(sorttt)

let sortNums = [1, 9, 3, -5, 2, 4, -8]
// incase of negative number it does not work with default parameter
// let sortedNums = sortNums.sort()
let sortedNums = sortNums.sort((a, b) => {

    // any negative return return same and positive number retuen the swap numbers
    if (a < b) {
        return -1
    }
    else {
        return 1
    }
})
console.log(sortedNums)

// chain of methods
let result6 = sorttt.reverse().join('-')
console.log(result6)


// date and time object 1-1-1970

let currentDate = new Date()
// let currentDate = new Date(2012, 2, 20) // y:m:d , m-> 0 to 11, d-> 0 to 6
// console.log(currentDate)

console.log(currentDate.getFullYear(), currentDate.getMonth())
// we have more methods - > explore more

const timeDiv = document.querySelector('.time')
let ticking = () => {
    let clock = new Date()
    let h = clock.getHours()
    let m = clock.getMinutes()
    let s = clock.getSeconds()
    let setTime = `${h%12} : ${m} : ${s}`;
    
    timeDiv.innerText = setTime
}

setInterval(ticking, 1000)









































