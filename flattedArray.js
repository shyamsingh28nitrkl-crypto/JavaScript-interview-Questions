// flatten the array 
arr1 = [[[1,2,3]], [2,3],5,6]


// o/p = [[1,2,3],2,3,5,6]
// o/p = [1,2,3,2,3,5,6]

// console.log(arr.flat(Infinity))

// function flatten(arr){
//     let res = []
//     for(let val of arr){
//         if(Array.isArray(val)){
//             res.push(...flatten(val))
//         } else {
//             res.push(val)
//         }
//     }
//     return res
// }

// console.log(flatten(arr))



Array.prototype.flatten = function(){
    let res = []
    for(let val of this){
        if(Array.isArray(val)){
            res.push(...val.flatten())
        } else {
            res.push(val)
        }
    }
    return res

}

console.log(arr.flatten())

// polyfill of map 

Array.prototype.myMap = function(callback){
    let res = []
    for(let val of this){
        res.push(callback(val))
    }
    return res

}


let arr1 = [1,2,3,4]
let res = arr1.map(data=> data * 2)
console.log(res)
let res1 = arr1.myMap(data=> data * 2)
console.log(res1)







