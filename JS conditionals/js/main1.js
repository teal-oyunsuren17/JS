// daalgawar 1
let i = 4 > 3; //true
let ii = 4 >= 3;  //true
let iii = 4 < 3; //false 
let iv = 4 <= 3; //true - aldsan
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false 
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log(i)
console.log(ii)
console.log(iii)
console.log(iv)
console.log(v)
console.log(vi)
console.log(vii)
console.log(iix)
console.log(ix)
console.log(x)
console.log(xi)

// daalgawar 2
let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); //true

console.log(one)
console.log(two)
console.log(three)
console.log(four)
console.log(five)
console.log(six)
console.log(eight)
console.log(nine)
console.log(ten)

// daalgawar 3 
let age = prompt('How old are you?')

if(age<=18) {
    console.log('Chamd yugaar tuslah uu?')
}
else {
    console.log('Tand yugaar tuslah uu?')
}

// daalgawar 4
let day = prompt('What day is today?')
let response = day=='monday' || day=='tuesday' || day=='wednesday' || day=='thursday' || day=='friday' ? 'It is working day ' : 'It is holiday' 

console.log(response)

// daalgawar 5
let workHour = prompt('Ta hichneen tsag ajillasan be?')
let salary = workHour * 0.7 ;

console.log('ta' + workHour + 'tsag ajillasan tul' + salary + '$ tsalin awna')
