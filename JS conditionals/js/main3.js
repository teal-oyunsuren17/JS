const min = prompt('min number')
const max = prompt('max number')

// const random = Math.floor(Math.random() * (Number(max) - Number(min) + 1 ) + Number(min) ) 
const random = Math.floor(Math.random() * (+max - +min + 1 ) + +min ) 

console.log(random)


const firstName = 'Purevsuren'
console.log(firstName.length) ;

const lastName = 'Oyunsuren'
console.log(lastName.length) ;
