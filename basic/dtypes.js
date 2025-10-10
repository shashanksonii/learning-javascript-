"use strict";   //--> treat all JS code as newer version/JS
// JAVA SCRIPT IS DYNAMICALLY TYPED LANGUAGE => no need to define data type of variables but prone to runtime errors

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
console.log("\n");



// primitive data types 
// string, boolean, number, symbol, null, undefined, symbol, bigInt(astronomical values)
let bigNumber = 1200000000000n // add 'n' at end to make it bigInt
let statee = undefined; // --> typeof(statee) is undefined
let id = Symbol("1546");
let anotherId = Symbol("1546");
// symbol is used to uniquely identify similar data like this string "1546"
// different id will be given to the same string "1546"
console.log(id === anotherId);  //--> o/p = false


// reference/non-primitive data types
//arrays, objects, functions => typeof(array) will give object
// typeof(function) will give function but it is actually a function object only
// function is also a data type and it can be assigned to a variable name 
const heroes = ["batman" , "superman" , "spiderman"]; // heroes = array of strings
// object
let myObj = {
    age : 19,
    namee : "shashank",
    isStudent : true
} 
// function can treated as a variable in javascript
const myFunction = function(){
    console.log("hello world");
} 
myFunction();

console.log(typeof bigNumber);
console.log(typeof statee);
console.log(typeof id);
console.log(typeof myFunction); // function object
console.log(typeof heroes);
console.log(typeof myObj);
console.log("\n");


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack memory => used by primitive dtypes: copy is generated in function passing 
// heap memory => used by reference dtypes: memory reference(address) is passed in function passing 

let namee1 = "shashank"
let name2 = namee1
name2 = "nikhil"
console.log(namee1); // shashank
console.log(name2);  // nikhil


let user1 = {
    email : "soni@gmail.com",
    pass: "123456"
}
let user2 = user1  // reference => points to the same memory in heap
user2.pass = "#soni123"
console.log(user1.pass);  // #soni123
console.log(user2.pass);  // #soni123