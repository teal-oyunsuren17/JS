// 1 
function f1(y,x) {
    console.log(Math.pow(x,2) + Math.pow(y,2)) ;
}
f1(3,4);

// 2
function f2(x) {
    console.log(Math.pow(x,Math.E))
}
f2(6)

// 3
function f3(a,b) {
    console.log(Math.pow(a,2) - Math.pow(b,2))
}
f3(5,4)

// 4
function f4(a,b) {
    console.log(Math.pow(a,2) + Math.pow(b,2) )
}
f4(3,4)

// 5
function f5(y) {
    console.log(Math.pow(y,2) - 2*y + 4)
}
f5(7)

// 6
function f6(a,b) {
    console.log(a - b * (Math.pow(a,2) + Math.pow(b,2) - a));
}
f6(8,9)

// 7
function f7(a,b) {
    console.log(2 * (a + b))
}
f7(14,15)

// 8
function f8(a,b) {
    console.log(Math.pow(a + b , 2))
}
f8(5,6)

// 9
function f9(a,b) {
    console.log(Math.pow(a,2) - Math.pow(b,2));
}
f9(7,3)

// 10
function f10(a,b) {
    console.log(a * b);
}
f10(10,11)

// 11
function f11(a,b) {
    console.log(3 * Math.pow(a * b ,2))
}
f11(9,8)

// 12
function f12(x,y) {
    console.log(3 * Math.pow(x,3) - 2 * Math.pow(y,3))
}
f12(6,9)

// 13
function f13(a,b) {
    console.log(a / b);
}
f13(8,4)

// 14
function f14(y) {
    console.log(Math.pow(y,3) - 3 * Math.pow(y,2) + 8)
}
f14(23)

// 15 
function f15(x,y) {
    console.log(Math.pow( 1 /x,2) - Math.pow( 1 /y,2))
}
f15(3,6)

// 16 
function f16(x,y) {
    console.log(Math.sqrt(Math.pow(x,2) - Math.pow(y,2)))
}
f16(9,8)

// 17
function factorial(x) {
    let total = 1;
    for( i=1; i<= x; i++) {
        total = total * i;
    }
    console.log(total)
}
factorial(6)

// 18 
function E(m,c) {
    // let c = 300000;
    console.log(m* Math.pow(c, 2))
}
E(5,300000)

// --------------------
function myFunction( p1,p2){
    // console.log(p1 + p2);
    return p1 + p2
}
console.log(myFunction(2,3) )

// ----------------------------
function isEven (number) {
    let result = ''
    if(number % 2 ==0) {
        // console.log('its even number')
        result = 'its even number'
    }
    else {
        // console.log('its odd number')
        result = 'its odd number'
    }
    return result ;
}
console.log(isEven(6))
isEven(7)


// --------------
function findMax(a,b)  {
    if( a>b) {
        return a;
    } else {
        return b;
    }
}
console.log(findMax(8,9))
console.log(findMax(10,9))
console.log(findMax(48,49))
console.log(findMax(68,79))
console.log(findMax(68,68))

// ----------------
// console.log(x(68,79))
let x = function(a,b) {
    if( a>b) {
        return a;
    } else {
        return b;
    }
}
console.log(x(8,9))
console.log(x(10,9))
console.log(x(48,49))
console.log(x(68,68))

// --------------
// console.log(y(68,79))

// let mean = (a,b) => {
//     if( a>b) {
//         return a;
//     } else {
//         return b;                                                                                                                         
//     }
// }

// let a = prompt('enter a number');
// let b = prompt('enter b number'); 
// console.log(mean(a, b))
// console.log(y(356,9))
// console.log(y(10,9))
// console.log(y(48,49))
// console.log(y(68,68))


// ------------------
let max = -1000;
const arr = [5,8,10,99,6,179];
let arrayMax = (array) => {
    for(let index = 0; index<array.length ; index++) {
        if(max<=array[index]) {
            max = array[index];
        }
    }
}
arrayMax(arr)
console.log(max)