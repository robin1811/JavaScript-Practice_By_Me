//  THIS CODE IS ALMOST SAME AS BASIC.js BUT I explianed this to karan, and even added some more about javascript basics.


// console.log("hello");

// class XXXX
// top to bottom

// int , float, decimal, string, boolean, undfined, null 

// let var const

// let - blocked scoped 
// var - blocked scoped XX

// let karan = 10;
// console.log(karan);
// let karan = 20;


// for(var i=1; i<5; i++){
//     console.log(i);
// }
// console.log(i);

// let karan = 10;
// function sayHi(){
//     karan = 20;
//     console.log(karan);
// }
// sayHi();
// console.log(karan);

// let karan1 = 10;
// function sayHi1(){
//     let karan1 = 20;
//     console.log(karan1);
// }
// sayHi1();
// console.log(karan1);

/********************************************* */

// .includes .push .pop

// .push(value) .pop() .shift() .unshift(value)

// slice(2,1) splice(,,) 

let arr = [1,2,3,4,5,6,7];
// console.log(arr.slice(2,4));
// console.log(arr.splice(2,1,'karan'));
// console.log(arr);

// var str = "karan";
// console.log(str);
// console.log(str.slice(3,4));
//////////////////////////////////////////////////

// obj -> key = unique      values = duplicate

let obj = {
    "name" : "karan",
    "address" : "hari nagar",
    "phone number" : "99999",
    "song" : "moosewala"
} 

// console.log(obj);
// console.log(obj.name);
// console.log(obj["phone number"]);
let karan = "name";
// console.log(obj.karan);


// karan.toUpperCase();

// toLowerCase()
// console.log(karan);

// kunwar = 10;
// console.log(kunwar);


let n = Math.random();
// console.log(Math.floor(n*6)+1); 
 

(function () {
    console.log("karan");
    return "hi";
})();
// IIFE
// let val = sidhu();
// console.log(sidhu);