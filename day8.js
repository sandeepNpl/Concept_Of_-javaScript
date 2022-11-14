// function returning value 

function printFunction(){
    let firstName = 'sandip'
    let lastName = 'Nepali'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFunction())

function addTwoNumbers(){
    let numOne = 2
    let numTwo = 3
    let total =  numOne + numTwo ;
    return total;
}
console.log(addTwoNumbers())

function showTime(){
    let hour  = 5 
    let minute = 6
    let second = 30
    let time = hour+ ":" +minute + ":" + second;
    return time;
}
console.log(showTime())

// Function with parameter 
function functionName (para1){
    // code here
}

function areaOfCircle(r){
    let area = Math.PI  * r * r ;
    return area 
}
console.log(areaOfCircle(3));

function square (number){
    return number*number;
}
console.log(square(4));

// Function with Two ParaMeter

function sumTwoNumbers(numOne, numTwo){
    return(numOne+numTwo)
}
console.log(sumTwoNumbers(12,13))

function printFullname(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(printFullname('Saru','Nepali'))

// Function With many parameter

function sumArrayvalues(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum+arr[i];
    }
    return sum;
}

const  numbers1 = [1, 2, 3, 4, 5, 6];
console.log(sumArrayvalues(numbers1));


// Function with umlimited Parameter


function sumAllNums(){
    console.log(arguments)
}

sumAllNums(1, 2, 3, 4, 5);

function sumAllNums(){
    sum = 0;
    for(let i = 0 ; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum 
}

console.log(sumAllNums(1, 2, 3, 4, 5, 6));
console.log(sumAllNums(10, 20, 30, 40, 50, 60, 70, 80))

// Unlimited numbers of parameters in arrow function 

// const fun = (arg) => {
//     console.log(arg);
// }

// fun (1, 2,  3,  4)

// //Function declaration

// const fun = (arg)  => {
//     let sum = 0 ;
//     for(const element of arg){
//         sum += element 
//     }

//     return  sum 
// }

// console.log(fun (1, 2, 3, 4, 5));

// Anonymous Funtion 

const anonymousFun = function(){
    console.log(
        `I am Anonumous Function`
    )
}

// Expression Function  is also called Anonymous Function
let expressFun = function(x){
    return  x *  x  *   x;
}
console.log(expressFun(3))


// Self Invoking Function 
// (function (n){
//     console.log(n * n)
// })(12)

// normal function 
function square(a){
    return  a * a 
}

console.log(square(6));



// Arrow Function 
// 1
const cube = n => {
    return n *  n *  n
}
console.log(cube(4));

// 2
const changeToUpperCase = arr =>{
    const newArr = []
    for(const element of arr){
        newArr.push(element.toUpperCase())
    }

    return newArr
}

const friends = ['Rupesh', 'Bibek','Sampadaa','Milan','Saru','Isha']
console.log(changeToUpperCase(friends))

// 3
const changeToLoweCase = array =>{
   const reArr = []
   for(const element1 of array){
    reArr.push(element1.toLowerCase())
   } 
   return reArr
}

let fruits = ['APPLE', 'BANANA', 'GRAPES', 'AVOCADO']
console.log(changeToLoweCase(fruits))

// 4 

let printName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(printName('Sandhya','Gautam'))

// 5
let printName1 = (firstName1,secondName1)   => `${firstName1}  ${secondName1}`
console.log(printName1('Anil','B.K'))

// Function with default parameter

function functionName(name= 'Sandip'){
    let message = `${name}, Welcome to 30 days challenge`
    return message
}
console.log(functionName('Sandip'))

// 6

function echoFullName(firstName ='Krishnamaya', lastName = 'Nepali'){
    let space = ' '
    let fullName2 = firstName + space + lastName
    return fullName2
}
console.log(echoFullName())

// default parameter function withArrow Function

const printName2  = (name1='Rishika') =>{
    let message1 = name1 + ',Welcome to Marse'
    return message1 
} 
console.log(printName2())
 