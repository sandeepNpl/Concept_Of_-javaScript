
// Window global object
a = 'Python'
b = 10 

function letLearnScope(){
    console.log(a, b)
    if(true){
        console.log(a, b)
    }
}
console.log(a, b)

// Global scope

let x = 'JavaScript'
let y = '100'

function letsLearnScope(){
    console.log(x, y)

    if(true){
        let x = 'Saru'
        let y = 100
        console.log(x, y)
    }

    console.log(x, y)
}

letsLearnScope()
console.log(x, y)


// Local Scope

let d = 'Mami'
let e = 200

function letsLearnLocalScope(){
    console.log(d, e)

    let value = false;
    if(true){
        let d = 'Rust'
        let e = 20
        let f = 30
        let g = 40
        let h = 50
        value  = !value
        console.log(d, e, f, g, h, value)
    }
    console.log(d, e, value)
}

letsLearnLocalScope()
console.log(e)

// A variable is declared with var only scoped to funtion but variable declared with let 
// or const is a block scope 

function letsLearnScope2(){
    var gravity = 9.81
    console.log(gravity)
}
letsLearnScope2()
// console.log(gravity)

if(true){
     var  gravity = 9.811
    console.log(gravity);
}
console.log(gravity)

for(var i = 1; i<=5; i++){
    console.log(i)
}
console.log(i)

// Object

const person1 = {} // Empty Object

// Creating an object with value

const rectangle = {
    length : 20,
    width : 30
}
console.log(rectangle);

const person2 = {
    firstName : 'Sandip',
    lastName : 'Nepali',
    age : 22,
    country : 'Nepal',
    city: 'Kathmandu',
    skills : ['HTML', 'CSS', 'JavaScript', 'PHP' , 'C'],
    isMaried : false
}

console.log(person2);


// Geeting value from the Object

const person3 = {
    firstName :'Saru',
    lastName : 'Maurati',
    age : 21,
    country: 'Nepal',
    city : 'Kathmandu',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'React'
    ],
 getFullName : function(){
    return `${this.firstName} ${this.lastName}`
 },
 'phone number': '+9779816173263'
}

// value can be accessing using .
console.log(person3.firstName)
console.log(person3.lastName)
console.log(person3.age)
console.log(person3.city)

console.log('..............................')


// value can ne accessed using square bracket and key name

console.log(person3['firstName']);
console.log(person3['lastName']);
console.log(person3['age']);
console.log(person3['country']);
console.log(person3['city']);
console.log(person3['skills']);


// Phone number 
console.log(person3['phone number']);
console.log("----------------------")

// Creating object methods 

console.log(person3.getFullName());



// Setting new key for object

const person4 = {
    firstName : 'Isha',
    lastName :'Hitang',
    age:20,
    city : 'Kathmandu',
    skills : [
        'Python',
        'HTML',
        'CSS'
    ],

    getFullName : function(){
        return `${this.fullName} ${this.lastName}`
    }
}
person4.nationality = 'Nepali'
person4.country = 'Nepal'
person4.skills.push('SASS')
person4.isMaried = true
person4.title = 'Student'

person4.getPersonInfo = function(){
    let fullName = this.getFullName()
    let statement = `${this.firstName} is a ${this.title}.\n She is Lives in ${this.country}.\n Her skills are ${this.skills}.`

    return statement
}

console.log(person4)
console.log(person4.getPersonInfo());

// Object Methods

// Onject.assign:

const person5 = {
    firstName : 'Sarita',
    age : 20,
    country : 'Nepal',
    city: 'Pokhara',
    title: 'Student',
    address : {
        street: 'NewRoad',
        HouseNo:'2828'
    },
    getPersonInfo: function(){
        return `I am ${this.firstName} and I live in ${this.country}. I am ${this.age} years old.`
    }
}

const copyPerson1 = Object.assign({}, person5)
console.log(copyPerson1)

const copyPerson2 = Object.keys(person5)

console.log(copyPerson2);

const copyPerson3 = Object.entries(person5)

console.log(copyPerson3)


// Checking Properties using hasOwnProperty()


console.log(person5.hasOwnProperty('firstName'))







