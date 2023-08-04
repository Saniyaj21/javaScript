const arr = ["sani", "shubha", "rohit"]

// loops
console.log("For Loop");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//while loop
console.log("While Loop");
var i = 0;
while (i < arr.length) {
    console.log(arr[i])
    i++
}

//while loop
console.log("do While Loop");
var i = 0;
do {
    console.log(arr[i])
    i++
} while (i < arr.length)

// if
var age = 139
if(age > 18){
    console.log("You can drive");
}
else if(age < 18){
    console.log("You can Not drive");
}
else{
    console.log("You can apply for driving");
}

// Also we have break and continue

// priority of logical operator

// first !(not) will be evalue 
// then && , || left to right


// scope - global and local
let score = 50; // global scope
if(true){
    let score = 40; //local scope
}

// ternary operator
let price = 50;
let result = price > 20 ? "Yes" :"no";
// condition ? if True : if false

console.log(result)


const choice = 9;
switch(choice){
    case 1:
        console.log("Shubha");
        break;
    case 2:
        console.log("Saniyaj");
        break;
    case 3:
        console.log("Papu");
        break;

    default:
        console.log("Enter a valid choice :")
}

