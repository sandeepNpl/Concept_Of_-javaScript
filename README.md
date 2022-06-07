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
### Numbers 
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

        const randNum = Math.random()
        console.log(randNum)  //0.4787761153770409


        const num = Math.floor(Math.random() *11)
        console.log(num) // 3

```



    
  
  
