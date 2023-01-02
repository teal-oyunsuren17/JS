const scale = 20;
const areaWidth = 20;
const areaHeight = 20;
const speed = 100;
let initialPosition = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    ];
let initialDirection = 'left';

// -------------------------------------//

const area = document.getElementById('area');
let positions = initialPosition;
let direction = initialDirection;
let food; 
area.style.width = `${areaWidth * scale}px`;
area.style.height = `${areaHeight * scale}px`;

// -------------------------------------//

generateFood();

// -------------------------------------//

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowDown' :
            changeDirection('down');
            break;
        case 'ArrowUp' :
            changeDirection('up');
            break;
        case 'ArrowLeft' :
            changeDirection('left');
            break;
        case 'ArrowRight' :
            changeDirection('right');
            break;
            
    }
})

// -------------------------------------//

function changeDirection(value) {
    if ( direction ==='up' || direction ==='down') {
        if (value === 'right' || value ==='left') {
            direction = value;
        }
    } else if ( direction ==='right' || direction ==='left') {
        if (value === 'up' || value ==='down') {
            direction = value;
        }
    }
}

// -------------------------------------//

function generateFood() {
    food = {
         x: Math.floor(Math.random() * areaWidth),
         y: Math.floor(Math.random() * areaHeight),
     };

     let hoolDavhardsan = false;
     for (let i = 0; i < positions.length ; i++) {
         if (positions[i].x === food.x && positions[i].y === food.y) {
             hoolDavhardsan = true;
             break;
         }
     }
     if (hoolDavhardsan) {
         generateFood();
     }
 }

 // -------------------------------------//

function goLeft() {
    let newPositions = [];
    newPositions.push( {
        y: positions[0].y,
        x: positions[0].x === 0 ? areaWidth -1  : positions[0].x -1,
    });
    for (let i =0; i < positions.length -1 ; i++) {
        newPositions.push(positions[i]);
    }

    positions = newPositions;
}

function goRight() {
    let newPositions = [];
    newPositions.push( {
        y: positions[0].y,
        x: positions[0].x === areaWidth - 1 ? 0 : positions[0].x + 1,
    });
    for (let i =0; i < positions.length -1; i++) {
        newPositions.push(positions[i]);
    }

    positions = newPositions;
}

function goDown() {
    let newPositions = [];
    newPositions.push( {
        x: positions[0].x,
        y: positions[0].y === areaHeight -1 ? 0 : positions[0].y + 1,
    });
    for (let i =0; i < positions.length - 1; i++) {
        newPositions.push(positions[i]);
    }

    positions = newPositions;
}

function goUp() {
    let newPositions = [];
    newPositions.push( {
        x: positions[0].x,
        y: positions[0].y === 0 ? areaHeight -1 : positions[0].y - 1,
    });
    for (let i =0; i < positions.length - 1; i++) {
        newPositions.push(positions[i]);
    }

    positions = newPositions;
}

// -------------------------------------//

function resetgame() {
    positions = initialPosition;
    direction = initialDirection;
    generateFood();
}

// -------------------------------------//

setInterval(() => {
    switch (direction) {
        case 'right' :
            goRight();
            break;
        case 'up' :
            goUp();
            break;
        case 'down' :
            goDown();
            break;
        case 'left' :
            goLeft();
            break;
    }

    const foodHtml = `<div class="food" style="width: ${scale}px; height: ${scale}px; top:${food.y * scale}px; left: ${food.x * scale}px;"></div>`
    const snakeBody = positions.map((position) => `<div id="snakeBody" style="width: ${scale}px; height: ${scale}px; top:${position.y * scale}px; left: ${position.x * scale}px;"></div>`).join('');
    area.innerHTML = foodHtml + snakeBody ;

    const head = positions[0];
    if (food.x === head.x && food.y === head.y) {
        positions.push({});
        generateFood();
    }

    for (let i = 1; i < positions.length; i++) {
        if (head.x === positions[i].x && head.y === positions[i].y) {
            alert('Game over');
            resetgame();
            break;
        }
    }
},200);

// -------------------------------------//
