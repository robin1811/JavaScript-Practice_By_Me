// // var is variable, initially undefined:
// var myName;
// var myName1="10";
// // mathematical opeartrions on undefined gives NaN error i.e, "Not a Number" error: 
// // console.log(myName+myName1);

// var product = 2.0 * 2.50;
// // console.log(product);

// // var name = "Kunwar";
// // var str = name[6];
// // console.log(str);

// var myArray = [["John", 23], ["dog", 3]];
// myArray.unshift(["Paul",35]);
// console.log(myArray);


var name = {
    "name" : "kunwar"
};
// console.log(name.name);
 var number1 = 10;
 var number2 = 20;
 var number3;
//  console.log(number1+number2);  
//  console.log(number1+number2+"");  
//  console.log(number1+number3);
 
//  console.log("mr. Singh\"s")

 var string1 = "hello";
 var string2 = "hi";
 var str = string1+string2;
//  console.log(str);


//  console.log(str[str.length-1]);

//  Arrays in Javascript: */******************** */

var arr1 = [1,2,3,4,5];
arr1.push(6);
// console.log(arr1);

arr1.pop();
// console.log(arr1);

arr1.shift();
// console.log(arr1);

arr1.unshift(1);
// console.log(arr1);

var Array2D = [[1,2,3],[4,5],[6,7,8,9]]; 
// console.log(Array2D[2][2]);

/*********************************************** */
// FUNCTIONS in Javascript:

var global = 10;
local  = 20;
// console.log(local+10);
function f1(){
    var global = 30;
    // local = 10;
    // console.log(global)
    // console.log(global + "   " + local)
}
f1();
// console.log(global)

// ///////////////////////////////////
var varNum = 10;
var varNum = 11;
// console.log(varNum) 


///////////////////////////////////////

for(let i=1; i<5; i++){
    // console.log(i);
}
// console.log(i);

for(var i=1; i<5; i++){
    // console.log(i);
}
// console.log(i);

////////////////////////////////////////////

// let kunwar = 10;
// let kunwar = 20;

var singh;
// console.log(singh+10);

let Singh;
// console.log(Singh+10);
//////////////////////////////////////////

/************************************************************** */

// objects => are key values, where in key -> unique        values -> duplicate

let obj = {
    "name" : 26,
    "place" : true,
    "Full Name" : "Kunwar Kuljeet Singh",
    "movie" : null,
    "haalchaal" : "kidaaannn",
    "valueOfLastKey" : "patani",
    "output" : "out"
}
// dot notations:
/////////////////////////
// console.log(obj);
let nameWalaObj = obj.name;
// console.log(nameWalaObj);
 

// bracket notations:

let fullname = obj["Full Name"];
// console.log(fullname);

// let valueOfLastKey =  "haalchaal";
// console.log(obj[valueOfLastKey]);
let output = "haalchaal";
console.log(obj.output);
console.log(obj[output]);
console.log(obj["output"])
// ////////////////////////////////

/***************************************************** */

// there are no special keyword that we need to write for int, float, boolean, decimal, etc --> only let, var or const is used
// there are no 1d, 2d array, there are just wriiten as follows:
let myArr = [1,2,3,4,5];
let myArr2 = [[1,2,3],[1,4,6,7],6,8]

let arrr = [1,2,3,4,[true,false],undefined, "hello"];
// console.log(arrr);
////////////////////////////////////////
// functions on array:

// push , pop , shift , unshift , slice ,splice:
