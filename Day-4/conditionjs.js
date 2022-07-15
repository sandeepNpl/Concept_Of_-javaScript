// IF CONDITIONS

let num = 3;
if(num>0){
    console.log(`${num} is positive number`);
}


let isRaining = true;
if(isRaining){
    console.log('remember to take your umbrella');
}

// IF ELSE CONDITOINS 

let num1 = 3;

if (num1>0){
    console.log(`${num1} is positive number`);
}else{
    console.log(`${num1} is negative number`);
}

let isRainingToday = true;
if(isRainingToday){
    console.log(`You need a rain coat`);
}else{
    console.log('you need not rain coat');
}

// IF, ELSE IF, ELSE CONDITIONS

let x = 0;
if(x>0){
    console.log(`${x} is positive number`);
} else if (x<0){
    console.log(`${x} is negative number`);
} else if (x == 0){
    console.log(`${x} is zero`);
}else{
    console.log(`${x} is NAN`);
}

let wheather  = 'cloudy';

if(wheather === 'rainny'){
    console.log(`you need  umbrella`);
} else if (wheather === 'cloudy'){
    console.log('you need jacket');
} else if (wheather === 'sunny'){
    console.log('go out freely');
} else {
    console.log('you need not rain coat');
}


// Switch case

let weather = 'cloudy';
switch(weather){
    case 'rainy' :
        console.log('you need rain coat');
        break;
    case 'sunny' :
        console.log('go out freely');
        break;
    case 'cloudy' :
        console.log('you need jacket');
        break;
        
    default:
        console.log('no need  for rain coat');    
}

// Switch More Exmaple 

let dayUserInput = prompt('What day is Today');
let day = dayUserInput.toLowerCase();

switch(day){
    case 'sunday' :
        alert('today is sunday');
        break;
    case 'monday' :
        alert('Today is monday');
        break;
    case 'tuesday' :
        alert('Today is tuesday');
        break;
    case 'wednesday' :
        alert('Today is wednesday');
        break;
    case 'thusrsday' :
        alert('Today is thursday');
        break;
    case 'friday' :
        alert('Today is friday');
        break;
    case 'saturday' :
        alert('Today is saturday');   
        break;                     
}

let number = prompt('Enter the number');

switch(true){
    case number > 0 :
        alert(`${number} is positive`);
        break;
    case number < 0 :
        alert(`${number} is negative`);
        break;
    case number == 0 :
        alert(`${number} is zero`);
        break; 
    default: 
        alert(`${number} is not a number`);          
}

// Practice 
// 1.
let age = prompt('Enter your age:');

if(age >= 18){
    alert('you are old enough to drive');
}else{
    alert(`you are left with ${18-age} years to drive`);
}

//2.

let myAge = prompt('My age is:');
let yourAge = prompt('Enter your age');

if(myAge>yourAge){
    console.log(`I am ${myAge-yourAge} years older than you`);
}else{
    console.log(`You are ${yourAge-myAge} years older than me`);
}

// 3.

let a = 4;
let b = 5;
let result = (a>b);
result = true;

result
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${b} is greater than ${a}`);

4. 
let checkNumber = prompt(`Enter a number`);

if(checkNumber%2 == 0){
    alert(`${checkNumber} is even`);
}else{
    alert(`${checkNumber} is odd`);  
}

// Level-2 :

let grade = prompt('Enter you grade');
switch(true){
    case grade >= 80 && grade < 100 :
        alert('A');
        break;
    case grade >= 70 && grade < 80 :
        alert('B');
        break;
    case grade >= 60 && grade < 70 :
        alert('C');
        break;
    case grade >= 50 && grade < 60 :
        alert('D');
        break;
    case grade >= 0 && grade < 50 :
        alert('F');
        break;
    default: 
    alert('please enter valid marks') ;   

}

2.

let userSeason = prompt('Enter the season');
season = userSeason.toLowerCase();

switch(season){
    case 'september' :
        alert(`${season} is Autumn season`);
        break;
    case 'october' :
        alert(`${season} is Autumn season`);
        break;  
    case 'november' : 
        alert(`${season} is Autumn season`);
        break;   
    case 'december' :
        alert(`${season} is Winter season`);
        break;   
    case 'january' :
        alert(`${season} is Winter season`);
        break; 
    case 'february' :
        alert(`${season} is Winter season`);
        break;   
    case 'april' :
        alert(`${season} is spring season`);
        break;   
    case 'april' :
        alert(`${season} is spring season`);
        break; 
    default: 
        alert(`Enter the valid month`);           
}





