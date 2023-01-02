let pEl = document.getElementById('demo');
pEl.innerHTML = "Hello world";
console.log(pEl);

pEl.style.color = 'teal';
pEl.style.backgroundColor = 'yellow';
pEl.style.textAlign = 'center';
pEl.style.fontSize = '20px';

// -----------------------------------
let divEl = document.getElementsByClassName('hi');
divEl[1].innerHTML = "Hi friends";
console.log(divEl);


// -----------------------------------
let liEl = document.querySelectorAll('ul li');

liEl[0].innerHTML = "HTML";
liEl[1].innerHTML = "CSS";
liEl[2].innerHTML = "JS";
// liEl[0].innerHTML = "HTML";
console.log(document.querySelectorAll('ul li'));

// -----------------------------------
let ulEl = document.querySelector('ul');
ulEl.style.marginLeft = '45vw';

// -----------------------------------
let marEl = document.getElementsByTagName('marquee');
marEl[0].innerHTML = "Oyunsuren's creation";

marEl[0].style.color = 'brown';
marEl[0].style.border ='2px black solid';
marEl[0].style.borderRadius ='15px';
marEl[0].style.width = '50vw';
marEl[0].style.marginLeft = '25vw';


