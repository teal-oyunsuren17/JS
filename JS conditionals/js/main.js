// Huwisagch 1
let a = 85
let b = 75
let c = 96
let d = 69

if(a>80 && b>80 && c>80 && d>80) {
    console.log(a +b +c+ d)
}
else if (a<80 && b>80 && c>80 && d>80) {
    console.log(b+ c+ d)
}
else if (a>80 && b<80 && c>80 && d>80) {
    console.log(a+ c+ d)
}else if (a>80 && b>80 && c<80 && d>80) {
    console.log(b+ a+ d)
}else if (a>80 && b>80 && c>80 && d<80) {
    console.log(b+ c+ a)
}
else if (a<80 && b<80 && c>80 && d>80) {
    console.log(c+ d)
}
else if (a<80 && b>80 && c<80 && d>80) {
    console.log(b+ d)
}
else if (a<80 && b>80 && c>80 && d<80) {
    console.log(c+ b)
}
else if (a>80 && b<80 && c<80 && d>80) {
    console.log(a+ d)
}
else if (a>80 && b<80 && c>80 && d<80) {
    console.log(c+ a)
}
else if (a>80 && b>80 && c<80 && d<80) {
    console.log(a+ b)
}
else if (a<80 && b<80 && c<80 && d>80) {
    console.log(d)
}
else if (a<80 && b<80 && c>80 && d<80) {
    console.log(c)
}
else if (a<80 && b>80 && c<80 && d<80) {
    console.log(b)
}
else if (a>80 && b<80 && c<80 && d<80) {
    console.log(a)
}
else{
    console.log('0')
}

// Huwisagch 2-r daalgawar

let e = 3
let f = 7
let h = 2
let i = 4

if(e<5 && f<5 && h<5 && i<5) {
   console.log(e * f * h * i)
}
else if (e>5 && f<5 && h<5 && i<5) {
   console.log(f * h * i)
}
else if (e<5 && f>5 && h<5 && i<5) {
   console.log(e * h * i)
}else if (e<5 && f<5 && h>5 && i<5) {
   console.log(f * e * i)
}else if (e<5 && f<5 && h<5 && i>5) {
   console.log(f * h * e)
}
else if (e>5 && f>5 && h<5 && i<5) {
   console.log(h * i)
}
else if (e>5 && f<5 && h>5 && i<5) {
   console.log(f * i)
}
else if (e>5 && f<5 && h<5 && i>5) {
   console.log(h * f)
}
else if (e<5 && f>5 && h>5 && i<5) {
   console.log(e * i)
}
else if (e<5 && f>5 && h<5 && i>5) {
   console.log(h * e)
}
else if (e<5 && f<5 && h>5 && i>5) {
   console.log(e * f)
}
else if (e>5 && f>5 && h>5 && i<5) {
   console.log(i)
}
else if (e>5 && f>5 && h<5 && i>5) {
   console.log(h)
}
else if (e>5 && f<5 && h>5 && i>5) {
   console.log(f)
}
else if (e<5 && f>5 && h>5 && i>5) {
   console.log(e)
}
else{
   console.log('0')
}