"use strict";   //--> treat all JS code as newer version/JS

// alert(); // can't be used as we are using nodejs currently and not a browser

//ECMA, tc39 --> official js documentation
// mdn --> developer friendly js documentation

let name1 = "shashank"   //string
let isLoggedIn = true   //boolean - true/false
let age = 21   //number -- 'bigint' for large values
let state;  //'undefined' data type // let state = undefined;

let string1 = "";   // empty string but data type is defined 
let string2 = null;  //null represents empty value - datatype is not undefined
// null itself is a standalone value as well as a datatype 'object'
// null represents missing value/empty and not zero

// 'symbol' --> another datatype for uniqueness
// object --> user defined datatype(not primitive)

console.log(typeof age);
console.log(typeof name1);
console.log(typeof "xyz");
console.log(typeof isLoggedIn);
console.log(typeof state);
console.log(typeof string1);
console.log(typeof string2);
console.log(typeof null);   // data type of null is object
console.log(typeof undefined);   // data type of undefined is undefined itself
// undefined is a data type in java script