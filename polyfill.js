// what is polyfill in javascript?

// A polyfill is a piece of code (usually JavaScript) that provides functionality that is not natively supported by a web browser. It allows developers to use modern features and APIs in older browsers that do not support them, ensuring that their web applications work consistently across different environments.

// Polyfills can be used to add support for new JavaScript features, HTML5 elements, CSS properties, and other web technologies. They typically check if a feature is available in the current environment, and if not, they implement it using existing capabilities.

// For example, if a developer wants to use the `Array.prototype.flat()` method, which is not supported in some older browsers, they can include a polyfill that defines this method if it doesn't already exist. This way, the code can run without errors in those browsers.

// In summary, polyfills help bridge the gap between modern web development practices and older browser capabilities, allowing developers to create more robust and compatible web applications.

// create a polyfill for Array.prototype.flat() method in javascript

// Here's a simple polyfill for the `Array.prototype.flat()` method in JavaScript:

if (!Array.prototype.flat) {
    Array.prototype.flat = function(depth = 1) {
        return this.reduce((acc, val) => {
            if (Array.isArray(val) && depth > 0) {
                acc.push(...val.flat(depth - 1));
            } else {
                acc.push(val);
            }
            return acc;
        }, []);
    };
}

// This polyfill checks if the `flat` method already exists on the `Array.prototype`. If it doesn't, it defines the method. The `depth` parameter specifies how deep a nested array structure should be flattened. The default value is 1, meaning it will flatten one level of nested arrays.

// Example usage:
const arr = [1, [2, [3, [4]]]];
console.log(arr.flat()); // Output: [1, 2, [3, [4]]]
console.log(arr.flat(2)); // Output: [1, 2, 3, [4]]
console.log(arr.flat(Infinity)); // Output: [1, 2, 3, 4]


// create the poly fill of reverse method of array in javascript

// Here's a simple polyfill for the `Array.prototype.reverse()` method in JavaScript:

if (!Array.prototype.reverse) {
    Array.prototype.reverse = function() {
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            const temp = this[i];
            this[i] = this[this.length - 1 - i];
            this[this.length - 1 - i] = temp;
        }
        return this;
    };
}

// In JavaScript, everything is an object, so we can add the method to the prototype of the array and check if the method is already present or not. If not, then we can add the method to the prototype of the array.

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // Output: [5, 4, 3, 2, 1]  

// how to prove that everything is an object in javascript?

// In JavaScript, while not everything is an object, many things are treated as objects or can be wrapped in objects. Here are some ways to demonstrate that many values in JavaScript can be treated as objects:

// 1. **Primitive Types**: JavaScript has primitive types like `string`, `number`, `boolean`, `null`, `undefined`, and `symbol`. However, when you access properties or methods on these primitives, JavaScript automatically wraps them in their corresponding object types (e.g., `String`, `Number`, `Boolean`).

   ```javascript
   let str = "Hello";
   console.log(str.length); // 5 (String object)
   console.log(typeof str); // "string"
   ```

// 2. **Functions**: Functions in JavaScript are first-class objects. They can have properties and methods.

   ```javascript
   function greet() {
       return "Hello";
   }
   greet.language = "English"; // Adding a property to the function
   console.log(greet.language); // "English"
   console.log(typeof greet); // "function"
   ```

// 3. **Arrays**: Arrays are also objects in JavaScript. They have properties and methods.

   ```javascript
   let arr = [1, 2, 3];
   console.log(arr.length); // 3
   console.log(typeof arr); // "object"
   ```

// 4. **Objects**: Objects are the most fundamental data type in JavaScript. They can hold key-value pairs.

   ```javascript
   let obj = { name: "Alice", age: 25 };
   console.log(obj.name); // "Alice"
   console.log(typeof obj); // "object"
   ```

// 5. **Using `Object.prototype.toString`**: You can use this method to check the internal class of a value.

   ```javascript
   console.log(Object.prototype.toString.call("Hello")); // "[object String]"
   console.log(Object.prototype.toString.call(42)); // "[object Number]"
   console.log(Object.prototype.toString.call(true)); // "[object Boolean]"
   console.log(Object.prototype.toString.call([])); // "[object Array]"
   console.log(Object.prototype.toString.call({})); // "[object Object]"
   console.log(Object.prototype.toString.call(function() {})); // "[object Function]"
   ```

// 6. **Using `typeof`**: The `typeof` operator can be used to check the type of a value.

   ```javascript
   console.log(typeof "Hello"); // "string"
   console.log(typeof 42); // "number"
   console.log(typeof true); // "boolean"
   console.log(typeof []); // "object"
   console.log(typeof {}); // "object"
   console.log(typeof function() {}); // "function"
   ```

// In summary, while not everything in JavaScript is an object (e.g., `null` and `undefined`), many values can be treated as objects or have object-like behavior, demonstrating the flexibility of JavaScript's type system.  
