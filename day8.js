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


