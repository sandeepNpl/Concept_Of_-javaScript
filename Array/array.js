// Create a empty Array 

// Using array constructor 

const arr1 = Array()
// or 
// let arr = new Array()

console.log(arr1);

// Uasing Square Bracket 
const arr2 = []
console.log(arr2);


// Create a array with values 



const numbers = [0,1,3,5,7,9,11];
const fruit = ['banana','apple','orange','pineaaple','jackfruit'];
const vegitables = ['potato','cabage','Onion','Carrot']
const animalProducts = ['Meat','milk','butter','ghee']
const contries = ['Nepal','USA','UK','canada']

// print section

console.log('Numbers:'+numbers);
console.log('Numbers of numbers:'+numbers.length);
console.log('Fruits:'+fruit);
console.log('Numbers of fruits:'+fruit.length);
console.log('Vegitables:'+vegitables);
console.log('Numbres of Vegitables:'+vegitables.length);
console.log('Animal Products:',animalProducts,)
console.log('Numbers of Animla Products:'+animalProducts.length);
console.log('Contries:'+contries);
console.log('Numbers Of contries:'+contries.length);


// Array can have items of different Datatypes 

const arr3 = [
    'sandip',
    250,
    true,
    {countries: 'Nepal', city: 'Kathmandu'},
    { skills: ['HTML','CSS','JS','React']}
]
console.log(arr3);

// Creating an array using split 

let js = 'javascript'
let charactersOfJavaScript = js.split("")
console.log(charactersOfJavaScript);