// array in javascript is a data structure that can hold multiple values in a single variable. It is an ordered collection of elements, where each element can be of any data type, including numbers, strings, objects, or even other arrays. Arrays are zero-indexed, meaning that the first element has an index of 0, the second element has an index of 1, and so on.  Arrays can be created using the array literal syntax or the Array constructor.

// how to declare an array in javascript?

// In JavaScript, you can declare an array using either the array literal syntax or the Array constructor. Here are examples of both methods:

// 1. Array Literal Syntax:
let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// 2. Array Constructor:
let anotherArray = new Array(6, 7, 8, 9, 10);
console.log(anotherArray); // Output: [6, 7, 8, 9, 10]

// You can also create an empty array and then add elements to it later:
let emptyArray = [];
emptyArray.push('a');
emptyArray.push('b');
console.log(emptyArray); // Output: ['a', 'b']  


// display all array methods in javascript with example

// Here are some commonly used array methods in JavaScript along with examples:

// 1. push(): Adds one or more elements to the end of an array.
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]

// 2. pop(): Removes the last element from an array.
let arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // Output: [1, 2]

// 3. shift(): Removes the first element from an array.
let arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3); // Output: [2, 3]

// 4. unshift(): Adds one or more elements to the beginning of an array.
let arr4 = [2, 3];
arr4.unshift(1);
console.log(arr4); // Output: [1, 2, 3]

// 5. concat(): Merges two or more arrays.
let arr5 = [1, 2];
let arr6 = [3, 4];
let mergedArray = arr5.concat(arr6);
console.log(mergedArray); // Output: [1, 2, 3, 4]

// 6. slice(): Returns a shallow copy of a portion of an array.
let arr7 = [1, 2, 3, 4, 5];
let slicedArray = arr7.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]

// 7. splice(): Changes the contents of an array by removing or replacing elements.
let arr8 = [1, 2, 3, 4];
arr8.splice(1, 2); // Removes 2 elements starting from index 1
console.log(arr8); // Output: [1, 4]

// 8. indexOf(): Returns the first index at which a given element can be found.
let arr9 = [1, 2, 3, 4];
let index = arr9.indexOf(3);
console.log(index); // Output: 2

// 9. includes(): Determines whether an array contains a certain element.
let arr10 = [1, 2, 3, 4];
let hasThree = arr10.includes(3);
console.log(hasThree); // Output: true

// 10. forEach(): Executes a provided function once for each array element.
let arr11 = [1, 2, 3];
arr11.forEach((element) => {
    console.log(element * 2);
});
// Output:
// 2
// 4
// 6

// 11. map(): Creates a new array with the results of calling a provided function on every element.
let arr12 = [1, 2, 3];
let mappedArray = arr12.map((element) => element * 2);
console.log(mappedArray); // Output: [2, 4, 6]

// 12. filter(): Creates a new array with all elements that pass a test.
let arr13 = [1, 2, 3, 4];
let filteredArray = arr13.filter((element) => element > 2);
console.log(filteredArray); // Output: [3, 4]

// 13. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
let arr14 = [1, 2, 3, 4];
let sum = arr14.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10

// 14. find(): Returns the value of the first element that satisfies a provided testing function.
let arr15 = [1, 2, 3, 4];
let foundElement = arr15.find((element) => element > 2);
console.log(foundElement); // Output: 3

// 15. findIndex(): Returns the index of the first element that satisfies a provided testing function.
let arr16 = [1, 2, 3, 4];
let foundIndex = arr16.findIndex((element) => element > 2);
console.log(foundIndex); // Output: 2

// 16. sort(): Sorts the elements of an array in place and returns the sorted array.
let arr17 = [3, 1, 4, 2];
arr17.sort();
console.log(arr17); // Output: [1, 2, 3, 4]

// 17. reverse(): Reverses the order of the elements in an array in place.
let arr18 = [1, 2, 3, 4];
arr18.reverse();
console.log(arr18); // Output: [4, 3, 2, 1]

// These are some of the most commonly used array methods in JavaScript. There are many more methods available, and you can refer to the official documentation for a comprehensive list.


// how many types declare a multidimensional array in javascript?   
let multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(multiArray);   
