
# 📔 Day 1

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
  
  
