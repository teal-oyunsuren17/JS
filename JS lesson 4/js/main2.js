// let output = '';
// for (let i=0 ; i<5 ; i++) {
//     for (k=0 ; k<5 ; k++) {
//         output += '*'
//         if (k === 4) {
//             output += '\n'
//         }
//     }
// }
// console.log(output)


const num = 9;
let output = '';
for ( let i=1 ; i<=num ; i++) {
    for (let j=1; j<=num ; j++) {
        if(i==1 || i==num || j==1 || j==num || j==i || i== num + 1 - j) {
            output +='* '
        }
        else {
            output +='  '
        }
    }
    output += '\n'
}
console.log(output)


    let row = 10;
    let out = ''
    for (let a = 1; a<=row ; a++) {
        for ( let b=a; b<=row; b++) {
            out += ' '
        }
        for ( let c=1 ; c<=a ; c++) {
            if( c==a || a==c + a - 1) {
                out += '* '
            }
            else {
                out +='* '
            }
        }
        out += '\n'
    }

    for (let d = 1; d<=2; d++) {
        for ( let e = 1; e<=11; e++ ) {
            out += ' '
            if ( e>=7 && e<=10 ) {
                out += '*'  
            }
        }
        out += '\n'

    }
    console.log(out)