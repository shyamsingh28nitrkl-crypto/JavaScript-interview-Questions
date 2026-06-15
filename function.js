// type of function
// 1. Function Declaration
function add(a, b) {
    return a + b;
}

// 2. Function Expression
const subtract = function(a, b) {
    return a - b;
};

// 3. Arrow Function
const multiply = (a, b) => a * b;

// 4. IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE");
})();

// 5. Generator Function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

// give complex example of all functions types  


// expain the generator function with example
// A generator function is a special type of function in JavaScript that can be paused and resumed, allowing it to produce a sequence of values over time. It is defined using the `function*` syntax and uses the `yield` keyword to yield values one at a time.

function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

// Example usage:
const gen = idGenerator();

console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

// The generator function can be paused after each `yield`, and when `next()` is called again, it resumes execution from where it left off. This allows for efficient memory usage and the ability to generate potentially infinite sequences of values without storing them all in memory at once. 

//Advantages of generator functions:
// 1. Memory Efficiency: Generators produce values on-the-fly, which is useful for large datasets or infinite sequences.
// 2. Control Flow: They allow for more complex control flow, such as pausing and resuming execution.
// 3. Asynchronous Programming: Generators can be used with Promises to handle asynchronous operations in a more synchronous-like manner using libraries like co or async/await syntax in modern JavaScript.

// disadvantages of generator functions:
// 1. Complexity: Generators can introduce complexity in code, making it harder to read and maintain.
// 2. Performance Overhead: There may be a slight performance overhead compared to regular functions due to the state management required for pausing and resuming execution.
// 3. Limited Use Cases: Generators are not always necessary and may not be suitable for all scenarios, especially when simpler solutions exist.    


// function declaration vs function expression
// Function Declaration:
// 1. A function declaration defines a named function and is hoisted to the top of its scope, meaning it can be called before it is defined in the code.
// 2. It has a name and can be called using that name.
// 3. It is not assigned to a variable.

// Example:
function greet() {
    console.log("Hello!");
}
greet(); // Output: Hello!

// Function Expression:
// 1. A function expression defines a function and assigns it to a variable. It is not hoisted, so it cannot be called before it is defined in the code.
// 2. It can be anonymous (without a name) or named.
// 3. It can be used as a value, passed as an argument, or returned from another function.

// Example:
const greetExpression = function() {
    console.log("Hello from expression!");
};
greetExpression(); // Output: Hello from expression!

// In summary, the main difference between function declarations and function expressions is hoisting and how they are defined. Function declarations are hoisted and can be called before their definition, while function expressions are not hoisted and must be defined before they can be called.

// arrow function vs normal function
// Arrow Function:
// 1. Arrow functions are a more concise syntax for writing functions in JavaScript.
// 2. They do not have their own `this` context; instead, they inherit `this` from the surrounding lexical scope.
// 3. They cannot be used as constructors and do not have a `prototype` property.
// 4. They are always anonymous and cannot be named.

// Example:
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3)); // Output: 5

// Normal Function (Function Declaration or Expression):
// 1. Normal functions can be defined using function declarations or expressions.
// 2. They have their own `this` context, which is determined by how the function is called.
// 3. They can be used as constructors and have a `prototype` property.
// 4. They can be named or anonymous.

// Example:
function addNormal(a, b) {
    return a + b;
}
console.log(addNormal(2, 3)); // Output: 5

// In summary, the main differences between arrow functions and normal functions are their syntax, handling of `this`, and their ability to be used as constructors. Arrow functions provide a more concise syntax and inherit `this` from the surrounding context, while normal functions have their own `this` context and can be used as constructors.

// Advantages of Arrow Functions:
// 1. Concise Syntax: Arrow functions provide a shorter syntax for writing functions, making the code cleaner and easier to read.
// 2. Lexical `this`: Arrow functions inherit `this` from the surrounding context, which can help avoid common pitfalls with `this` in JavaScript.
// 3. No `arguments` Object: Arrow functions do not have their own `arguments` object, which can be beneficial in certain scenarios where you want to avoid confusion with the `arguments` object in nested functions.

// Disadvantages of Arrow Functions:
// 1. No Own `this`: Arrow functions do not have their own `this`, which can be a disadvantage when you need to use `this` in a specific context.
// 2. Cannot be Used as Constructors: Arrow functions cannot be used with the `new` keyword, so they cannot be used to create instances of objects.
// 3. Limited Use Cases: Arrow functions may not be suitable for all scenarios, especially when you need to use `this`, `arguments`, or when defining methods in object literals or classes.


// show 3 exaples of arrow fuction with advantages and disadvantages
// Example 1: Concise Syntax
const square = (x) => x * x;
console.log(square(5)); // Output: 25

// Advantage: The concise syntax makes the code cleaner and easier to read.
// Disadvantage: It may be less clear for developers who are not familiar with arrow functions.

// Example 2: Lexical `this`
function Person(name) {
    this.name = name;
    this.sayName = () => {
        console.log(this.name);
    };
}
const person = new Person("Alice");
person.sayName(); // Output: Alice

// Advantage: The arrow function inherits `this` from the surrounding context, avoiding common pitfalls with `this` in JavaScript.
// Disadvantage: If you need to use `this` in a different context, arrow functions may not be suitable.

// Example 3: No `arguments` Object
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10

// Advantage: The arrow function does not have its own `arguments` object, which can help avoid confusion in nested functions.
// Disadvantage: If you need to access the `arguments` object, arrow functions may not be suitable.     

// disadvantages of arrow functions  show examples  
// Example 1: No `this` Context
const obj = {
    value: 42,
    getValue: () => {
        return this.value;
    }
};
console.log(obj.getValue()); // Output: undefined

// Example 2: Cannot be Used as Constructors
const Person = (name) => {
    this.name = name;
};
const alice = new Person("Alice"); // TypeError: Person is not a constructor

// Example 3: Limited Use Cases
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6


// iif (Immediately Invoked Function Expression) vs normal function
// IIFE (Immediately Invoked Function Expression):
// 1. An IIFE is a function that is defined and immediately invoked (executed) after its creation.
// 2. It is often used to create a new scope and avoid polluting the global namespace.
// 3. It can be anonymous or named, but it is typically anonymous.

// Example:
(function() {
    console.log("This is an IIFE");
})(); // Output: This is an IIFE

// advantages of IIFE:  
// 1. Avoids Global Namespace Pollution: IIFEs create a new scope, preventing variables and functions from being added to the global scope.
// 2. Encapsulation: IIFEs allow you to encapsulate code and create private variables and functions that are not accessible from the outside.
// 3. Immediate Execution: IIFEs are executed immediately after their creation, which can be useful for initializing code or setting up event listeners.

// disadvantages of IIFE:
// 1. Readability: IIFEs can make code less readable, especially for developers who are not familiar with the pattern.
// 2. Debugging: Debugging IIFEs can be more challenging, as they do not have a name and may not appear in stack traces.
// 3. Limited Use Cases: IIFEs may not be necessary in modern JavaScript, as modules and block-scoped variables (let and const) provide better ways to manage scope and avoid global namespace pollution.

