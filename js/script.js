


const formSelect = document.getElementById('formSelect');
formSelect.addEventListener('click', play);

function createSquare(i, row){
    const square = document.createElement('div');
    square.classList.add('square')
    square.style.width = `calc(100% ${row})`;
    square.style.height = `calc(100% ${row})`;
    return square;
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
    console.log(squareNumbers);
    console.log(level);
    let row = Math.sqrt(squareNumbers);
    for(let i = 1; i <= squareNumbers; i++){
        table.appendChild(createSquare(i, row));
    }
}