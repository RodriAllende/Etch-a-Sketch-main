const container = document.getElementById('grid-container');
let gridSize = 16;
const resetButton = document.getElementById('reset-button');
let isDrawing = false;


function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); // Valor aleatorio entre 0 y 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function changeColor(e) {
    if (!isDrawing) return;
    const square = e.target;
    square.style.backgroundColor = getRandomRGB(); // Aplicar un valor RGB aleatorio
}

container.addEventListener('mousedown', () => {
    isDrawing = true;
});

container.addEventListener('mouseup', () => {
    isDrawing = false;
});

container.addEventListener('mouseover', changeColor);

function createGrid(size) {
    container.innerHTML = '';
    gridSize = size;

    const squareSize = 500 / size; // Ancho constante de 960 píxeles dividido por el número de cuadrados

    container.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        container.appendChild(square);
    }
}

function initializeGrid() {
    createGrid(gridSize);
}

resetButton.addEventListener('click', () => {
    const newSize = prompt('Ingrese la cantidad de cuadrados por lado (máx. 100):');
    const size = parseInt(newSize, 10);

    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Ingrese un valor válido (1-100).');
    }
});

initializeGrid();