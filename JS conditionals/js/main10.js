let question1 = prompt('Bi heden nastai we?')
const answer1 = 18 

let question2 = prompt('Heden on be?')
const answer2 = 2022

let question3 = prompt('Mongoliin niislel haana we?')
const answer3 = 'Ulaanbaatar' 

let question4 = prompt('Hamgiin zuun aimag?')
const answer4 = 'Dornod' 

let question5 = prompt('Horsh uls?')
const answer5 = 'China' 
const answer6 =  'Russia' 


let point = 0;

if(question1==answer1) {
    point++ 
}
if(question2==answer2) {
    point++ 
}
if(question3==answer3) {
    point++ 
}
if(question4==answer4) {
    point++ 
}
if(question5==answer5 || question5==answer6) {
    point++ 
}
else {
    console.log('dahin oroldono uu?') 
}
alert('your score:' + point)

let exp ;
if(point==5) {
     exp = 'A' 
}
if(point==4) {
     exp = 'B' 
}
if(point==3) {
     exp = 'C' 
}
if(point==2) {
     exp = 'D' 
}
if(point==1) {
     exp = 'F' 
}
else {
     exp = 0
}
alert('rank:' + exp)

