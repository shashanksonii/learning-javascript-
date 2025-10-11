const namee = "shashank"
const repoCount = 20
console.log(namee + repoCount + " value string") // not a good practise
console.log(`my name is ${namee} and my repo count is ${repoCount}`)  // this is used in modern days // string interpolation

// another way to initialize string using heap and object (DMA)
const userName = new String("nikhilsoni");  
// String() => constructor of string object 
// new => allocates memory in heap and returns a pointer 
// userName => pointer
const userName2 = "shashanksoni"
console.log(typeof userName);  // object(string object)
console.log(userName); // [String: 'nikhilsoni']
console.log(typeof userName2);  // object(string object)
console.log(userName2);

// under the hood userName string object is created with following key-value pairs(do not confuse with array indexing)
/* 
    userName = {
        0: "n",
        1: "i",
        2: "k",
        3: "h",
        4: "i",
        5: "l",
        6: "s",
        7: "o",
        8: "n",
        9: "i",
        length: 10,
        [[Prototype]]: String
    }
*/

// const userName = new String("nikhilsoni"); 
// userName
// paste above 2 lines in console of a browser and see prototypes, explore all the functions available with this string object
// all these functions can be used using dot operator and writing function name and passing the parameters
// it also shows primitive type value which is string: "nikhilsoni"

// using different methods - use MDN documentation
console.log(userName[2]);
console.log(userName.__proto__); // will run in browser console 
console.log(userName.length);
console.log(userName.toUpperCase()); //does not change the value in original string object but creates a new copy
console.log(typeof userName.toUpperCase());
console.log(userName.charAt(3));
console.log(userName.indexOf('i'));
console.log(userName);

/*
let userName3 = userName
userName3 = String("nikhil")
console.log(userName);
console.log(userName3);
console.log(typeof userName3);
*/

const newUser1 = userName.substring(2,5)  // later parameter index not included
console.log(newUser1);
console.log(typeof newUser1);

const newUser2 = userName.slice(-7,5) // can use negative value, works same as substring
console.log(newUser2);
console.log(typeof newUser2);

const newUser3 = "     nikhil     "
console.log(newUser3);
console.log(newUser3.trim()); // used to remove white spaces and new lines(\n)

const url = "https://nikhil.com/nikhil%20soni"
console.log(url.replace('%20','-'))
const newUrl = url.replace('%20','-')
console.log(newUrl);

console.log(url.includes('nikhil'));  // true 
console.log(url.includes('neha'));  // false

const newUser4 = "quantum-mechanics is-mathematics intensive-subject"
const split1 = newUser4.split('-')  // split based on '-'
const split2 = newUser4.split(' ')  // split based on ' ' (white space)
console.log(split1); // array of splitted strings
console.log(split2); // array of splitted strings
console.log(split1[2]);
console.log(split2[1]);