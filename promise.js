// Promise is a built-in JavaScript object that represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.

// A Promise is created using the Promise constructor, which takes a function as an argument. 
// This function is called the executor function, and it receives two arguments: resolve and reject. 
// The resolve function is used to fulfill the promise with a value, while the reject function is used to reject the promise with a reason.

// Example of creating a Promise:
const pro = new Promise((resolve, reject) => {
    let flag = true;
    if (flag) {
        resolve(6); // Fulfill the promise with the value 6
    } else {
        reject("Error"); // Reject the promise with an error message
    }
});

// Handling the Promise using then and catch:
pro.then(data => console.log(data)) // This will log 6 if the promise is fulfilled
   .catch(err => console.log(err)); // This will log "Error" if the promise is rejected

// Promises are commonly used for handling asynchronous operations such as API calls, 
// file reading, and timers. They provide a cleaner and more manageable way to handle 
// asynchronous code compared to traditional callback functions. 

// Additionally, Promises can be chained together using the then method, allowing for   sequential asynchronous operations. The catch method can be used to handle any errors that occur in the promise chain.

// Example of chaining Promises:
pro.then(data => {
    console.log(data); // Logs 6
    return data * 2; // Returns 12 for the next then
}).then(result => {
    console.log(result); // Logs 12
}).catch(err => {
    console.log(err); // Handles any errors in the chain
});     

// In summary, Promises are a powerful tool in JavaScript for managing asynchronous operations, providing a more elegant and readable way to handle success and error cases compared to callbacks.  

//prototype of promise

Promise.prototype.myThen = function(onFulfilled, onRejected) {
    const self = this;
    return new Promise((resolve, reject) => {
        self.then(
            value => {
                try {
                    const result = onFulfilled ? onFulfilled(value) : value;
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            },
            reason => {
                try {
                    const result = onRejected ? onRejected(reason) : reason;
                    reject(result);
                } catch (error) {
                    reject(error);
                }
            }
        );
    });
}

// promise statics methods

Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                },
                reason => {
                    reject(reason);
                }
            );
        });
    });
}

Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(
                value => resolve(value),
                reason => reject(reason)
            );
        });
    });
}

Promise.myAllSettled = function(promises) {
    return new Promise((resolve) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                value => {
                    results[index] = { status: 'fulfilled', value };
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                },
                reason => {
                    results[index] = { status: 'rejected', reason };
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                }
            );
        });
    });
}

Promise.myAny = function(promises) {
    return new Promise((resolve, reject) => {
        let errors = [];
        let rejectedCount = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                value => resolve(value),
                reason => {
                    errors[index] = reason;
                    rejectedCount++;
                    if (rejectedCount === promises.length) {
                        reject(new AggregateError(errors, 'All promises were rejected'));
                    }
                }
            );
        });
    });
}       

// write definition of all polyfill methods of promise

// 1. Promise.myAll: This method takes an array of promises and returns a new promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject. The resolved value is an array of the resolved values from the input promises.

// 2. Promise.myRace: This method takes an array of promises and returns a new promise that resolves or rejects as soon as one of the input promises resolves or rejects. The resolved value or rejection reason is the value from the first settled promise.

// 3. Promise.myAllSettled: This method takes an array of promises and returns a new promise that resolves when all of the input promises have settled (either resolved or rejected). The resolved value is an array of objects, each representing the outcome of each promise (with status and value/reason).

// 4. Promise.myAny: This method takes an array of promises and returns a new promise that resolves as soon as any of the input promises resolves. If all input promises reject, it rejects with an AggregateError containing all the rejection reasons.    

// write example of all promise static methods  

// Example of Promise.myAll
Promise.myAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(values => {
    console.log(values); // [1, 2, 3]
}).catch(error => {
    console.error(error);
});

// Example of Promise.myRace
Promise.myRace([
    new Promise((resolve, reject) => setTimeout(resolve, 100, 'one')),
    new Promise((resolve, reject) => setTimeout(resolve, 50, 'two')),
    new Promise((resolve, reject) => setTimeout(reject, 75, 'three'))
]).then(value => {
    console.log(value); // 'two'
}).catch(error => {
    console.error(error);
});

// Example of Promise.myAllSettled
Promise.myAllSettled([
    Promise.resolve(1),
    Promise.reject('error'),
    Promise.resolve(3)
]).then(results => {
    console.log(results);
    // [
    //     { status: 'fulfilled', value: 1 },
    //     { status: 'rejected', reason: 'error' },
    //     { status: 'fulfilled', value: 3 }
    // ]
});

// Example of Promise.myAny
Promise.myAny([
    Promise.reject('error1'),
    Promise.reject('error2'),
    Promise.resolve('success')
]).then(value => {
    console.log(value); // 'success'
}).catch(error => {
    console.error(error);
});

// In summary, these static methods provide different ways to handle multiple promises, allowing you to wait for all promises to settle,
// or to proceed as soon as the first promise settles, depending on your specific use case.


// eaxmple of promise chaining

Promise.resolve(1)
    .then(value => {
        console.log(value); // 1
        return value * 2; // 2
    })
    .then(value => {
        console.log(value); // 2
        return value * 3; // 6
    })
    .then(value => {
        console.log(value); // 6
    })
    .catch(error => {
        console.error(error);
    });

// In this example, we start with a resolved promise with the value of 1. Each then method takes the resolved value from the previous promise, performs an operation on it, and returns a new value for the next then in the chain. If any error occurs in any of the then methods, it will be caught by the catch method at the end of the chain.

// Example of error handling in promise chaining

Promise.resolve(1)
    .then(value => {
        console.log(value); // 1
        throw new Error('Something went wrong'); // This will cause the promise to reject
    })
    .then(value => {
        console.log(value); // This will not be executed
    })
    .catch(error => {
        console.error(error.message); // 'Something went wrong'
    });

// In this example, we throw an error in the first then method, which causes the promise to reject. The catch method at the end of the chain catches the error and logs its message.

// Example of returning a promise in then method

Promise.resolve(1)
    .then(value => {
        console.log(value); // 1
        return new Promise((resolve) => {
            setTimeout(() => resolve(value * 2), 1000); // Returns a promise that resolves to 2 after 1 second
        });
    })
    .then(value => {
        console.log(value); // 2 (after 1 second)
    })
    .catch(error => {
        console.error(error);
    });

// In this example, the first then method returns a new promise that resolves after a delay. The next then method waits for that promise to resolve before executing, demonstrating how promise chaining can handle asynchronous operations seamlessly.

// In summary, promise chaining allows you to perform a series of asynchronous operations in a clean and readable manner, while also providing robust error handling through the use of catch.

//write the all static method of promise with example like all, race, allSettled, any   

// Example of Promise.all
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(values => {
    console.log(values); // [1, 2, 3]
}).catch(error => {
    console.error(error);
});

// Example of Promise.race
Promise.race([
    new Promise((resolve, reject) => setTimeout(resolve, 100, 'one')),
    new Promise((resolve, reject) => setTimeout(resolve, 50, 'two')),
    new Promise((resolve, reject) => setTimeout(reject, 75, 'three'))
]).then(value => {
    console.log(value); // 'two'
}).catch(error => {
    console.error(error);
});

// Example of Promise.allSettled
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject('error'),
    Promise.resolve(3)
]).then(results => {
    console.log(results);
    // [
    //     { status: 'fulfilled', value: 1 },
    //     { status: 'rejected', reason: 'error' },
    //     { status: 'fulfilled', value: 3 }
    // ]
});

// Example of Promise.any
Promise.any([
    Promise.reject('error1'),
    Promise.reject('error2'),
    Promise.resolve('success')
]).then(value => {
    console.log(value); // 'success'
}).catch(error => {
    console.error(error);
});

// In summary, these static methods provide different ways to handle multiple promises, allowing you to wait for all promises to settle,
// or to proceed as soon as the first promise settles, depending on your specific use case.

// write the flow of suppose we have 3 promises p1, p2, p3 and we are using promise.all to handle them.

// Let's say we have three promises: p1, p2, and p3. We want to use Promise.all to handle them. Here's how the flow would work:

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(values => {
        console.log(values); // [1, 2, 3]
    })
    .catch(error => {
        console.error(error);
    });

// In this example, we create three promises: p1, p2, and p3. We then use Promise.all to wait for all of them to resolve. If all promises resolve successfully, we get an array of their resolved values. If any promise rejects, the catch block will handle the error.

//what will be the output of below code

const p11 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1 resolved'), 1000);
});
const p22 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p2 resolved'), 2000);
});
const p33 = new Promise((resolve, reject) => {
    setTimeout(() => reject('p3 rejected'), 1500);
});

Promise.all([p11, p22, p33])
    .then(values => {
        console.log(values);
    })
    .catch(error => {
        console.error(error); // 'p3 rejected'
    });

// In this code, we have three promises: p1, p2, and p3. p1 resolves after 1 second, p2 resolves after 2 seconds, and p3 rejects after 1.5 seconds. Since Promise.all waits for all promises to resolve and rejects if any promise rejects, the output will be 'p3 rejected' in the catch block.

// I have call 3 api and one api failed but i want to get the response of all api which are success how can i do that



// You can use Promise.allSettled to get the response of all APIs, including those that failed. This method will return an array of objects, each representing the outcome of each promise (with status and value/reason). Here's how you can do it:

const api1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('API 1 response'), 1000);
});
const api2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('API 2 failed'), 1500);
});
const api3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('API 3 response'), 2000);
});

Promise.allSettled([api1, api2, api3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`API ${index + 1} succeeded with response: ${result.value}`);
            } else {
                console.log(`API ${index + 1} failed with reason: ${result.reason}`);
            }
        });
    })
    .catch(error => {
        console.error(error);
    });

// In this code, we have three API calls represented as promises. We use Promise.allSettled to wait for all of them to settle, regardless of whether they resolve or reject. The then block iterates through the results and logs the response for successful APIs and the reason for failed APIs.
// Output:
// API 1 succeeded with response: API 1 response
// API 2 failed with reason: API 2 failed
// API 3 succeeded with response: API 3 response        

// Difference between Promise.all and Promise.allSettled and other promise sttaic methods

// 1. Promise.all: This method takes an array of promises and returns a new promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject. The resolved value is an array of the resolved values from the input promises. If any promise rejects, the entire Promise.all will reject immediately with that reason.

// 2. Promise.allSettled: This method takes an array of promises and returns a new promise that resolves when all of the input promises have settled (either resolved or rejected). The resolved value is an array of objects, each representing the outcome of each promise (with status and value/reason). It does not reject if any promise rejects; instead, it provides the status of each promise.        

// 3. Promise.race: This method takes an array of promises and returns a new promise that resolves or rejects as soon as one of the input promises resolves or rejects. The resolved value or rejection reason is the value from the first settled promise. It does not wait for all promises to settle, only the first one.

// 4. Promise.any: This method takes an array of promises and returns a new promise that resolves as soon as any of the input promises resolves. If all input promises reject, it rejects with an AggregateError containing all the rejection reasons. It is useful when you want to proceed as soon as the first promise resolves, regardless of the others.

// In summary, Promise.all is used when you want to wait for all promises to resolve successfully, while Promise.allSettled is used when you want to know the outcome of all promises regardless of their success or failure. Promise.race is used when you want to proceed as soon as the first promise settles, and Promise.any is used when you want to proceed as soon as the first promise resolves, ignoring any rejections.  

// write the code for wea are calling 3 api one of then has failed annd to retry based on delay or failure case

const apiCall = (id, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 2) {
                reject(`API ${id} failed`);
            } else {
                resolve(`API ${id} response`);
            }
        }, delay);
    });
};

const callAPIs = async () => {
    const apiCalls = [
        apiCall(1, 1000),
        apiCall(2, 1500),
        apiCall(3, 2000)
    ];

    const results = await Promise.allSettled(apiCalls);

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`API ${index + 1} succeeded with response: ${result.value}`);
        } else {
            console.log(`API ${index + 1} failed with reason: ${result.reason}`);
        }
    });
};

callAPIs();

// In this code, we define a function apiCall that simulates an API call with a given id and delay. The function returns a promise that resolves for successful API calls and rejects for failed ones. We then define an async function callAPIs that calls three APIs and uses Promise.allSettled to handle their outcomes. The results are logged to the console, showing which APIs succeeded and which failed.

//  top 5 logical question on promise

// 1. How can you implement a timeout for a promise that rejects if the promise does not resolve within a certain time frame?

// 2. How can you create a function that retries a promise a specified number of times with a delay between each retry if it fails?

// 3. How can you implement a function that limits the number of concurrent promises being executed at the same time?

// 4. How can you create a function that takes an array of promises and returns a new promise that resolves with the value of the first promise that resolves successfully, ignoring any rejections?

// 5. How can you implement a function that takes an array of promises and returns a new promise that resolves with an array of results for all promises that resolved successfully, while ignoring any rejections? 

//example of implementing a timeout for a promise

const promiseWithTimeout = (promise, timeout) => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Promise timed out'));
        }, timeout);

        promise.then(value => {
            clearTimeout(timer);
            resolve(value);
        }).catch(error => {
            clearTimeout(timer);
            reject(error);
        });
    });
}

// Example usage:
const myPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Success!'), 2000);
});

promiseWithTimeout(myPromise, 3000)
    .then(value => console.log(value)) // Logs 'Success!' after 2 seconds
    .catch(error => console.error(error)); // Will not be called

promiseWithTimeout(myPromise, 1000)
    .then(value => console.log(value)) // Will not be called
    .catch(error => console.error(error)); // Logs 'Promise timed out' after 1 second

// In this code, the promiseWithTimeout function takes a promise and a timeout duration. It creates a new promise that sets a timer to reject if the original promise does not resolve within the specified time. If the original promise resolves or rejects before the timer expires, the timer is cleared, and the new promise resolves or rejects accordingly.

// Example of a function that retries a promise with a delay

const retryPromise = (fn, retries, delay) => {
    return new Promise((resolve, reject) => {
        const attempt = (n) => {
            fn().then(resolve).catch(error => {
                if (n > 0) {
                    setTimeout(() => attempt(n - 1), delay);
                } else {
                    reject(error);
                }
            });
        };
        attempt(retries);
    });
}

// Example usage:
const unreliablePromise = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            if (success) {
                resolve('Success!');
            } else {
                reject(new Error('Failed'));
            }
        }, 500);
    });
}

retryPromise(unreliablePromise, 3, 1000)
    .then(value => console.log(value)) // Logs 'Success!' if it succeeds within 3 attempts
    .catch(error => console.error(error)); // Logs 'Failed' if all attempts fail

// In this code, the retryPromise function takes a function that returns a promise, the number of retries, and the delay between retries. It attempts to execute the function and resolves if it succeeds. If it fails, it checks if there are retries left and schedules another attempt after the specified delay. If all attempts fail, it rejects with the last error.

// Example of limiting the number of concurrent promises