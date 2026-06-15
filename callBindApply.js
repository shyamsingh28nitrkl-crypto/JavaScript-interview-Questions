// what is call and bind and apply in javascript?

// Call, Apply Bind 

function display(city, country){
    console.log(this.name + " is from " + city + ", " + country);
}
const user = {
    name: "John",
    age: 30
};

// Using call
display.call(user, "New York", "USA"); // Output: John is from New York, USA

// Using apply
display.apply(user, ["Los Angeles", "USA"]); // Output: John is from Los Angeles, USA

// Using bind
const boundDisplay = display.bind(user);
boundDisplay("Chicago", "USA"); // Output: John is from Chicago, USA


// what is the difference between call and apply?

// The main difference between call and apply is in how they accept arguments.

// - call: The call method accepts arguments as a comma-separated list. You pass the context (the value of this) as the first argument, followed by the individual arguments for the function.
//   Example: display.call(user, "New York", "USA");

// - apply: The apply method accepts arguments as an array. You pass the context as the first argument, followed by an array of arguments for the function.
//   Example: display.apply(user, ["Los Angeles", "USA"]);

// In summary, call is used when you want to pass arguments individually, while apply is used when you have an array of arguments that you want to pass to the function.    

// wht we use call bind and apply in javascript?

// We use call, bind, and apply in JavaScript to control the value of this when invoking a function. These methods allow us to specify the context in which a function should be executed, which can be particularly useful when working with objects and functions that need to access properties or methods of a specific object.

// - call: We use call when we want to invoke a function immediately and specify the context (the value of this) for that invocation. It allows us to pass arguments individually.
//   Example: display.call(user, "New York", "USA");

// - apply: We use apply when we want to invoke a function immediately and specify the context, but we have an array of arguments that we want to pass to the function.
//   Example: display.apply(user, ["Los Angeles", "USA"]);

// - bind: We use bind when we want to create a new function with a specific context (the value of this) that can be invoked later. It does not invoke the function immediately but returns a new function that can be called with the specified context and arguments.
//   Example: const boundDisplay = display.bind(user); boundDisplay("Chicago", "USA");

// In summary, call, bind, and apply are used to control the execution context of functions in JavaScript, allowing us to specify which object should be treated as this when the function is invoked.

// create your own bind method in javascript?

Function.prototype.myBind = function(context, ...args) {
    const fn = this; // Store the original function
    return function(...newArgs) { // Return a new function
        return fn.apply(context, [...args, ...newArgs]); // Call the original function with the specified context and arguments
    };
};

// Example usage:
function display(city, country) {
    console.log(this.name + " is from " + city + ", " + country);
}

const user1 = {
    name: "Alice"
};

const boundDisplay1 = display.myBind(user1);
boundDisplay1("Paris", "France"); // Output: Alice is from Paris, France


// create your own call method in javascript?

Function.prototype.myCall = function(context, ...args) {
    context = context || globalThis; // Set context to global object if it's null or undefined
    const fnSymbol = Symbol(); // Create a unique symbol to avoid property name conflicts
    context[fnSymbol] = this; // Assign the function to the context using the unique symbol
    const result = context[fnSymbol](...args); // Call the function with the provided arguments
    delete context[fnSymbol]; // Clean up by deleting the temporary property
    return result; // Return the result of the function call
};

// Example usage:
function display(city, country) {
    console.log(this.name + " is from " + city + ", " + country);
}

const user2 = {
    name: "Bob"
};

display.myCall(user2, "London", "UK"); // Output: Bob is from London, UK    

// create your own apply method in javascript?

Function.prototype.myApply = function(context, args) {
    context = context || globalThis; // Set context to global object if it's null or undefined
    const fnSymbol = Symbol(); // Create a unique symbol to avoid property name conflicts
    context[fnSymbol] = this; // Assign the function to the context using the unique symbol
    const result = context[fnSymbol](...args); // Call the function with the provided arguments
    delete context[fnSymbol]; // Clean up by deleting the temporary property
    return result; // Return the result of the function call
};

// Example usage:
function display(city, country) {
    console.log(this.name + " is from " + city + ", " + country);
}

const user3 = {
    name: "Charlie"
};

display.myApply(user3, ["Tokyo", "Japan"]); // Output: Charlie is from Tokyo, Japan

// top 5 logical question on call bind and apply in javascript?

// 1. What is the difference between call, apply, and bind in JavaScript?
// 2. How does the this keyword work in JavaScript, and how do call, apply, and bind affect it?
// 3. Can you provide an example of when you would use call, apply, or bind in a real-world scenario?
// 4. How can you create your own implementation of call, apply, or bind in JavaScript?
// 5. What are some common use cases for call, apply, and bind when working with objects and functions in JavaScript?

// top 5 coding question on call bind and apply in javascript?

// 1. Implement your own version of the call method in JavaScript.
// 2. Implement your own version of the apply method in JavaScript.
// 3. Implement your own version of the bind method in JavaScript.
// 4. Given a function and an object, use call or apply to invoke the function with the object as its context.
// 5. Given a function and an object, use bind to create a new function that has the object as its context, and then invoke that new function.

// show some coding question on call bind and apply in javascript?

// 1. Write a function that takes a string and an object, and uses call to log the string along with a property from the object.
// 2. Write a function that takes an array of numbers and an object, and uses apply to calculate the sum of the numbers while using a property from the object.
// 3. Write a function that takes a message and an object, and uses bind to create a new function that logs the message along with a property from the object when invoked.
// 4. Write a function that takes two numbers and an object, and uses call to return the product of the numbers multiplied by a property from the object.
// 5. Write a function that takes an array of strings and an object, and uses apply to concatenate the strings while using a property from the object as a separator.   

function concatenateStrings(strings, obj) {
    const separator = obj.separator || " ";
    return strings.join(separator);
}

// Example usage:
const stringArray = ["Hello", "world!"];
const options = {
    separator: ", "
};

const result = concatenateStrings(stringArray, options);
console.log(result); // Output: Hello, world!

// some bug question where we can use call bind and apply in javascript?

// 1. A common bug is when a function is called without the correct context, leading to undefined or unexpected values for this. Using call, apply, or bind can help ensure that the function is executed with the correct context.
// 2. Another bug can occur when trying to borrow a method from one object to use on another object. Using call or apply can allow you to borrow methods and avoid issues with this referring to the wrong object.
// 3. When working with event handlers, it's common to encounter bugs related to the value of this not being what you expect. Using bind can help ensure that the event handler has the correct context when it is invoked.
// 4. In cases where you want to create a new function with a specific context, using bind can help avoid bugs related to losing the original context of this.
// 5. When working with asynchronous code, it's possible to encounter bugs where the value of this changes due to the way functions are executed. Using call, apply, or bind can help maintain the correct context in asynchronous functions and avoid issues with this referring to the wrong object.

// A common bug is when a function is called without the correct context, leading to undefined or unexpected values for this. Using call, apply, or bind can help ensure that the function is executed with the correct context. For example:

const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const greetFunction = person.greet;
greetFunction(); // Output: Hello, my name is undefined

// To fix this bug, we can use bind to ensure that the greet function is called with the correct context:

const boundGreetFunction = person.greet.bind(person);
boundGreetFunction(); // Output: Hello, my name is Alice    

// Another bug can occur when trying to borrow a method from one object to use on another object. Using call or apply can allow you to borrow methods and avoid issues with this referring to the wrong object. For example:

const person1 = {
    name: "Bob",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const person2 = {
    name: "Charlie"
};

person1.greet.call(person2); // Output: Hello, my name is Charlie

// In this example, we borrowed the greet method from person1 and used call to invoke it with person2 as the context, allowing us to avoid issues with this referring to the wrong object.

// When working with event handlers, it's common to encounter bugs related to the value of this not being what you expect. Using bind can help ensure that the event handler has the correct context when it is invoked. For example:

const button = document.querySelector("button");
const userData = {
    name: "Dave",
    handleClick() {
        console.log(`Button clicked by ${this.name}`);
    }
};

button.addEventListener("click", userData.handleClick); // Output: Button clicked by undefined

// To fix this bug, we can use bind to ensure that the event handler has the correct context:

button.addEventListener("click", userData.handleClick.bind(userData)); // Output: Button clicked by Dave

// In this example, we used bind to ensure that the handleClick function is called with the correct context when the button is clicked, avoiding issues with this referring to the wrong object.

// In cases where you want to create a new function with a specific context, using bind can help avoid bugs related to losing the original context of this. For example:

const userDa = {
    name: "Eve",
    getName() {
        return this.name;
    }
};

const getNameFunction = userDa.getName;
console.log(getNameFunction()); // Output: undefined

// To fix this bug, we can use bind to create a new function with the correct context:

const boundGetNameFunction = user.getName.bind(user);
console.log(boundGetNameFunction()); // Output: Eve

// In this example, we used bind to create a new function that has the correct context, allowing us to avoid issues with this referring to the wrong object when we try to access the name property.

// When working with asynchronous code, it's possible to encounter bugs where the value of this changes due to the way functions are executed. Using call, apply, or bind can help maintain the correct context in asynchronous functions and avoid issues with this referring to the wrong object. For example:

const userInfo = {
    name: "Frank",
    fetchData() {
        setTimeout(function() {
            console.log(`Data fetched for ${this.name}`);
        }, 1000);
    }
};

userInfo.fetchData(); // Output: Data fetched for undefined

// To fix this bug, we can use bind to ensure that the function inside setTimeout has the correct context:

const userInfoFixed = {
    name: "Frank",
    fetchData() {
        setTimeout(function() {
            console.log(`Data fetched for ${this.name}`);
        }.bind(this), 1000);
    }
};

userInfoFixed.fetchData(); // Output: Data fetched for Frank

// In this example, we used bind to ensure that the function inside setTimeout has the correct context, allowing us to access the name property of userInfoFixed without issues.    


