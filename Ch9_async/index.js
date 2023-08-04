// 7.42

// async execution
console.log(1)
console.log(2)
setTimeout(() => {
    console.log('This is printing after 3 seconds')
}, 3000)
// this console logs are executed before that setTimeout, this type of execution called async execution
console.log(3)
console.log(4)

// example of async function is  -> api fetching


// promise
const getData = () => {
    return new Promise((resolve, reject) => {
        // any one of this will execute in real life example
        // resolve("successfull")
        reject("error")
    })
}

getData().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

// 8.41 more about for promise



// using async await

// let todos = async () =>{
//     try {
//         let response = await fetch('data.json');
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// todos()