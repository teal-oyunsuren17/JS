let liEl = document.querySelectorAll('ul li');
console.log(liEl[0]);
console.log(liEl[liEl.length - 1]);

let sukh = document.getElementById('aimag-315');
console.log(sukh);

for (i=0; i<liEl.length; i++) {
    liEl[i].style.cssText = `
    font-size : 20px;
    font-family : Rubik Gemstones, cursive;
    color: blue;
    border : 3px solid black;
    border-radius: 10px;
    text-align: center;
    list-style: none;
    margin: 20px;
    padding: 0;
    `
    if (liEl[i].id[6]==1) liEl[i].style.backgroundColor = 'brown';
    if (liEl[i].id[6]==2) liEl[i].style.backgroundColor = 'yellow';
    if (liEl[i].id[6]==3) liEl[i].style.backgroundColor = 'pink';
    if (liEl[i].id[6]==4) liEl[i].style.backgroundColor = 'green';
    if (liEl[i].id[6]==5) liEl[i].style.backgroundColor = 'orange';
}