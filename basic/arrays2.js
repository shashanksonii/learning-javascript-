const marvel_heros_demo = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros_demo.push(dc_heros) // treats array as an element 
// .push() modifies the original array

console.log(marvel_heros_demo);
console.log(marvel_heros_demo[3]);
console.log(marvel_heros_demo[3][1]);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const allHeros = marvel_heros.concat(dc_heros) // concatenates the elements from both the arrays
// .concat() do not modify the original array and return a new array
console.log(allHeros);

// alternative to concate => spread operator "..."
// spread operator simply converts array into individual elements and merge them into single array

const all_new_heros = [...marvel_heros, ...dc_heros] // we can pass as many arrays as we want 
console.log(all_new_heros); 


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// .flat(depth) returns a new array with all sub-array elements concatenated into it recursively up to the specified depth, without modifying the original array
// keep depth = Infinity for safety
// example => another_array have depth = 2
console.log(another_array);
console.log(real_another_array);
console.log("\n");


// Array object methods
const x = Array.isArray("Hitesh") // tells if this is array or not
console.log(x);
const y = Array.from("Hitesh") // converts to array object
console.log(typeof y); // Array object
console.log(y);

console.log(Array.from({name: "hitesh"})) 
// here parameter passed is an object, and .from() cannot directly convert an object into array object...we need to specify whether we need to convert all the "keys" into array or all the "values" into array
// hence it retuns an empty array object


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // make array "of"
// .of() returns a new array from a set of elements
// we need to pass the set of elements as paramters - these elements could be anything like variables, arrays etc.