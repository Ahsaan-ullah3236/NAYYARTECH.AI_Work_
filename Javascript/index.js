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




// Datatypes 
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





// Arrays 
// An array is a collection of multiple values stored in a single variable
// Creating an array
let fruits = ["Apple", "Banana", "Orange"];

// Adding elements
fruits.push("Grapes");      // Adds "Grapes" at the end
fruits.unshift("Mango");    // Adds "Mango" at the beginning

// Removing elements
fruits.pop();    // Removes last element ("Grapes")
fruits.shift();  // Removes first element ("Mango")

// Accessing and modifying elements
console.log(fruits[1]);  // "Orange"
fruits[1] = "Cherry";    // Replaces "Orange" with "Cherry"

// Array methods
console.log(fruits.includes("Banana"));
console.log(fruits.indexOf("Cherry")); 
console.log(fruits.join(" - "));
console.log(fruits); 





// object 
// An object is a collection of related information stored as key-value pairs.
let person = {
    name: "Ahsan",
    age: 25,
    isDeveloper: true,
    skills: ["JavaScript", "React", "Next.js"],
    greet: function() {
        return "Hello, " + this.name + "!";
    }
};
console.log(person.name);       // "Ahsan"
console.log(person.skills[1]);  // "React"
console.log(person.greet());    // "Hello, Ahsan!"


// object with todo example 
let todo = {
    title: "Complete React Project",
    status: "In Progress",
    priority: "High",
    dueDate: "2025-03-30",
    tasks: ["Setup project", "Design UI", "Implement features"],
    markCompleted: function() {
        this.status = "Completed";
    }
};

// Accessing object properties
console.log(todo.title);        // "Complete React Project"
console.log(todo.tasks[1]);     // "Design UI"

// Updating status using a method
todo.markCompleted();
console.log(todo.status);       // "Completed"




// loops for and while 
// Using a for loop
console.log("For Loop:");
for (let i = 1; i <= 3; i++) {
    console.log("Step " + i);
}

// Using a while loop
console.log("While Loop:");
let j = 1;
while (j <= 3) {
    console.log("Step " + j);
    j++;
}



// foreach map and filter 
let numbers = [1, 2, 3, 4, 5];

// 1. forEach - Loops through the array (no return value)
console.log("forEach:");
numbers.forEach(num => console.log(num * 2)); // Just prints, does not return a new array

// 2. map - Creates a new array by doubling each value
let doubledNumbers = numbers.map(num => num * 2);
console.log("map:", doubledNumbers); // [2, 4, 6, 8, 10]

// 3. filter - Returns a new array with only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("filter:", evenNumbers); // [2, 4]


// if else 
let Age = 18;

if (Age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}














