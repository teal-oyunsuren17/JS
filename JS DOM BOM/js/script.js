let n = 15;

let inputEl = document.getElementsByTagName('input')[0];

let inputValue = Number(inputEl.value);

let message = document.getElementsByClassName('message')[0];

let scoreEl = document.getElementsByClassName('score')[0];
let scoreText = Number(scoreEl.innerHTML);


function checkNumber() {

    if (isNaN(inputValue)) {
        message.innerHTML = 'Too oruulna uu'
    } else {
        if (inputValue > n) {
            message.innerHTML = 'Too ih baina';
            scoreEl.innerHTML = scoreText - 1 ;
            if (scoreText -1 === 0) {
                message.innerHTML = 'Ta hojigdloo';
            }
        } else if (inputValue < n) {
            message.innerHTML = 'Too baga baina';
            scoreEl.innerHTML = scoreText - 1 ;
            if (scoreText - 1 === 0) {
                message.innerHTML = 'Ta hojigdloo';
            }
        } else {
            message.innerHTML = 'Zov baina'
            document.body.style.backgroundColor = '#60b347'
        }
    }
}

