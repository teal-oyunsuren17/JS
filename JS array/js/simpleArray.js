let itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'iBM', 'oracle' , 'amazon'];

console.log('1--------------')

console.log(itCompanies) ; 
document.getElementById("demo").innerHTML = itCompanies; // 1

console.log('2--------------')


for (let i=0; i<itCompanies.length; i++ ) {
    console.log(itCompanies[i].length) 
}  // 2

console.log('3--------------')

for (let i=0; i<itCompanies.length; i++ ) {
    if (i===0 || 
        (itCompanies.length % 2 == 1 && i === Math.floor(itCompanies.length / 2) ) || 
        (itCompanies.length % 2 == 0 && i === itCompanies.length / 2 - 1 || i === itCompanies.length / 2 ) ||
        i=== itCompanies.length -1) {
            console.log(itCompanies[i]);
        }
} // 3

console.log('4--------------')

for (let i=0; i<itCompanies.length; i++) {
    console.log(itCompanies[i]);  
}     // 4

console.log('5--------------')

for (let i =0; i < itCompanies.length ; i++) {
    console.log(itCompanies[i].toLocaleUpperCase())
}// 5

console.log('6--------------')

let sentence ='' ;
for(let i =0; i<itCompanies.length; i++) {
    sentence += itCompanies[i] + ','
}
console.log(sentence + 'зэрэг мэдээллийн технологийн томоохон компаниуд.')// 6



