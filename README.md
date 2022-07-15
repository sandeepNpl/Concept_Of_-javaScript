- [DAY-1](#📖-day-1)
- [DAY-2](#📖-day-2)



# 📖 Day 1

- [Adding JavaScript to a Web Page](#adding-javascript-to-a-web-page)
    - [Inline Script](#inline-script)
    - [Internal Script](#internal-script)
    - [External Script](#external-script)

- [Different Data types](#different-data-types)   
     - [Numbers](#numbers)
     - [Strings](#string)   
     - [Boolean](#boolean)
     - [Undefined](#undefined)
     - [NUll](#null)
     - [CheckingDataTypes](#checking-data-types)
- [Variables](#variables)

# 📖 Day 2
  - [Data Types](#data-types)
      - [Primitive Datatypes](#primitive-data-types)
         - [Numbers](#number-data-types)
           - [Math Object](#math-object)
           - [Random Number Generator](#random-number-generator)
        - [Strings](#strings)  
            - [String Concatenation](#string-concatenation) 
            - [String concatenation using Addition operator](#string-concatenation-using-additon-operator--it-is-the-old-way-to-concatenate-string-it-is-es5-string-addition) 

            - [Scape Sequence in String](#scape-sequence-in-string)  

            - [Template String](#template-literals-template-strings)


_______________________________________


# Day-1
## Adding JavaScript to a Web Page

JavaScript can be added to a web page in different ways:

- **_Inline script_**
- **_Internal script_**
- **_External script_**
- **_Multiple External scripts_**

### Inline Script

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Inline Script</title>
</head>
<body>
    <button onclick="alert('Welcome to  30 days of JS')">Click Here!</button>   
</body>
</html>
```

### Internal Script

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Internal Script</title>
</head>
<body>
    <button onclick="alert('Welcome to 30 days of js');">Click Here!</button>
    <script>
        console.log('Welcome to 30-days of JS');
    </script>
</body>   
</html>
```

### External Script

External Script in the head :

```js
console.log('WelCome to 30 days of JS');
```
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <title>External Script</title>
    <script src="app.js"></script>
</head>
<body>
    
</body>
</html>
```
External Script in the body:

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <title>External Script</title>
</head>
<body>
<script src="app.js"></script>   
</body>
</html>
```

## Different Data types :

 Primitive Data types are:  Number,String,Boolean,Undefined,Null and Symbol

 ### Numbers

- Integers: Integer (negative, zero and positive) numbers
  Example:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- Float-point numbers: Decimal number
  Example
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

 ### String
 ```js
 's'
 'sandip'
 'Nepal'
 'JavaScript is programming Language'
 `We can also create string using backtick`
 ```

 ### Boolean 
 Boolean value is either true or false.
 ```js
 true // If light is on, Boolean value is true.
 false // If light is off, boolean value is false.
 ```
 ### Undefined

 ```js
 let name;
 console.log(name); // undefined , name is not assign to value.
```

### Null
```js
let emptyValue = null;
```

### checking Data types
```js
 console.log(typeof 'Sandip') //string
 console.log(typeof 24) //number
 console.log(typeof null)// object
 console.log(typeof true)// boolean
 console.log(typeof undefined) //undefined
```

### Variables
 
 ```js
// declaring different variables of different data types
let firstname ='Sandip'
let lastname='Nepali'
let address='Kathmandu'
let age = 21
let country ='Nepal'
let isMarried = false


console.log(firstname,lastname,address,age,country,isMaried)
 ```


 ```js
 // Declaring variable with  number value

 let age = 21
 const pi = 3.14
 const gravity = 9.8
 const sppedOfLight = 3*10^8

 console.log(age,pi,gravity,speedOfLight)
 ```

 # Day-2

 ## Data Types
 ____________________

 ### Primitive data types
   1. Number

   2. string

   3. boolean

   4. undefined

   5. symbol

   Example:

 ```js
let a = 5;
let b = 6;

console.log(a==b); //false

let num1 = 10;
let num2 = 10;

console.log(num1==num2); // true

let js = 'javaScript'
let rea = 'React'

console.log(js==rea); // false

let lightOn = false;
let lightOff = false;

console.log(lightOn==lightOff); // true
```
## Numbers 
---------------------------
#### Number data types  :

```js
let age = 21
        const gravity = 9.8 
        let velocity = 120
        const PI = 3.14
        const boilingPoint = 100
        const bodyTemp = 37

        console.log(age,gravity,velocity,PI,boilingPoint,bodyTemp)
```

#### Math Object
---------------------
```js
 const PI = Math.PI

        console.log(PI) // 3.1415926535 

        console.log(Math.round(PI)) // 3

        console.log(Math.round(9.81)) // 10

        console.log(Math.floor(PI)) // 3 rounding down

        console.log(Math.ceil(PI)) // 4 rounding up

        console.log(Math.min(2,-1,5,9,0)) // -1

        console.log(Math.max(-4,10,3,5,8)) // 10

        console.log(Math.abs(-10)) // 10

        console.log(Math.sqrt(25)) // 5

        console.log(Math.pow(3,2)) // 9

        console.log(Math.E); // 2.718281

        let E = 2.718281828459

        console.log(Math.round(E)) // 3

        console.log(Math.log(2)) // 0.6931471

        console.log(Math.log(10)) // 0.74386326

        const randNum = Math.random()
        console.log(randNum)  //0.4787761153770409


        const num = Math.floor(Math.random() *11)
        console.log(num) // 3

```

### Random Number Generator :

```js
let randomNum = Math.random();
        console.log(randomNum); // 0.1204441221

        let numbetwnZeroAndTen = randomNum*10;
        console.log(numbetwnZeroAndTen) // 2.1217200;

        let randomNumberRoundToFloor = Math.ceil(numbetwnZeroAndTen);
        console.log(randomNumberRoundToFloor); // 3
```

## Strings 
___________ 

 ```js
        let MyFirstName = 'Sandeep'
        let MyLastName = 'Nepali'
        let MyBirthPlace = 'Nepal'
        let language = 'JavaScript'
        let space = ''
        let quote = 'It is so simple to be happy but so difficult to be simple'
        let sentenceWithBackTick = `The  shortest distance between two points is straight line`
        
        console.log(MyFirstName,MyLastName,MyBirthPlace,language,space,quote,sentenceWithBackTick)

 ```

### String Concatenation

 ```js
    let MyFirstName = 'Sandeep'
        let MyLastName = 'Nepali'
        let MyBirthPlace = 'Nepal'
        let language = 'JavaScript'
        let space = '  ';

        let MyFullName =  MyFirstName + space + MyLastName;
        console.log(MyFullName);
 ```
#### String Concatenation using additon operator :                 It is the old way to concatenate string. It is ES5 string addition
 ```js

    let MyFirstName = 'Sandip'
        let MyLastName = 'Nepali'
        let MyBirthPlace = 'Nepal'
        let language = 'JavaScript'
        let space = '  ';

        let MyFullName =  MyFirstName + space + MyLastName;
        console.log(MyFullName); // Sandip Nepali
    </script>
```

#### Long paragraph in string : We can use backslash character ( \ ) at the end of each line to indicate that the string will continue next line.
```js
let  paragraph = " My Name is Sandeep . I live in Kathmandu Nepal.\
                   I am software engineering student. \
                   I explore the  HTML,CSS and JavaScript. \
                   I love exploring and learning new thing.\
                   In the end of  2021 .\
                   I was thinking to expand my skill." 

    console.log(paragraph)    
```

### Scape Sequence in String
  - new line : \n
  - Tab : \t 
  - Back slash : \\
  - Single quote : (\')
  - Double quote : (\")
  

  ### Template Literals (Template Strings)

  - To create template strings, we use two back-ticks.We can inject data as an expressions inside a template.

    ```js 
    console.log(`The multiple of 4 and 5 is 20`) // The multiple of 4 and 5 is 20
    let num1 = 4;
    let num2 = 5;
    console.log(`The multiple of ${num1} and ${num2} is ${num1*num2}`) // The multiple of 4 and 5 is 20
    ```
   
   Example:
   ```js 

    let firstName = 'Sandeep'
    let lastName = 'Nepali'
    let country = 'Nepal'
    let language = 'JavaScript'
    let job = 'Student'
    let fullName = firstName + ' ' + lastName;

    console.log(`My Name is ${fullName}. I am From ${country}. I am ${job} and I know basics of ${language}.`)
   ```

   Using String template we can add expressions.

   Example :
   ```js 

   let a = 3;
   let b = 4;
    console.log(`${a} and ${b} are equal :${a==b}`)  // 3 and 4 are equal :false
    console.log (`${a} is less than ${b}:${a<b}`) // 3  is less than 4  : true
   ```
 ## String Methods :
 ____________________________
   A string is primitive data type.
   The string object has many string methods.

   1. Length : It returns the number of characters in the strings including space.

   ```js
        //  To calculate the Length of strings. 
        let intro = 'Software  Engineer';
        console.log(intro.length); // 17

        let firstName = 'Sandip';
        console.log(firstName.length); // 6
   ``` 

   2. Using index we can access the each character of strings. The first index of the string is Zero.

   ```js
        let name = 'Sandip';
        let firstletter = name[0]; 
        let secondletter = name[1]; 
        let lastletter = name[5];
        
         let lastIndex = sting.length - 1
        console.log(firstletter); // s 
        console.log(secondletter); // a
        console.log(lastletter);  // p
        console.log(string[lastIndex]); // p 
   ```

   3.  UpperCase() : Used to changes the character of string into Uppercase
   ```js

   // TO upperCase()
        let upper = 'information'
        console.log(upper.toUpperCase()); // INFORMATION

        let string = 'Technology'
        console.log(string.toUpperCase()); // TECHNOLOGY

        let country = 'nepal'
        console.log(country.toUpperCase()) // NEPAL
   ```

   4. toLowerCase() : It used to change the character the of into lower.

   ```js
    let string1 = 'I LOVE NEPAL'
    console.log(string1.toLowerCase());
   ```

   4. substr() : It takes two arguments, the starting index and number of character to slice.

   ```js
   
        let js = 'JavaScript'
        console.log(js.substr(4,6)) // Script

        let myName = 'SandipNepali'
        console.log(myName.substr(6,6)) // Nepali
   ```
   5. substring() : It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

    ```js
    let string2 = 'Trapped';

    console.log(string2.substring(0,4))
    console.log(string2.substring(4,7))
    console.log(string2.substring(4))

    ```

    6. split() : The split method splits a string at the specified place.
 
    ```js
        console.log(string3.split()) // ['30 days of JavaScript']
        console.log(string3.split(' ')) //  ['30', 'days', 'of', 'JavaScript']
        console.log(string3.split(''))  // ['3', '0', ' ', 'd', 'a', 'y', 's', ' ', 'o', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

        let countries = 'Nepal,India,china,russia' // ['Nepal', 'India', 'china', 'russia']
        console.log(countries.split(',')) // ['Nepal,India,china,russia']
        console.log(countries.split(', '))
    ```

# Day-3

## Function
___________________
```js
    
 let totaladultYears;

 function calculateAdultYears(userAge) // declaring Function
    { 
     let result;
     result = userAge - 18;
     return result;
 }
 
 totaladultYears = calculateAdultYears(age);
 alert(totaladultYears);

 age = 45;
 totaladultYears = calculateAdultYears(age); 
 alert(totaladultYears);
```
# Day-4 

Conditionals operator .




    








 



 




 



    
  
  
