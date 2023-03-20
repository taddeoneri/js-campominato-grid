


const formSelect = document.getElementById('formSelect');
formSelect.addEventListener('submit', play);

const numBombs = 16;

function createSquare(content, row){
    const square = document.createElement('div');
    square.classList.add('square')
    square.style.width = `calc(100% / ${row})`;
    square.style.height = `calc(100% / ${row})`;
    square.innerHTML = content;
    return square;
}


function createBombs(numbombs, max){
    const bombs = [];
    while(bombs.length < numbombs){
        const bomb = getRandomInt(1, max);
        if(!bombs.includes(bomb)){
            bombs.push(bomb);
        }
    }
    return bombs;
}


function play(e){
    e.preventDefault();
    const table = document.getElementById('table');
    table.innerHTML = '';
    const level = document.getElementById('select').value;
    let squareNumbers;

    if(level === 'Easy'){
        squareNumbers = 100;
    } else if(level === 'Medium'){
        squareNumbers = 81;
    } else{
        squareNumbers = 49;
    }
    
    const bombs = createBombs(numBombs, squareNumbers);
    console.log(bombs);
    let row = Math.sqrt(squareNumbers);

    for(let i = 1; i <= squareNumbers; i++){
        const square = createSquare(i, row);
        table.appendChild(square);
    }
    
}



function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
