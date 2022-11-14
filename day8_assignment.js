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

