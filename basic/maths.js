// --------------------Number------------------------
// Number is a data type in js but also an object (Number object) just like string object

const score = 400  // javascript may or may not assign score to a 'Number' dtype
console.log(score);
console.log(typeof score);
console.log("\n");


const balance = new Number(1003)  // to be sure that balance stores a 'number object' and nothing else => dtype explicitly defined as 'Number'
console.log(balance);  
// paste the above 2 lines in console of a browser and explore the prototype functions for 'number object'
console.log(typeof balance); 
console.log("\n");


console.log(balance.toString());  // 1003 but string dtype
console.log(typeof balance.toString());  // string
// now, methods/functions available for strings can be applied
console.log(balance.toString().length);  // 4 
console.log(balance.toFixed(2));
const balance2 = 103.5467
console.log(balance2.toFixed(3));  // round off to no. of decimal places // 103.547
console.log("\n");


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));  // gives precision upto 4th digit (round off)
console.log(otherNumber.toPrecision(2));  // 120 or 1.2e+2
console.log(otherNumber.toPrecision(3));  // 124
console.log("\n");


const hundreds = 10000000000
console.log(hundreds.toLocaleString());  // adds commas acc to US number standard
console.log(hundreds.toLocaleString('en-IN'));  // adds commas acc to indian standard
console.log("\n");


// Number object itself have some standard methods used in DSA and CP
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log("\n");


// +++++++++++++ Maths +++++++++++++++++++++++++++++


// 'Math' is also an object in js 
console.log(Math); // browser console to see functions prototypes
console.log(Math.abs(-4));  // absolute value
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log("\n");


console.log(Math.random());  // generates a random number between 0 & 1
// we may want a random number b/w 1 & 10 => multiply Math.random() by 10
// but it may generate a value like 0.0012 which result in 0.012 which is less than 1 => so we do +1 for safety
console.log((Math.random()*10) + 1);
// we may want strictly an integer => use floor value 
console.log(Math.floor(Math.random()*10) + 1);
console.log("\n");


const min = 10
const max = 20
// formula to generate random integers between 2 given numbers - 'min' & 'max'
// *** imp formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// *** imp formula