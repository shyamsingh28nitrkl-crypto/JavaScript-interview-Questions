// what is ES6 and what are its key features?
// ES6, also known as ECMAScript 2015, is the sixth edition of the ECMAScript language specification. It introduced several new features and improvements to JavaScript, making it more powerful and easier to work with. Some of the key features of ES6 include:

// 1. let and const: ES6 introduced two new ways to declare variables, let and const, which provide block scope and help prevent issues related to variable hoisting.

// 2. Arrow Functions: Arrow functions provide a shorter syntax for writing functions and also lexically bind the this value, making them useful in certain contexts.

// 3. Template Literals: Template literals allow for easier string interpolation and multi-line strings using backticks (`) instead of single or double quotes.

// 4. Destructuring Assignment: Destructuring allows you to extract values from arrays or objects and assign them to variables in a more concise way.

// 5. Default Parameters: ES6 allows you to set default values for function parameters, making it easier to handle cases where arguments may be undefined.

// 6. Rest and Spread Operators: The rest operator (...) allows you to represent an indefinite number of arguments as an array, while the spread operator allows you to expand an array into individual elements.

// 7. Classes: ES6 introduced a class syntax for creating objects and handling inheritance, making it easier to work with object-oriented programming in JavaScript.

// 8. Modules: ES6 introduced a module system that allows you to import and export code between different files, promoting better code organization and reusability.

// 9. Promises: Promises provide a way to handle asynchronous operations more effectively, allowing for cleaner and more manageable code when dealing with callbacks.

// 10. Enhanced Object Literals: ES6 introduced shorthand syntax for defining object properties and methods, making it easier to create objects.

// 11. Iterators and Generators: Iterators provide a way to traverse through data structures, while generators allow you to define functions that can be paused and resumed, enabling more complex control flows.

// 12. Symbols: Symbols are a new primitive data type that can be used as unique identifiers for object properties, helping to avoid property name collisions.

// Overall, ES6 brought significant improvements to JavaScript, making it more modern, expressive, and easier to work with.    

// expalin the difference between var, let, and const in JavaScript.
// In JavaScript, var, let, and const are used to declare variables, but they have different characteristics and scoping rules:

// 1. var:
// - Scope: var is function-scoped, meaning it is accessible throughout the entire function in which it is declared. If declared outside of a function, it becomes globally scoped.
// - Hoisting: Variables declared with var are hoisted to the top of their scope, meaning they can be accessed before their declaration (though they will be undefined until the declaration is reached).
// - Re-declaration: Variables declared with var can be re-declared within the same scope without causing an error.

// 2. let:
// - Scope: let is block-scoped, meaning it is only accessible within the block (enclosed by curly braces {}) in which it is declared.
// - Hoisting: Variables declared with let are also hoisted, but they are not initialized until their declaration is reached. Accessing them before their declaration will result in a ReferenceError.
// - Re-declaration: Variables declared with let cannot be re-declared within the same scope, which helps prevent accidental overwriting of variables.

// 3. const:
// - Scope: const is also block-scoped, similar to let.
// - Hoisting: Like let, variables declared with const are hoisted but not initialized until their declaration is reached. Accessing them before their declaration will result in a ReferenceError.
// - Re-declaration: Variables declared with const cannot be re-declared within the same scope.
// - Immutability: const is used to declare variables that are meant to be constant and cannot be reassigned. However, if the variable holds an object or array, the contents of the object or array can still be modified (e.g., adding or removing properties or elements).

// In summary:
// - Use var for function-scoped variables (though it's generally recommended to avoid var in modern JavaScript).
// - Use let for block-scoped variables that may need to be reassigned.
// - Use const for block-scoped variables that should not be reassigned, but remember that the contents of objects and arrays declared with const can still be modified.    

// let vs const vs var code example
// var example
var x = 10;
if (true) {
    var x = 20; // This will overwrite the previous x
    console.log(x); // Output: 20
}
console.log(x); // Output: 20

// let example
let y = 10;
if (true) {
    let y = 20; // This is a new variable scoped to this block
    console.log(y); // Output: 20
}
console.log(y); // Output: 10

// const example
const z = 10;
if (true) {
    const z = 20; // This is a new variable scoped to this block
    console.log(z); // Output: 20
}
console.log(z); // Output: 10

// const with objects and arrays
const obj = { name: "Alice" };
obj.name = "Bob"; // This is allowed, as we are modifying the contents of the object
console.log(obj.name); // Output: Bob

const arr = [1, 2, 3];
arr.push(4); // This is allowed, as we are modifying the contents of the array
console.log(arr); // Output: [1, 2, 3, 4]       


// show some logic codeing examples using ES6 features  

// Example 1: Using arrow functions and template literals
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice")); // Output: Hello, Alice!

// Example 2: Using destructuring assignment
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;
console.log(firstName); // Output: John
console.log(lastName); // Output: Doe

// Example 3: Using default parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

// Example 4: Using rest and spread operators
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Example 5: Using classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Output: Rex barks.

// Example 6: Using Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "Alice" };
            resolve(data);
        }, 1000);
    });
};

fetchData()
    .then((data) => console.log(data)) // Output after 1 second: { id: 1, name: "Alice" }
    .catch((error) => console.error(error));

// Example 7: Using modules (ES6 module syntax)
// In file math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// In another file
import { add, subtract } from './math.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2 


// Example 8: Using enhanced object literals
const name = "Alice";
const age = 30;

const person1 = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.  

// Example 9: Using iterators and generators
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
console.log(generator.next().value); // Output: undefined

// Example 10: Using Symbols
const uniqueId = Symbol("id");
const user1 = {
    [uniqueId]: 1,
    name: "Alice"
};

const user2 = {
    [uniqueId]: 2,
    name: "Bob"
};

console.log(user1[uniqueId]); // Output: 1
console.log(user2[uniqueId]); // Output: 2  

// Example 11: Using async/await
const fetchDataAsync = async () => {
    try {
        const data = await fetchData();
        console.log(data); // Output after 1 second: { id: 1, name: "Alice" }
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();

// Example 12: Using Map and Set
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 30);
console.log(myMap.get("name")); // Output: Alice
console.log(myMap.size); // Output: 2

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate value, will not be added
console.log(mySet.has(1)); // Output: true
console.log(mySet.size); // Output: 2   

// Example 13: Using for...of loop
const array = [10, 20, 30];
for (const value of array) {
    console.log(value); // Output: 10, 20, 30
}

// Example 14: Using for...in loop
const obj1 = { a: 1, b: 2, c: 3 };
for (const key in obj1) {
    console.log(`${key}: ${obj1[key]}`); // Output: a: 1, b: 2, c: 3
}   

// Example 15: Using Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }
console.log(target); // Output: { a: 1, b: 4, c: 5 } (target is modified)

// Example 16: Using Object.entries() and Object.fromEntries()
const obj2 = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj2);
console.log(entries); // Output: [ ['a', 1], ['b', 2], ['c', 3] ]

const newObj = Object.fromEntries(entries);
console.log(newObj); // Output: { a: 1, b: 2, c: 3 } (reconstructed object)

// Example 17: Using Array.from()
const str = "hello";
const arrFromStr = Array.from(str);
console.log(arrFromStr); // Output: ['h', 'e', 'l', 'l', 'o']

const set = new Set([1, 2, 3]);
const arrFromSet = Array.from(set);
console.log(arrFromSet); // Output: [1, 2, 3] (converted from Set to Array) 

// Example 18: Using Array.find() and Array.findIndex()
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(element => element > 10);
console.log(found); // Output: 12 (first element greater than 10)

const foundIndex = numbers.findIndex(element => element > 10);
console.log(foundIndex); // Output: 1 (index of the first element greater than 10)

// Example 19: Using Array.includes()
const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('grape')); // Output: false

// Example 20: Using Array.some() and Array.every()
const ages = [32, 33, 16, 40];
const isAdult = ages.some(age => age >= 18);
console.log(isAdult); // Output: true (at least one element is >= 18)

const allAdults = ages.every(age => age >= 18);
console.log(allAdults); // Output: false (not all elements are >= 18)

// Example 21: Using Array.filter()
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4] (only even numbers) 

// Example 22: Using Array.reduce()
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (sum of all elements)

// Example 23: Using Array.sort()
const numbers3 = [4, 2, 5, 1, 3];
numbers3.sort((a, b) => a - b);
console.log(numbers3); // Output: [1, 2, 3, 4, 5] (sorted in ascending order)

// Example 24: Using Array.map()
const numbers4 = [1, 2, 3, 4, 5];
const doubled = numbers4.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10] (each element doubled)

// Example 25: Using Array.flat()
const nestedArray = [1, [2, [3, [4]], 5]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, [4], 5] (flattened to depth of 2) 

// Example 26: Using Array.flatMap()
const arr3 = [1, 2, 3];
const flatMapped = arr3.flatMap(num => [num, num * 2]);
console.log(flatMapped); // Output: [1, 2, 2, 4, 3, 6] (each element mapped and flattened)

// Example 27: Using Object.keys() and Object.values()
const obj3 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj3);
console.log(keys); // Output: ['a', 'b', 'c'] (array of keys)

const values = Object.values(obj3);
console.log(values); // Output: [1, 2, 3] (array of values) 
// Example 28: Using Object.freeze() and Object.seal()
const obj4 = { name: "Alice", age: 30 };
Object.freeze(obj4);
obj4.age = 31;
console.log(obj4.age); // Output: 30 (object is frozen, cannot modify properties)

const obj5 = { name: "Bob", age: 25 };
Object.seal(obj5);
obj5.age = 26;
console.log(obj5.age); // Output: 26 (object is sealed, can modify existing properties but cannot add new ones) 

// Example 29: Using String.includes() and String.startsWith()
const str1 = "Hello, world!";
console.log(str1.includes("world")); // Output: true (checks if "world" is in the string)
console.log(str1.startsWith("Hello")); // Output: true (checks if string starts with "Hello")   

// Example 30: Using String.endsWith() and String.repeat()
const str2 = "Hello, world!";
console.log(str2.endsWith("!")); // Output: true (checks if string ends with "!")
console.log(str2.repeat(3)); // Output: Hello, world!Hello, world!Hello, world! (repeats the string 3 times)  



// arrow function example
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5    

// conplex example using ES6 features
// Example: Fetching data from an API and processing it using ES6 features
const fetchDataFromAPI = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const processedData = data.map(item => ({
            id: item.id,
            name: item.name.toUpperCase(),
            isActive: item.isActive
        })).filter(item => item.isActive);
        return processedData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

// Usage
const apiURL = "https://api.example.com/users";
fetchDataFromAPI(apiURL).then(processedData => {
    console.log("Processed Data:", processedData);
}); 


//  logical questions on  var, let and const
// Question 1: What will be the output of the following code snippet?
function testVar() {
    var x = 1;
    if (true) {
        var x = 2; // Same variable, re-declared
        console.log(x); // Output: 2
    }
    console.log(x); // Output: 2 (var is function-scoped, so the same variable is modified)
}
testVar();

// Question 2: What will be the output of the following code snippet?
function testLet() {
    let y = 1;
    if (true) {
        let y = 2; // Different variable, block-scoped
        console.log(y); // Output: 2
    }   
    console.log(y); // Output: 1 (y is block-scoped, so the outer y is not affected)
}
testLet();

// Question 3: What will be the output of the following code snippet?
function testConst() {
    const z = 1;
    if (true) {
        const z = 2; // Different variable, block-scoped
        console.log(z); // Output: 2
    }
    console.log(z); // Output: 1 (z is block-scoped, so the outer z is not affected)
}
testConst();

// Question 4: What will be the output of the following code snippet?
function testConstObject() {
    const obj = { name: "Alice" };
    obj.name = "Bob"; // Allowed, modifying the contents of the object
    console.log(obj.name); // Output: Bob
}
testConstObject();

// Question 5: What will be the output of the following code snippet?
function testConstArray() {
    const arr = [1, 2, 3];
    arr.push(4); // Allowed, modifying the contents of the array
    console.log(arr); // Output: [1, 2, 3, 4]
}
testConstArray();

// Question 6: What will be the output of the following code snippet?
function testVarHoisting() {
    console.log(a); // Output: undefined (var is hoisted but not initialized)
    var a = 5;
}
testVarHoisting();

// Question 7: What will be the output of the following code snippet?
function testLetHoisting() {
    console.log(b); // Output: ReferenceError: Cannot access 'b' before initialization (let is hoisted but not initialized)
    let b = 5;
}
testLetHoisting();

// Question 8: What will be the output of the following code snippet?
function testConstHoisting() {
    console.log(c); // Output: ReferenceError: Cannot access 'c' before initialization (const is hoisted but not initialized)
    const c = 5;
}
testConstHoisting();

// Question 9: What will be the output of the following code snippet?
function testVarRedeclaration() {
    var d = 1;
    var d = 2;
    console.log(d); // Output: 2 (var can be re-declared in the same scope)
}
testVarRedeclaration(); 
// Question 10: What will be the output of the following code snippet?
function testLetRedeclaration() {
    let e = 1;  
    let e = 2; // SyntaxError: Identifier 'e' has already been declared
}
testLetRedeclaration();
// Question 11: What will be the output of the following code snippet?
function testConstRedeclaration() {
    const f = 1;
    const f = 2; // SyntaxError: Identifier 'f' has already been declared
}
testConstRedeclaration();

// Question 12: What will be the output of the following code snippet?
function testVarScope() {
    var g = 1;
    if (true) {
        var g = 2; // Same variable, function-scoped
        console.log(g); // Output: 2
    }
    console.log(g); // Output: 2 (var is function-scoped, so the same variable is modified)
}
testVarScope();

// Question 13: What will be the output of the following code snippet?
function testLetScope() {
    let h = 1;
    if (true) {
        let h = 2; // Different variable, block-scoped
        console.log(h); // Output: 2
    }
    console.log(h); // Output: 1 (h is block-scoped, so the outer h is not affected)
}
testLetScope();

// Question 14: What will be the output of the following code snippet?  
function testConstScope() {
    const i = 1;
    if (true) {
        const i = 2; // Different variable, block-scoped
        console.log(i); // Output: 2
    }
    console.log(i); // Output: 1 (i is block-scoped, so the outer i is not affected)
}
testConstScope();

// Question 15: What will be the output of the following code snippet?
function testConstObjectModification() {
    const obj = { name: "Alice" };
    obj.name = "Bob";
    console.log(obj.name); // Output: Bob (modifying the contents of the object is allowed)
}
testConstObjectModification();

// arrow function vs normal function example
// Normal function
function normalFunction(a, b) {
    return a + b;
}
console.log(normalFunction(2, 3)); // Output: 5

// Arrow function
const arrowFunction = (a, b) => a + b;
console.log(arrowFunction(2, 3)); // Output: 5

// Key differences:
// 1. Syntax: Arrow functions have a shorter syntax compared to normal functions.
// 2. this binding: Arrow functions do not have their own this context; they inherit it from the enclosing scope, while normal functions have their own this context.
// 3. Arguments object: Normal functions have an arguments object that contains all passed arguments, while arrow functions do not have their own arguments object.


// this and arrow function example
// Normal function
function normalFunctionThis() {
    console.log(this);
}
normalFunctionThis(); // Output: Window (in browsers) or global object (in Node.js)

// Arrow function
const arrowFunctionThis = () => {
    console.log(this);
}
arrowFunctionThis(); // Output: Window (in browsers) or global object (in Node.js) - inherits this from the enclosing scope

// Example of this in an object
const obj = {
    name: "Alice",
    normalMethod: function() {
        console.log(this.name);
    },
    arrowMethod: () => {
        console.log(this.name);
    }
};
obj.normalMethod(); // Output: Alice (this refers to obj)
obj.arrowMethod(); // Output: undefined (this refers to the enclosing scope, which is the global object)    

obj.arrowMethod.bind(obj)(); // Output: undefined (binding does not change the this context of an arrow function)   
obj.arrowMethod.call(obj); // Output: undefined (calling does not change the this context of an arrow function)
obj.arrowMethod.apply(obj); // Output: undefined (applying does not change the this context of an arrow function)

