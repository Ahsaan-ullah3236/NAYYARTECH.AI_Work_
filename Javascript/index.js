console.log("hello");
console.error("this is my error");
console.warn("this is my error");

// let var const 
// var 
var x = 10;
var x = 20; 
console.log(x);
// let 
let y = 30;
y = 40;
console.log(y); 
// cosnt 
const z = 50;
console.log(z);

// String Boolean integer float null number and undefined
let naMe = "Ahsan";      // String
let isDeveloper = true;  // Boolean
let age = 25;            // Integer (Number)
let salary = 50000.50;   // Float (Number)
let experience = null;   // Null (empty value)
let total = Number(100); // Number (explicit conversion)
let job;                 // Undefined (no value assigned)

console.log(naMe, typeof naMe);          // "Ahsan" string
console.log(isDeveloper, typeof isDeveloper); // true boolean
console.log(age, typeof age);            // 25 number
console.log(salary, typeof salary);      // 50000.5 number
console.log(experience, typeof experience); // null object (JavaScript quirk)
console.log(total, typeof total);        // 100 number
console.log(job, typeof job);            // undefined undefined

// Template String and concatination 
// concatination
console.log(`My name is ` + naMe + `and i am ` + age);
// Template String
console.log(`My name is ${naMe} ans I am ${age} years old`);








