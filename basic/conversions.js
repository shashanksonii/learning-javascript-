// console.log(typeof var) = console.log(typeof(var))
let score = 33

console.log(typeof score);
console.log(typeof(score));
console.log(score);

let value_in_number = Number(score) ; // 'Number(var)' converts var to number datatype
console.log(typeof value_in_number);
console.log(value_in_number);
console.log("\n");

// try with score2 as string 

let score2 = "456"
console.log(typeof score2);
console.log(score2);
let value_in_number2 = Number(score2) ;
console.log(typeof value_in_number2);
console.log(value_in_number2);
console.log("\n");

// try with score3 as alphanumeric string

let score3 = "345abc"
console.log(typeof score3);
console.log(score3);
let value_in_number3 = Number(score3) ;
console.log(typeof value_in_number3);
console.log(value_in_number3);
console.log("\n");

// boolean

let score4 = true
console.log(typeof score4);
console.log(score4);
let value_in_number4 = Number(score4) ;
console.log(typeof value_in_number4);
console.log(value_in_number4);
console.log("\n");

// null

let score5 = null
console.log(typeof score5);
console.log(score5);
let value_in_number5 = Number(score5) ;
console.log(typeof value_in_number5);
console.log(value_in_number5);
console.log("\n");

// undefined

let score6 = undefined
console.log(typeof score6);
console.log(score6);
let value_in_number6 = Number(score6) ;
console.log(typeof value_in_number6);
console.log(value_in_number6);
console.log("\n");

// therefore js converts alphanumeric string and undefined datatypes into number data type but its value is NaN(not a number)
// string like '435abc' cannot be converted to a number therefore js converts it into a number datatype but it is still NaN.
// 'NaN' is a value inside 'number' datatype => datatype of NaN is number

// "35" => 35
// "23abc" or "abc" => NaN
// true/false => 1/0
// null => 0
// undefined => NaN


// to boolean :-
let x = "soni" // "", 1 , 0 
let boolValue = Boolean(x)
console.log(typeof boolValue);
console.log(boolValue);
console.log("\n");
// "" => false ; "xyz" => true
// 1 => true ; 0 => false


// to string :-
let y = 32
let stringValue = String(y)
console.log(typeof stringValue);
console.log(stringValue);