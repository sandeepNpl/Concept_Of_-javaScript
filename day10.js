
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

