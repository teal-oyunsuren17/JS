// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = [];

// for(let i=0 ; i < numbers.length ; i++) {
//     if(numbers[i]%2===0) {
//         result = result + numbers[i];
//     } 
// }
// console.log(result);

// for(let i=0 ; i < numbers.length ; i++) {
//     if(numbers[i]%2!==0) {
//         result = result + numbers[i];
//     }  
// }
// console.log(result)

// for(let i=0 ; i < numbers.length ; i++) {
//     if(numbers[i]%3===0) {
//         result = result + numbers[i];
//     }  
// }
// console.log(result)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(numbers , callback) {
    let result = [];
    for(let i=0; i<numbers.length ; i++) {
        if(callback(numbers[i])) {
            result.push(numbers[i])
        }
    }
    return result;
}
const evens = filter(numbers, function(n) {return n%2===0 }) ; console.log(evens);



