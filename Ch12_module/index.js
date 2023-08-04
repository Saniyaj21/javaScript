// modern js modules and tooling

// import {sum} from'./product.js';

console.log('Index.js')


// closure
// inner function have acces of outer function arguments

let outerFunction = (name) => {
    let outVariable = " Outer variable";
    let innerFunction = () => {
        console.log(outVariable, name) // it is a reference of outer name variable, not a copy
    }
    return innerFunction // to make clouser return inner function
}

let inFunc = outerFunction('saniyaj')

inFunc()
