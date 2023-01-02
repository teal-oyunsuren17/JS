let n = Number(prompt('enter n number'))
let a1 = 0;
let a2 = 1;
let next;
if (n === 1) {
    console.log(a1)
} else if (n > 1) {
    console.log(a1)
    console.log(a2)
    for (let i = 0; i < n - 2; i++) {
        next = a1 + a2;
        a1 = a2;
        a2 = next;
        console.log(next)
    }
} else {
    console.log('error')
}
