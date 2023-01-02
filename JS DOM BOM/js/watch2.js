
let minutes = 00;
let seconds = 00;
let doil = 000; 

setInterval(startTimer,100)

function startTimer() {
    seconds++
}

document.getElementsByClassName("menu").innerHTML = seconds;



