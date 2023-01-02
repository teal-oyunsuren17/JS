const n = +prompt("enter a number");

const a = new Array(n);
for (let i=0; i<n; i++) {
    a[i] = new Array(n);
} 
 
a[0][0] = 1;

for (let i = 1; i<n; i++) {
    for (let j = 0; j<i+1; j++) {
        a[i][j] = sum(a[i-1][j], a[i-1][j-1]);
    }
} 

function sum(a=0, b=0) {
    return a + b;
}


let result = '';
for (let i = 0; i<n; i++) {
    for (let j=0; j < n-i-1; j++) {
        result += ' ';
    }

    for (let j=0; j<i+1; j++) {
        result = result + a[i][j] + ' ';
    }
    result +='\n';
}

console.log(a);
console.log(result);