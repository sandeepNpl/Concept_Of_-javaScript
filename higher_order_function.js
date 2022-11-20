
const area = (l, w)  =>{
    return l * w;
}

function volume (area, h){
    return area(2, 3) * h;
}

console.log(volume(area, 2))


// Returning Function
// Higher order value return function as a value 

const higherOrder = n => {
    const doSomething = m =>{
        const doWhatEver = t =>{
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}

console.log(higherOrder(2)(3)(4))


// For instance the forEach method uses call back 
// Example

// const numbers = [1, 2, 3, 4, 5, 6]
// const sumArray = arr => {
//     let sum = 0 
//     const callback1 = function(element) {
//         sum += element
//     } 
//     arr.forEach(callback1)
//     return sum
// }
// console.log(sumArray(numbers))

// practice

const num = [2, 4, 6, 8, 10]
const sumEven = (arr1) => {
    let sumEven = 0;
    const callback2 = function(arg){
        sumEven += arg;
    }

    arr1.forEach(callback2)
    return sumEven
}

console.log(sumEven(num))

// simplified version:

const numbers = [1, 2, 3, 4]

const sumArray = arr => {
    let sum = 0 ;
    arr.forEach(function(element)
    {
        sum = sum + element
    })

    return sum
}
console.log(sumArray(numbers));

// Setting Time
// setInterval
// setTimeout



