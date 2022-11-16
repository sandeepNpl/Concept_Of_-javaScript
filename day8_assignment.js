// Level-1 
// 1
function fullName(){
    let firstName = 'Sabina'
    let lastName = 'Maurati'
    let space = ' '
    let fullName1 = firstName +  space +  lastName
    
    return fullName1 ; 
}

console.log(fullName())

// 2
function fullName1(firstName, lastName){
     return `${firstName}, ${lastName}`
}
console.log(fullName1('Sunita','Lamsal'))

// 3

function addNumbers(x,y){
    let  sum = 0;
    sum = x + y;
    return sum
}
console.log(addNumbers(8,9))

// 4 

function areaOfRectangle(length, width) {

    let area = length * width ;
    return area
}
console.log(`Area of Rectangle is:`+areaOfRectangle(2, 3))

// 5 and 6 are similar to  4 

// 


//  7 
function areaOfCircle (radius){
    let areaOC = Math.PI * radius ** 2
    return areaOC ;
}
console.log(areaOfCircle(5))

// 8 
function circumOfCircle(r){
    let circumference =   Math.PI * 2  * r ;
    return circumference;
}
console.log("The circumference of Circle is"+circumOfCircle(5));

// 9

function calDensity(mass,volume) {
    let density = (mass/volume )
    return density;

}
console.log("The Density of Substances is"+calDensity(20,2));

// 10

function speed(distance,time){
    return(distance/time)
}
console.log(speed(10, 5))

// 11

function weightOfSubstance(mass){
    return  Math.PI * Math.PI * mass
} 
console.log(weightOfSubstance(10))

// 12
function convertCelsiusToFarenheit(c){
    let  F = (c*(9/5) + 32);
    return F;
}
console.log(convertCelsiusToFarenheit(37))



// 13 
function bmiCal(w, h){
    let bmi = w/(h*h);
    return  bmi ;
}

let result = bmiCal(50, 1.7)
if(result <18.5){
    console.log("Underweight")
}else if(result >= 18.5 && result<24.9){
    console.log("Normal Weight")
}else if(result>=25 && result<29.0){
    console.log("Overweight")
}else{
    console.log("obese");
}



// 14
function checkSeason(month){
    let season

    switch(month){
        case "december" :
        case "janauary" :
        case "february" :
            season =  "Winter"
            break;

        case "june" :
        case "july" :
        case "August":
            
        season = "Summer"

        break;

        case "march" :
        case "april" :
        case  "may"  :
        
        season = "Spring"

        break;

        case "september":
        case "october" :
        case "november":
        season = "Autumn"

    }
   return season ;

}

console.log(checkSeason("july"))


// 15

//  Using Math.max

function findLarge(){
    return Math.max(10, 20, 30, 40, 50, 60);
}
console.log(findLarge());


// Without Using Math.max f
function findMax(

){
    let largeNum = 0;
    for(const element of arguments){
        if(largeNum < element){
            largeNum = element ;
        }
    }
    return largeNum
}

console.log(findMax(0, 10, 5, 100, 80, 200, 300 ));



// Level -2 

// 1.

function solveLineEquation(a, b, c){

    
}

// 2.

function solveQuadratic(a, b, c){
    discriminant = Math.pow(b, 2) - (4 * a  * c)

    let posVal = (-b+Math.pow(discriminant, (1/2))) /(2*a)

    let negVal = (-b-Math.pow(discriminant, (1/2))) /(2*a)

    return [posVal, negVal]
}
console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, 7, 12));
console.log(solveQuadratic(1, 0, -4));
console.log(solveQuadratic(1, -1, 0));

// 3. 
function printArray(){
    for(let element of arguments){
        console.log(element);
    }
}
printArray(1, 2, 3)


// 4.
let showDataTime = () =>{
    let d = new  Date();

    // for date
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.getMonth();

    // For time
    let  time = d.getHours();
    let  minute= d.getMinutes();

    let timeFormat = `${date}/${month}/${year}  ${time}:${minute}`

    return timeFormat;
}

console.log(showDataTime());


// 5.

function  swapValues(x, y){
    return[y, x]
}

console.log(swapValues(1,2));

// 6

function reverseArray(){
    
}





