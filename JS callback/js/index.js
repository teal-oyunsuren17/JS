// function greeting(name) {
//     alert(`Hello,${name}`);
// }

// function greetings(callback) {
//     const name = prompt("Please enter your name");
//     callback(name);
// }
// greetings(greeting);



// function log() {
//     console.log('Hello world');
// }
// setTimeout(log,1000)
// // setInterval(log,1000)

// const btn = document.querySelectorAll('button')[0];

// btn.addEventListener('click', log);




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filter(numbers, callback) {
    let results = [];

    for ( let i =0; i < numbers.length ; i++ ) {
        if (callback(numbers[i])) {
            results.push(numbers[i]);
        }
    }
    return results;
}
const evens = filter(numbers, (n)=>{return n%2===0}); console.log(evens);
const odds = filter(numbers, (n)=>{return n%2!==0}); console.log(odds);
const three = filter(numbers, (n)=>{return n%3===0}); console.log(three);