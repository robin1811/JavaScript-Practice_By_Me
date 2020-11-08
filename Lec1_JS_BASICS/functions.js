function sayHi(argument1){
console.log(argument1 + " hello");
return "I'm Kunwar";
}

// sayHi();
// console.log(sayHi);
// console.log(sayHi());
// let val = sayHi("Hi");
// console.log(val);

// variables can be passed as variables.
// functions are variables
// functions can alose be passed as a parameter

let fun = function(){ 
    console.log("hello from fun");
}

// fun();
function sayHi1(cb) {
    cb();
}
sayHi1(fun);
// sayHi1(fun()) -->> will give error i.e, sayHi expected a variable but got a function.

