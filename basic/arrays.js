// arrays in js can store elements with different dtypes
// array - stores a collection of multiple items under a single variable name
//arrya in js are resizable (like vectors in cpp)
// zero - based indexing

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// shallow copy - A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. 
// deep copy - A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 

const myArr = [0, 4, 13, 34, false, "soni"]
myArr
// run above line in browser console and explore methods and prototypes
console.log(typeof myArr);
console.log(myArr[4]);
console.log(myArr[5]);
console.log("\n");


// initializing array using objects
const myArr2 = new Array(1,5,7,'soni') // dtype = object
console.log(typeof myArr2);
console.log(myArr2);
console.log("\n");


myArr.push(9)
myArr.push(13)
console.log(myArr);
myArr.pop()
console.log(myArr);
console.log("\n");

myArr2.unshift(43)  // inserts in the starting and shifts all the elements - inefficient
console.log(myArr2);
myArr2.unshift(5)
console.log(myArr2);
myArr2.shift() // deletes from the starting and shift all elements back
console.log(myArr2);
myArr2.shift()
console.log(myArr2);
console.log("\n");

console.log(myArr.includes(13)); // true
console.log(myArr.includes(69)); // false
console.log(myArr.indexOf(13)); 
console.log(myArr.indexOf(69)); // -1

const newArr = myArr.join() // converts into string
console.log(typeof newArr);
console.log(newArr);
console.log("\n");

// slice and splice
// slice do not include 2nd paramter 
// slice do not manipulate the original array while splice does and leaves the remaining array as the original array
// splice(startingIndex, deleteCount)
// deleteCount => no. of elements to delete after startingIndex
// myArr = [0, 4, 13, 34, false, "soni", 9]
console.log("A ", myArr);
const myn1 = myArr.slice(2,5) 
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(2,5)  // => deletes 5 elements starting from index 2
console.log(myn2);
console.log("C ", myArr); // original array is manipulated